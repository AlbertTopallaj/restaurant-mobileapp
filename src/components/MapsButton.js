import {ActivityIndicator, Animated, Linking, Pressable} from "react-native";
import {StyleSheet} from "react-native";
import {useEffect, useRef, useState} from "react";
import * as Location from "expo-location";

export default function MapsButton() {

    let systemBolagetDataDump;
    let myLatitude;
    let myLongitude;

    const [loading, setLoading] = useState(false);


    async function getDrunk() {
        setLoading(true);
        try {
            if (!systemBolagetDataDump) {
                const response = await fetch(
                    "https://api-extern.systembolaget.se/sb-api-ecommerce/v1/sitesearch/site/?includePredictions=true",
                    {
                        method: "GET",
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json",
                            "Ocp-Apim-Subscription-Key": "8d39a7340ee7439f8b4c1e995c8f3e4a"
                        }
                    }
                );

                if (!response.ok) {
                    throw new Error(`Systembolaget API: ${response.status}`);
                }

                const dataDump = await response.json()

                systemBolagetDataDump = dataDump.siteSearchResults
            }

            if (systemBolagetDataDump.length === 0) throw new Error(`siteSearchResults returned empty`);

            const {status} = await Location.requestForegroundPermissionsAsync();

            if (status !== "granted") {
                throw new Error(`Requires foreground permission`)
            }


            const getCurrentLocation = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.Balanced
            });

            const timeout = new Promise(r => {
                setTimeout(() => r(null), 2000)
            })

            let location = await Promise.race([
                getCurrentLocation, timeout
            ])

            if (!location) location = await Location.getLastKnownPositionAsync({
                maxAge: 10 * 60 * 1000,
                requiredAccuracy: 5000
            });

            myLatitude = location.coords.latitude;
            myLongitude = location.coords.longitude;


            let nearestSite = null;
            let nearestDistance = Number.MAX_VALUE;

            for (const site of systemBolagetDataDump) {
                const latitude = site.position.latitude
                const longitude = site.position.longitude

                const distance = getDistance(latitude, longitude)

                if (distance < nearestDistance) {
                    nearestDistance = distance
                    nearestSite = site
                }
            }

            Linking.openURL(
                `https://www.google.com/maps/dir/?api=1` +
                `&destination=${nearestSite.position.latitude},${nearestSite.position.longitude}` +
                `&dir_action=navigate`
            )
        } catch (e) {
            console.log(e.message)
        } finally {
            setLoading(false);
        }


    }

    function getDistance(lat, lon) {
        // Haversine
        const R = 6371;

        const dLat = (lat - myLatitude) * Math.PI / 180;
        const dLon = (lon - myLongitude) * Math.PI / 180;

        const a =
            Math.sin(dLat / 2) ** 2 +
            Math.cos(myLatitude * Math.PI / 180) *
            Math.cos(lat * Math.PI / 180) *
            Math.sin(dLon / 2) ** 2;

        return R * 2 * Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1 - a)
        );
    }


    const scale = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(scale, {
                    toValue: 1.15,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(scale, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, [loading]);

    return (
        <Pressable style={style.element} onPress={() => getDrunk()}>
            {loading ? <ActivityIndicator size="large" style={{transform: [{scale: 2}]}}/> :
                <Animated.Image style={[style.image, {transform: [{scale}]}]}
                                source={require("../resources/beermug.png")}/>}
        </Pressable>
    )
}

const style = StyleSheet.create({
        element: {
            position: "absolute",
            justifyContent: "center",
            alignContent: "center",
            width: 110,
            aspectRatio: 142 / 170,


            right: 0,
            bottom: 40,
            zIndex: 100,
        },
        image: {
            resizeMode: "contain",
            width: "100%",
            height: "100%",
        }
    }
)
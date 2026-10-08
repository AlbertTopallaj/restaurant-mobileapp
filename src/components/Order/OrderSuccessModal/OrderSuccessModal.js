import Ionicons from "@react-native-vector-icons/ionicons";
import { Pressable } from "react-native";
import { View } from "react-native";
import { Modal } from "react-native";

export default function OrderSuccessModal({ visible, onClose }) {
    return (
        <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.modal}>
                    <Ionicons
                    name="checkmark-circle"
                    size={64}
                    color="#4CAF50"
                    />

                    <Text style={styles.title}>
                        Beställningen är gjord!
                    </Text>

                    <Text style={styles.message}>
                        Tack för din beställning hos oss på Sunket. Vi förbereder din mat med extra kärlek.
                    </Text>

                    <Text style={styles.time}>
                        Beräknad väntetid: 15 minuter
                    </Text>

                    <Pressable
                    style={styles.button}
                    onPress={onClose}
                    >
                    <Text style={styles.buttonText}>
                        Tillbaka till menyn
                    </Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}
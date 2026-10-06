import { View, Text, TouchableOpacity} from 'react-native';
import {styles} from "../style.js";
import {useState} from "react";

const texts = ["", "Vidrigt!", "Skitäckligt!", "Inte gott!", "Smaskens!", "Så jävla gott!"];

export default function StarRating({ max = 5, start = 0, onChange }) {
    const [rating, setRating] = useState(start);

    const select = (n) => {
        setRating(n);
        onChange?.(n);
};

    return (
        <View>
        <View style={{flexDirection: 'row'}}>
            {Array.from({ length: max }, (_, i) => i + 1 ).map ((n) => (
                <TouchableOpacity key={n} onPress={() => select(n)}>
                    <Text style={{fontSize: 36, color: '#f5a623'}}>{n <= rating ? '★' : '☆'}</Text>
                </TouchableOpacity>
            ))}
        </View>
        <Text style={{ fontSize: 20, marginTop: 5, alignSelf: 'center' }}>
        {rating}{rating === 1 ? ' Stjärna' : ' Stjärnor'}</Text>
        <Text style={{ fontSize: 16, marginTop: 5, alignSelf: 'center' }}>{texts[rating]}</Text>
        </View>
    );
}
        
 
        
    
   




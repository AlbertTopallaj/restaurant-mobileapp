import Ionicons from "@react-native-vector-icons/ionicons";
import { View, Text, Modal, Pressable } from "react-native";
import { styles } from "./OrderSuccessModalStyle";

export default function OrderSuccessModal({ visible, onClose }) {
    return (
        <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={onClose}
        accessibilityViewIsModal={true}
        >
            <View style={styles.overlay}>
                <View accessible={true} accessibilityRole="alert" style={styles.modal}>
                    <Ionicons
                    name="checkmark-circle"
                    size={64}
                    color="#4CAF50"
                    accessible={false}
                    />

                    <Text accessible={true} style={styles.title}>
                        Beställningen är gjord!
                    </Text>

                    <Text accessible={true} style={styles.message}>
                        Tack för din beställning hos oss på Sunket. Vi förbereder din mat med extra kärlek.
                    </Text>

                    <Text accessible={true} style={styles.time}>
                        Beräknad väntetid: 15 minuter
                    </Text>

                    <Pressable
                    style={styles.button}
                    onPress={onClose}
                    accessible={true}
                    accessibilityRole="button"
                    accessibilityLabel="Tillbaka till menyn"
                    accessibilityHint="Stänger bekräftelsemodalen"
                    >
                    <Text accessible={true} style={styles.buttonText}>
                        Tillbaka till menyn
                    </Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}
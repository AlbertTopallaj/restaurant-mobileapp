export function ToastProvider({ children }) {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState("");

    function showToast(message) {
        setMessage(message);
        setVisible(true);

        setTimeout(() => {
            setVisible(false);
        }, 3000);
    }
}
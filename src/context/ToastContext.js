import { createContext, useContext, useState } from "react";
import Toast from "../components/Order/Toast/Toast";

const ToastContext = createContext();

export function ToastProvider({ children }) {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState("");
    const [type, setType] = useState("");

    function showToast(message) {
        setMessage(message);
        setType(type);
        setVisible(true);

        setTimeout(() => {
            setVisible(false);
        }, 3000);
    }

    return (
    <ToastContext.Provider value={{ showToast }}>
        {children}

        <Toast message={message} visible={visible} type={type}/>
    </ToastContext.Provider>
    )
}

    export function useToast() {
        return useContext(ToastContext);
    }

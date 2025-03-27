import { useState } from "react";

function MessageInput({ onSendMessage }) {
    const [message, setMessage] = useState("");

    const handleSend = () => {
        if (message.trim() === "") return;

        onSendMessage(message);
        setMessage(""); // Reset input setelah pesan dikirim
    };

    return (
        <div className="flex items-center p-4 border-t bg-white">
            <input
                type="text"
                className="flex-1 p-2 border rounded-lg focus:outline-none"
                placeholder="Ketik pesan..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={handleSend}
            >
                Kirim
            </button>
        </div>
    );
}

export default MessageInput;

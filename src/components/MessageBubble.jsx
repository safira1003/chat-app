import { useMemo } from "react";

function MessageBubble({ message, userRole }) {
    const isOwnMessage = message.sender === userRole;

    // Fungsi untuk menghasilkan warna unik berdasarkan email
    const getBubbleColor = useMemo(() => {
        const hashCode = (str) => {
            let hash = 0;
            for (let i = 0; i < str.length; i++) {
                hash = str.charCodeAt(i) + ((hash << 5) - hash);
            }
            return hash;
        };

        const intToHsl = (hash) => {
            const hue = hash % 360; // Hue antara 0-360
            return `hsl(${hue}, 70%, 50%)`; // Saturation 70%, Lightness 50%
        };

        return intToHsl(hashCode(message.sender));
    }, [message.sender]);

    return (
        <div className={`flex flex-col ${isOwnMessage ? "items-end" : "items-start"} mb-4`}>
            {/* Nama Pengirim */}
            {!isOwnMessage && (
                <p className="text-sm font-semibold text-gray-700 mb-1">{message.sender}</p>
            )}

            {/* Bubble Chat */}
            <div
                className={`p-3 rounded-lg text-white max-w-xs`}
                style={{ backgroundColor: getBubbleColor }}
            >
                {message.message}
            </div>
        </div>
    );
}

export default MessageBubble;

import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

function ChatMessages({ messages, userRole }) {
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-100">
            {messages.map((msg) => (
                <MessageBubble key={msg.id} message={msg} userRole={userRole} />
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
}

export default ChatMessages;

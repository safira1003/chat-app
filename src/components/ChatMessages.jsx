import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

function ChatMessages({ messages, userRole }) {
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-3 
                       
                        scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-transparent">
            {messages.map((msg, index) => (
                <MessageBubble
                    key={msg.id || index}
                    message={msg}
                    userRole={userRole}
                />
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
}

export default ChatMessages;

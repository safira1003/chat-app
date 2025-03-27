import { useEffect, useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import MessageInput from "./MessageInput";

function ChatRoom({ room, userRole }) {
    const storageKey = `chatRoom_${room.room.id}`;

    const [messages, setMessages] = useState(() => {
        const savedMessages = JSON.parse(localStorage.getItem(storageKey));
        return savedMessages || room.comments;
    });

    const getUserEmail = () => {
        const user = room.room.participant.find((p) => {
            if (userRole === "admin") return p.role === 0;
            if (userRole === "agent") return p.role === 1;
            if (userRole === "customer") return p.role === 2;
            return null;
        });
        return user ? user.id : "unknown@mail.com";
    };

    useEffect(() => {
        const savedMessages = JSON.parse(localStorage.getItem(storageKey));
        setMessages(savedMessages || room.comments);
    }, [room, storageKey]);

    const handleSendMessage = (newMessage) => {
        const updatedMessages = [...messages, { ...newMessage, sender: getUserEmail() }];
        setMessages(updatedMessages);
        localStorage.setItem(storageKey, JSON.stringify(updatedMessages));
    };

    return (
        <div className="flex-1 flex flex-col w-full bg-gradient-to-b from-gray-100 to-white shadow-lg overflow-hidden transition-all duration-300">
            <ChatHeader room={room} />
            <ChatMessages messages={messages} userRole={getUserEmail()} />
            <MessageInput onSendMessage={handleSendMessage} />
        </div>
    );
}

export default ChatRoom;

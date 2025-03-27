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
        return user ? user.id : "unknown@mail.com"; // Default jika tidak ditemukan
    };

    useEffect(() => {
        const savedMessages = JSON.parse(localStorage.getItem(storageKey));
        setMessages(savedMessages || room.comments);
    }, [room, storageKey]);

    const handleSendMessage = (text) => {
        const newMessage = {
            id: Date.now(),
            type: "text",
            message: text,
            sender: getUserEmail(), 
        };

        const updatedMessages = [...messages, newMessage];
        setMessages(updatedMessages);
        localStorage.setItem(storageKey, JSON.stringify(updatedMessages));
    };

    return (
        <div className="flex-1 flex flex-col bg-white shadow-lg">
            <ChatHeader room={room} />
            <ChatMessages messages={messages} userRole={getUserEmail()} />
            <MessageInput onSendMessage={handleSendMessage} />
        </div>
    );
}

export default ChatRoom;

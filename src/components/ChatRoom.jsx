import { useEffect, useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import MessageInput from "./MessageInput";

function ChatRoom({ room, userRole, onBack  }) {
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
        <div className="w-full md:w-[75%] flex flex-col bg-gradient-to-b from-gray-100 to-white shadow-lg transition-all duration-300">
            <div className="sticky top-0 z-10 bg-white shadow-md">
                <ChatHeader room={room} onBack={onBack}/>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-2 h-screen">
                <ChatMessages messages={messages} userRole={getUserEmail()} />
            </div>

            <div className="sticky bottom-18 md:bottom-0 bg-white shadow-md">
                <MessageInput onSendMessage={handleSendMessage} />
            </div>
        </div>
    );
}

export default ChatRoom;

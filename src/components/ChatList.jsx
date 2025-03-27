
function ChatList({ rooms, selectedRoom, setSelectedRoom }) {
    return (
        <div className="w-[35%] md:w-[25%] h-screen max-h-screen bg-white shadow-lg flex flex-col border-r border-gray-200">
            {/* Header Chat List */}
            <div className="px-4 py-2 text-base font-semibold border-b bg-gray-100 text-gray-800">
                Daftar Chat
            </div>

            {/* Daftar chat bisa di-scroll */}
            <div className="flex-1 overflow-y-auto">
                {rooms.map((chat) => (
                    <button
                        key={chat.room.id}
                        className={`cursor-pointer flex items-center p-3 w-full text-left transition-all duration-300 
                            ${selectedRoom?.room.id === chat.room.id ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : "hover:bg-gray-100"}`}
                        onClick={() => setSelectedRoom(chat)}
                    >
                        <img src={chat.room.image_url} alt="Room" className="w-12 h-12 rounded-full mr-3 border border-gray-300" />
                        <div className="flex-1">
                            <p className="font-semibold text-sm">{chat.room.name}</p>
                        </div>
                        <p className="text-xs text-gray-400">{chat.last_time}</p>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ChatList;

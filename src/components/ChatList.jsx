// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

function ChatList({ rooms, selectedRoom, setSelectedRoom }) {
    return (
        <div className="w-80 h-full bg-white shadow-lg flex flex-col overflow-y-auto">
            <div className="p-4 text-lg font-semibold border-b">Daftar Chat</div>

            {rooms.map((chat) => (
                <button
                    key={chat.room.id}
                    className={`flex items-center p-3 w-full text-left ${selectedRoom?.room.id === chat.room.id ? "bg-gray-300" : "hover:bg-gray-200"
                        }`}
                    onClick={() => setSelectedRoom(chat)}
                >
                    <img src={chat.room.image_url} alt="Room" className="w-12 h-12 rounded-full mr-3" />
                    <div>
                        <p className="font-semibold">{chat.room.name}</p>
                    </div>
                </button>
            ))}
        </div>
    );
}

export default ChatList;

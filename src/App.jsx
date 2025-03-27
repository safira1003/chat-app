import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import ProfileMenu from "./components/ProfileMenu";
import ChatList from "./components/ChatList";
import ChatRoom from "./components/ChatRoom";
import chatData from "./data.json";

function App() {
  const [activeMenu, setActiveMenu] = useState("chat");
  const [userRole, setUserRole] = useState("customer");
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    const storedRooms = localStorage.getItem("chatRooms");
    if (storedRooms) {
      setRooms(JSON.parse(storedRooms));
    } else {
      setRooms(chatData.results);
    }
  }, []);

  useEffect(() => {
    if (rooms.length > 0) {
      localStorage.setItem("chatRooms", JSON.stringify(rooms));
    }
  }, [rooms]);

  return (
    <div className="flex h-screen bg-white text-gray-900">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} userRole={userRole} />

      <div className="flex flex-1 w-full">
        {activeMenu === "chat" ? (
          <>
            <ChatList rooms={rooms} selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} />
            {selectedRoom ? (
              <ChatRoom room={selectedRoom} userRole={userRole} />
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-500">
                Pilih chat untuk memulai percakapan
              </div>
            )}
          </>
        ) : (
          <ProfileMenu userRole={userRole} setUserRole={setUserRole} />
        )}
      </div>
    </div>
  );
}

export default App;
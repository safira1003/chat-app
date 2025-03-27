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
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />


      {activeMenu === "chat" ? (
        <div className="flex flex-1">
          <ChatList
            rooms={rooms}
            selectedRoom={selectedRoom}
            setSelectedRoom={setSelectedRoom}
          />
          {selectedRoom ? (
            <ChatRoom
              room={selectedRoom}
              userRole={userRole}
            />
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              Pilih chat untuk memulai percakapan
            </div>
          )}
        </div>
      ) : (
        <ProfileMenu userRole={userRole} setUserRole={setUserRole} />
      )}
    </div>
  );
}

export default App;

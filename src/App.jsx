import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import ProfileMenu from "./components/ProfileMenu";
import ChatList from "./components/ChatList";
import ChatRoom from "./components/ChatRoom";
import ToggleView from "./components/ToggleView";
import BottomNav from "./components/BottomNav";
import chatData from "./data.json";

function App() {
  const [activeMenu, setActiveMenu] = useState("chat");
  const [userRole, setUserRole] = useState("");
  const [isRoleSelected, setIsRoleSelected] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("userRole");
    if (storedRole) {
      setUserRole(storedRole);
      setIsRoleSelected(true);
    }

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

  const handleRoleSelect = (role) => {
    setUserRole(role);
    setIsRoleSelected(true);
    localStorage.setItem("userRole", role);
  };

  if (!isRoleSelected) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-b from-blue-600 to-purple-600">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <div className="text-stone-600 text-2xl font-bold text-center mb-5">ChatApp</div>
          <ToggleView userRole={userRole} setUserRole={handleRoleSelect} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row h-screen bg-white text-gray-900">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} userRole={userRole} className="hidden md:flex" />

      <div className="flex flex-1 w-full h-screen">
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

      <BottomNav activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
    </div>
  );
}

export default App;

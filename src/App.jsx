import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ProfileMenu from "./components/ProfileMenu";

function App() {
  const [activeMenu, setActiveMenu] = useState("chat"); // Menyimpan menu yang aktif
  const [userRole, setUserRole] = useState("customer"); // Sudut pandang

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

      {/* Halaman Chat atau Profile */}
      <div className="flex-1">
        {activeMenu === "profile" ? (
          <ProfileMenu userRole={userRole} setUserRole={setUserRole} />
        ) : (
          <div className="flex items-center justify-center h-full">
            <h1 className="text-2xl font-semibold text-gray-700">Pilih chat untuk memulai percakapan</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

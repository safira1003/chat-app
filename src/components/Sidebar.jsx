import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faUser } from "@fortawesome/free-solid-svg-icons";

function Sidebar({ activeMenu, setActiveMenu }) {
    return (
        <div className="w-64 h-full bg-white shadow-lg flex flex-col">
            {/* Logo */}
            <div className="p-4 border-b border-gray-300 text-lg font-bold text-gray-800">
                My Chat App
            </div>

            {/* Menu */}
            <div className="flex-1">
                <button
                    className={`flex items-center px-4 py-3 w-full text-gray-700 hover:bg-gray-200 ${activeMenu === "chat" ? "bg-gray-300 font-semibold" : ""
                        }`}
                    onClick={() => setActiveMenu("chat")}
                >
                    <FontAwesomeIcon className="mr-3 text-lg" icon={faCommentDots} />
                    Chat
                </button>
                <button
                    className={`flex items-center px-4 py-3 w-full text-gray-700 hover:bg-gray-200 ${activeMenu === "profile" ? "bg-gray-300 font-semibold" : ""
                        }`}
                    onClick={() => setActiveMenu("profile")}
                >
                    <FontAwesomeIcon className="mr-3 text-lg" icon={faUser} />
                    Profile
                </button>
            </div>
        </div>
    );
}

export default Sidebar;

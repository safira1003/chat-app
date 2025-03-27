import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faUser } from "@fortawesome/free-solid-svg-icons";

function Sidebar({ activeMenu, setActiveMenu, userRole }) {
    return (
        <div className="w-20 h-full bg-gradient-to-b from-blue-600 to-purple-600 shadow-xl flex flex-col justify-between items-center py-6">
            <div className="text-white text-sm font-bold text-center mb-5">ChatApp</div>

            <div className="flex-1 flex flex-col gap-4">
                <button
                    className={`cursor-pointer rounded-xl flex justify-center items-center p-3 w-14 h-14 transition-all duration-300 
                        ${activeMenu === "chat" ? "bg-white text-blue-600 shadow-lg" : "text-white hover:bg-white hover:text-blue-600"}`}
                    onClick={() => setActiveMenu("chat")}
                >
                    <FontAwesomeIcon className="text-2xl" icon={faCommentDots} />
                </button>
                <button
                    className={`cursor-pointer rounded-xl flex justify-center items-center p-3 w-14 h-14 transition-all duration-300 
                        ${activeMenu === "profile" ? "bg-white text-purple-600 shadow-lg" : "text-white hover:bg-white hover:text-purple-600"}`}
                    onClick={() => setActiveMenu("profile")}
                >
                    <FontAwesomeIcon className="text-2xl" icon={faUser} />
                </button>
            </div>

            <div className="text-center text-white text-xs font-medium bg-white/20 px-2 py-1 rounded-lg">
                Role:
                <br />
                {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
            </div>
        </div>
    );
}

export default Sidebar;
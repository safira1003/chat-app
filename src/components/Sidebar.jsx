import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faUser } from "@fortawesome/free-solid-svg-icons";

function Sidebar({ activeMenu, setActiveMenu }) {
    return (
        <div className="w-20 h-full bg-white shadow-lg flex flex-col justify-center items-center">
            <div className="p-4 border-b border-gray-300 text-lg font-bold text-gray-800 text-center mb-3">
                My Chat App
            </div>

            <div className="flex-1 flex flex-col gap-1">
                <button
                    className={`cursor-pointer rounded-full flex justify-center items-center p-2 w-12 h-12 text-gray-700 hover:bg-gray-200 ${activeMenu === "chat" ? "bg-gray-300 font-semibold" : ""
                        }`}
                    onClick={() => setActiveMenu("chat")}
                >
                    <FontAwesomeIcon className="text-2xl" icon={faCommentDots} />
                </button>
                <button
                    className={`cursor-pointer rounded-full flex justify-center items-center p-2 w-12 h-12 text-gray-700 hover:bg-gray-200 ${activeMenu === "profile" ? "bg-gray-300 font-semibold" : ""
                        }`}
                    onClick={() => setActiveMenu("profile")}
                >
                    <FontAwesomeIcon className="text-2xl" icon={faUser} />
                </button>
            </div>
        </div>
    );
}

export default Sidebar;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faUser } from "@fortawesome/free-solid-svg-icons";

function BottomNav({ activeMenu, setActiveMenu }) {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 shadow-xl flex justify-around py-3">
            <button
                className={`cursor-pointer rounded-xl flex justify-center items-center p-3 w-16 h-16 transition-all duration-300 
                    ${activeMenu === "chat" ? "bg-white text-blue-600 shadow-lg font-bold" : "text-white hover:bg-white hover:text-blue-600"}`}
                onClick={() => setActiveMenu("chat")}
            >
                <FontAwesomeIcon className="text-2xl" icon={faCommentDots} />
            </button>

            <button
                className={`cursor-pointer rounded-xl flex justify-center items-center p-3 w-16 h-16 transition-all duration-300 
                    ${activeMenu === "profile" ? "bg-white text-purple-600 shadow-lg font-bold" : "text-white hover:bg-white hover:text-purple-600"}`}
                onClick={() => setActiveMenu("profile")}
            >
                <FontAwesomeIcon className="text-2xl" icon={faUser} />
            </button>
        </div>
    );
}

export default BottomNav;

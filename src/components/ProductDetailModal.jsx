import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function ProductDetailModal({ room, closeModal }) {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(closeModal, 200);
    };

    if (!room || !room.room) return null;

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-lg z-50 
                        transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
            <div
                className={`flex flex-col items-center bg-white rounded-xl shadow-2xl p-6 w-96 relative transform transition-all duration-300 ease-out
                            ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
            >
                <button
                    className="cursor-pointer absolute top-3 right-3 text-gray-500 hover:text-red-500 transition-all duration-200"
                    onClick={handleClose}
                >
                    <FontAwesomeIcon icon={faTimes} className="text-2xl" />
                </button>

                <img
                    src={room.room.image_url}
                    alt={room.room.name}
                    className="w-52 h-52 object-cover rounded-lg shadow-md border border-gray-300"
                />

                <h2 className="text-xl font-bold text-gray-800 mt-4">{room.room.name}</h2>

                <div className="mt-4 w-full">
                    <h3 className="text-base font-medium text-gray-700 mb-2 text-start">Peserta Chat :</h3>
                    <ul className="bg-gray-100 p-3 rounded-lg shadow-inner space-y-2">
                        {room.room.participant.map((user) => (
                            <li key={user.id} className="text-gray-800 text-sm font-medium flex items-center gap-2">
                                {user.name} -
                                <span className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs">{user.id}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailModal;

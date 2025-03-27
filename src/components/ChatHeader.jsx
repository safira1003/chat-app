import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import ProductDetailModal from "./ProductDetailModal";

function ChatHeader({ room, onBack }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="p-4 flex items-center cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md transition-all duration-300 hover:opacity-90"
        onClick={() => setIsModalOpen(true)}
      >
        {onBack && (
          <button onClick={onBack} className="mr-4 text-white cursor-pointer">
            <FontAwesomeIcon icon={faArrowLeft} className="text-xl" />
          </button>
        )}
        <img
          src={room.room.image_url}
          alt="Room"
          className="w-12 h-12 rounded-full border-2 border-white shadow-lg mr-3"
        />
        <div>
          <p className="font-semibold text-lg">{room.room.name}</p>
        </div>
      </div>

      {isModalOpen && (
        <ProductDetailModal room={room} closeModal={() => setIsModalOpen(false)} />
      )}
    </>
  );
}

export default ChatHeader;

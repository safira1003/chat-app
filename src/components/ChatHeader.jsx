import { useState } from "react";
import ProductDetailModal from "./ProductDetailModal";

function ChatHeader({ room }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="p-4 border-b flex items-center cursor-pointer hover:bg-gray-100"
        onClick={() => setIsModalOpen(true)}
      >
        <img src={room.room.image_url} alt="Room" className="w-10 h-10 rounded-full mr-3" />
        <div>
          <p className="font-semibold">{room.room.name}</p>
        </div>
      </div>

      {isModalOpen && (
        <ProductDetailModal room={room} closeModal={() => setIsModalOpen(false)} />
      )}
    </>
  );
}

export default ChatHeader;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function ProductDetailModal({ room, closeModal }) {
    if (!room || !room.room) return null; // Cegah error jika room belum tersedia

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 w-96 relative">
                {/* Tombol Close */}
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 cursor-pointer"
                    onClick={closeModal}
                >
                    <FontAwesomeIcon icon={faTimes} className="text-xl" />
                </button>

                {/* Gambar Produk */}
                <img
                    src={room.room.image_url}
                    alt={room.room.name}
                    className="w-75 h-75 object-cover rounded-lg mb-4"
                />

                {/* Nama Produk */}
                <h2 className="text-xl font-semibold text-center">{room.room.name}</h2>

                {/* Daftar Peserta */}
                <div className="mt-4">
                    <h3 className="text-lg font-medium mb-2">Peserta Chat:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                        {room.room.participant.map((user) => (
                            <li key={user.id} className="text-gray-700">
                                {user.name} ({user.id})
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailModal;

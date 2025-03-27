import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faTimes, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function MessageInput({ onSendMessage }) {
    const [message, setMessage] = useState("");
    const [file, setFile] = useState(null);

    const handleSend = async () => {
        if (!message.trim() && !file) return;

        let fileUrl = null;
        if (file) {
            fileUrl = await saveFileToLocal(file);
        }

        const newMessage = {
            id: Date.now(),
            type: file ? getFileType(file.name) : "text",
            message: message ? message : null,
            file_url: fileUrl,
        };

        onSendMessage(newMessage);
        setMessage("");
        setFile(null);
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) setFile(selectedFile);
    };

    const getFileType = (fileName) => {
        const ext = fileName.split(".").pop().toLowerCase();
        if (["jpg", "jpeg", "png", "gif"].includes(ext)) return "image";
        if (["mp4", "avi", "mov"].includes(ext)) return "video";
        if (ext === "pdf") return "document";
        return "unknown";
    };

    const saveFileToLocal = async (file) => {
        const filePath = `/uploads/${Date.now()}_${file.name}`;
        const fileReader = new FileReader();

        return new Promise((resolve) => {
            fileReader.onloadend = () => {
                localStorage.setItem(filePath, fileReader.result);
                resolve(filePath);
            };
            fileReader.readAsDataURL(file);
        });
    };

    return (
        <div className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-md shadow-lg border border-gray-200 rounded-2xl">
            <label className="cursor-pointer text-gray-600 hover:text-gray-900 transition">
                <FontAwesomeIcon icon={faPaperclip} className="text-2xl" />
                <input type="file" className="hidden" onChange={handleFileChange} accept="image/*,video/mp4,application/pdf" />
            </label>

            <div className="relative flex-1">
                <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                    placeholder="Tulis pesan di sini..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />

                {file && (
                    <div className="absolute top-[-50px] left-0 flex items-center bg-blue-100 p-2 rounded-lg shadow-md">
                        <span className="text-sm font-medium truncate max-w-[160px]">{file.name}</span>
                        <FontAwesomeIcon icon={faTimes} className="ml-2 text-red-500 cursor-pointer hover:text-red-700" onClick={() => setFile(null)} />
                    </div>
                )}
            </div>

            <button
                className="cursor-pointer px-5 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-md hover:scale-105 transition-transform duration-200"
                onClick={handleSend}
            >
                <FontAwesomeIcon icon={faPaperPlane} />
            </button>
        </div>
    );
}

export default MessageInput;

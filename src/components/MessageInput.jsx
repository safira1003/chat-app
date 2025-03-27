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
            fileUrl = await saveFileToLocal(file); // Simpan file ke lokal
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
        const filePath = `/uploads/${Date.now()}_${file.name}`; // Simpan di public/uploads/
        const fileReader = new FileReader();

        return new Promise((resolve) => {
            fileReader.onloadend = () => {
                localStorage.setItem(filePath, fileReader.result); // Simpan di localStorage
                resolve(filePath);
            };
            fileReader.readAsDataURL(file); // Convert file ke base64
        });
    };

    return (
        <div className="flex items-center p-4 border-t bg-white">
            <label className="cursor-pointer text-gray-500 mr-3">
                <FontAwesomeIcon icon={faPaperclip} className="text-xl" />
                <input type="file" className="hidden" onChange={handleFileChange} accept="image/*,video/mp4,application/pdf" />
            </label>

            <input
                type="text"
                className="flex-1 p-2 border rounded-lg focus:outline-none"
                placeholder="Ketik pesan..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />

            {file && (
                <div className="flex items-center bg-gray-200 p-2 rounded-md mx-2">
                    <span className="text-sm">{file.name}</span>
                    <FontAwesomeIcon icon={faTimes} className="ml-2 text-red-600 cursor-pointer" onClick={() => setFile(null)} />
                </div>
            )}

            <button
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer"
                onClick={handleSend}
            >
                <FontAwesomeIcon icon={faPaperPlane} />
            </button>
        </div>
    );
}

export default MessageInput;

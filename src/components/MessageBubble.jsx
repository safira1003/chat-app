import { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faDownload } from "@fortawesome/free-solid-svg-icons";

function MessageBubble({ message, userRole }) {
    const isOwnMessage = message.sender === userRole;

    const getBubbleColor = useMemo(() => {
        const hashCode = (str) => {
            let hash = 0;
            for (let i = 0; i < str.length; i++) {
                hash = str.charCodeAt(i) + ((hash << 5) - hash);
            }
            return hash;
        };

        const intToHsl = (hash) => {
            const hue = hash % 360;
            return `hsl(${hue}, 70%, 50%)`;
        };

        return intToHsl(hashCode(message.sender));
    }, [message.sender]);

    const getLocalFile = (filePath) => {
        return localStorage.getItem(filePath) || filePath;
    };

    return (
        <div className={`flex flex-col ${isOwnMessage ? "items-end" : "items-start"} mb-4`}>
            {!isOwnMessage && (
                <p className="text-sm font-semibold text-gray-700 mb-1">{message.sender}</p>
            )}

            <div className={`p-3 rounded-lg text-white max-w-xs`} style={{ backgroundColor: getBubbleColor }}>
                {message.type === "image" && (
                    <div
                        className="cursor-pointer"
                        onClick={() => window.open(getLocalFile(message.file_url), "_blank")}
                    >
                        <img src={getLocalFile(message.file_url)} alt="Image Preview" className="w-64 rounded-md" />
                    </div>
                )}

                {message.type === "document" && message.file_url.endsWith(".pdf") && (
                    <div className="bg-white text-gray-900 p-3 rounded-md flex items-center space-x-3">
                        <FontAwesomeIcon icon={faFilePdf} className="text-red-600 text-2xl" />
                        <div className="flex-1">
                            <p className="text-sm font-semibold">
                                {message.file_url.split("/").pop()} {/* Ambil nama file dari URL */}
                            </p>
                            <a
                                href={getLocalFile(message.file_url)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 text-sm underline"
                            >
                                Lihat Dokumen
                            </a>
                        </div>
                        <a href={getLocalFile(message.file_url)} download className="text-blue-500">
                            <FontAwesomeIcon icon={faDownload} className="text-lg" />
                        </a>
                    </div>
                )}

                {message.type === "video" && (
                    <div>
                        <video controls className="w-80">
                            <source src={getLocalFile(message.file_url)} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                )}

                {message.message && <p className="mb-2">{message.message}</p>}
            </div>
        </div>
    );
}

export default MessageBubble;

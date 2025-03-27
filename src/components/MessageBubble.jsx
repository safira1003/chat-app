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
            <p className="text-sm font-semibold text-gray-700 mb-1">
                {isOwnMessage ? "Anda" : message.sender}
            </p>

            <div
                className="p-3 rounded-lg shadow-md w-auto max-w-[80%] md:max-w-xs text-white transition-all duration-300"
                style={{ backgroundColor: getBubbleColor }}
            >
                {message.type === "image" && (
                    <div
                        className="cursor-pointer rounded-lg overflow-hidden"
                        onClick={() => window.open(getLocalFile(message.file_url), "_blank")}
                    >
                        <img
                            src={getLocalFile(message.file_url)}
                            alt="Image Preview"
                            className="w-full md:w-64 h-auto rounded-lg hover:scale-105 transition-transform duration-200"
                        />
                    </div>
                )}

                {message.type === "document" && message.file_url.endsWith(".pdf") && (
                    <div className="flex items-center space-x-3 bg-white text-gray-900 p-3 rounded-md shadow-md max-w-full md:max-w-[70%]">
                        <FontAwesomeIcon icon={faFilePdf} className="text-red-600 text-2xl" />
                        <div className="flex-1 overflow-hidden">
                            <p className="text-sm font-semibold truncate">
                                {message.file_url.split("/").pop()}
                            </p>
                            <a
                                href={getLocalFile(message.file_url)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden md:inline text-blue-500 text-sm underline hover:text-blue-700"
                            >
                                Lihat Dokumen
                            </a>
                        </div>
                        <a
                            href={getLocalFile(message.file_url)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700"
                        >
                            <FontAwesomeIcon icon={faDownload} className="text-lg" />
                        </a>
                    </div>
                )}

                {message.type === "video" && (
                    <div className="rounded-lg overflow-hidden">
                        <video controls className="w-full md:w-80 rounded-lg shadow-lg">
                            <source src={getLocalFile(message.file_url)} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                )}

                {message.message && <p className="mt-2">{message.message}</p>}
            </div>
        </div>
    );
}

export default MessageBubble;

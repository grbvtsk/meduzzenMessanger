import {useState} from "react";
import {handleSend} from "../../services/message-service.ts";


const MessageBlock = ({recipientUser,loadMessages}) => {

    const [message,setMessage] = useState<String>('')
    const [files, setFiles] = useState([]);
    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    };
    const handleFileRemove = (index) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    return (
        <div className="bg-gray-100 p-3 shadow-md w-full rounded-lg flex flex-col space-y-2">
            {/* Відображення вибраних файлів */}
            {files.length > 0 && (
                <div
                    className="bg-white border border-gray-300 rounded-md shadow-md p-2 max-h-32 w-full overflow-y-auto text-sm">
                    <ul>
                        {files.map((file, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center mb-1 last:mb-0"
                            >
                                <span className="truncate w-3/4">{file.name}</span>
                                <button
                                    type="button"
                                    onClick={() => handleFileRemove(index)}
                                    className=" text-xs"
                                >
                                    ✖
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="flex items-center space-x-2">
                {/* Поле введення повідомлення */}
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                {/* Кнопка вибору файлів */}
                <div className="relative">
                    <label
                        htmlFor="file-upload"
                        className="flex items-center justify-center bg-gray-200 text-gray-700 px-4 py-2 rounded-md border border-gray-300 cursor-pointer hover:bg-gray-300 text-sm transition"
                    >
                        Choose File
                    </label>
                    <input
                        id="file-upload"
                        type="file"
                        multiple
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </div>

                {message &&
                <button
                    type="submit"
                    onClick={(event)=>handleSend(event,message,recipientUser,setMessage,loadMessages,files,setFiles)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 text-sm transition"
                >
                    Send
                </button>
                }
            </div>
        </div>

    );
};

export default MessageBlock;

import { useState } from "react";
import EditInput from "../EditInput";
import SaveCancelButtons from "../SaveCancelButtons";
import {handleDeleteMessage, handleEditMessage} from "../../../services/message-service.ts";

const SendMessageBlock = ({ element,loadMessages }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState<string>(element.content);

    const saveEdit = () => {
        handleEditMessage(element.id, editedContent,loadMessages);
        setIsEditing(false);
    };

    return (
        <div className="flex flex-col items-end group">
            <p className="text-sm font-semibold text-gray-700">You</p>
            <div className="flex items-center bg-green-100 p-3 rounded-md shadow-sm max-w-xs relative mb-1">
                <button
                    onClick={() => handleDeleteMessage(element.id,loadMessages)}
                    className="text-gray-500 text-s px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300
                        transition-all duration-200 ease-in-out opacity-0 group-hover:opacity-100
                        absolute left-[-75px]"
                >
                    Delete
                </button>

                {!isEditing && (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="text-gray-500 text-s px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300
                            transition-all duration-200 ease-in-out opacity-0 group-hover:opacity-100
                            absolute left-[-130px]"
                    >
                        Edit
                    </button>
                )}

                {!isEditing ? (
                    <p className="text-gray-800 break-words">{element.content}</p>
                ) : (
                    <EditInput editedContent={editedContent} setEditedContent={setEditedContent}/>
                )}
                {isEditing && (
                    <SaveCancelButtons saveEdit={saveEdit} setIsEditing={setIsEditing}
                                       setEditedContent={setEditedContent} element={element}/>
                )}
            </div>
            {element.files && element.files.length > 0 && (
                <div className="space-y-4">
                    {element.files.map((file, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-start bg-gray-50 p-3 rounded-lg shadow-md border border-gray-200 w-full"
                        >
                            {file.mimetype.startsWith("image/") ? (
                                <a
                                    href={`http://localhost:5000/uploads/${file.filename}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={`http://localhost:5000/uploads/${file.filename}`}
                                        alt={file.filename}
                                        className="w-40 h-40 object-cover rounded-lg border border-gray-300 shadow-sm"
                                    />
                                </a>
                            ) : (
                                <div className="flex flex-col space-y-1">
                                    <a
                                        href={`http://localhost:5000/uploads/${file.filename}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 underline hover:text-blue-700 font-medium break-all"
                                    >
                                        {file.filename}
                                    </a>
                                    <span className="text-sm text-gray-500">
                            Type: {file.mimetype}
                        </span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
};

export default SendMessageBlock;

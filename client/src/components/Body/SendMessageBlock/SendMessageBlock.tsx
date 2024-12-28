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
            <div className="flex items-center bg-green-100 p-3 rounded-md shadow-sm max-w-xs relative">
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
            </div>

            {isEditing && (
                <SaveCancelButtons saveEdit={saveEdit} setIsEditing={setIsEditing}
                                   setEditedContent={setEditedContent} element={element}/>
            )}
        </div>
    );
};

export default SendMessageBlock;

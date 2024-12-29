import FilesContainer from "../FilesContainer";
import React from "react";
import {ReceiveMessageBlockProps} from "../../../types/BodyComponents/ReceiveMessageBlock.interface.ts";

const ReceiveMessageBlock: React.FC<ReceiveMessageBlockProps> = ({element}) => {

    return (
        <div className="flex flex-col items-start group" key={element.id}>
            <p className="text-sm font-semibold text-gray-700">{element.sender_name}</p>
            <div
                className="flex items-center bg-blue-100 p-3 rounded-md shadow-sm max-w-xs relative mb-1">
                <p className="text-gray-800">{element.content}</p>
            </div>
            <FilesContainer element={element}/>
        </div>
    );
};

export default ReceiveMessageBlock;

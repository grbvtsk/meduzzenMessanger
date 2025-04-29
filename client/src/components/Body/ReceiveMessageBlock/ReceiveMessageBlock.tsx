import FilesContainer from "../FilesContainer";
import React from "react";
import {ReceiveMessageBlockProps} from "../../../types/BodyComponents/ReceiveMessageBlock.interface.ts";
import magicStick from "../../../../public/magic-stick.svg";

const ReceiveMessageBlock: React.FC<ReceiveMessageBlockProps> = ({element}) => {

    return (
        <div className="flex flex-col items-start group" key={element.id}>
            <p className="text-sm font-semibold text-gray-700">{element.sender_name}</p>
            <div
                className="flex items-center bg-blue-100 p-3 rounded-md shadow-sm max-w-xs relative mb-1">
                <button
                    onClick={() => {console.log("hello")}}
                    className="text-white text-s px-3 py-1 rounded-lg bg-purple-600 hover:bg-purple-300
                        transition-all duration-200 ease-in-out opacity-0 group-hover:opacity-100
                        absolute right-[-160px]"
                >
                    Summarize text
                    <img className="w-6 h-6 inline-block" src={magicStick} alt="Logo" />
                </button>
                <p className="text-gray-800">{element.content}</p>
            </div>
            <FilesContainer element={element}/>
        </div>
    );
};

export default ReceiveMessageBlock;

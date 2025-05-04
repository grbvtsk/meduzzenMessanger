import FilesContainer from "../FilesContainer";
import React, { useState, useRef } from "react";
import { ReceiveMessageBlockProps } from "../../../types/BodyComponents/ReceiveMessageBlock.interface.ts";
import magicStick from "../../../../public/magic-stick.svg";
import { summarizeMessage } from "../../../services/message-service.ts";

const ReceiveMessageBlock: React.FC<ReceiveMessageBlockProps> = ({
  element,
}) => {
  const [displayedMessage, setDisplayedMessage] = useState<string>(
    element.content
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const originalMessageRef = useRef<string>(element.content);
  const [isSummarized, setIsSummarized] = useState<boolean>(false);

  const handleSummarize = async () => {
    try {
      setIsLoading(true);
      const result = await summarizeMessage(element.content);
      setDisplayedMessage(result);
      setIsSummarized(true);
      setIsLoading(false);
    } catch (error) {
      console.error("Помилка при підсумовуванні:", error);
      setDisplayedMessage("Не вдалося підсумувати повідомлення.");
      setIsSummarized(true);
      setIsLoading(false);
    }
  };

  const handleBackToOriginal = () => {
    setDisplayedMessage(originalMessageRef.current);
    setIsSummarized(false);
  };

  return (
    <div className="flex flex-col items-start group" key={element.id}>
      <p className="text-sm font-semibold text-gray-700">
        {element.sender_name}
      </p>
      <div className="flex items-center bg-blue-100 p-3 rounded-md shadow-sm max-w-xs relative mb-1">
        {!isSummarized &&
          (isLoading ? (
            <div
              className="text-gray-700 text-s px-3 py-1 rounded-lg bg-purple-200
                  transition-all duration-200 ease-in-out absolute right-[-130px] animate-pulse"
            >
              Loading...
            </div>
          ) : (
            <button
              onClick={handleSummarize}
              className="text-white text-s px-3 py-1 rounded-lg bg-purple-600 hover:bg-purple-300
                            transition-all duration-200 ease-in-out opacity-0 group-hover:opacity-100
                            absolute right-[-180px]"
            >
              Summarize text
              <img
                className="w-6 h-6 inline-block ml-1"
                src={magicStick}
                alt="Logo"
              />
            </button>
          ))}
        {isSummarized && (
          <button
            onClick={handleBackToOriginal}
            className="text-white text-s px-3 py-1 rounded-lg bg-gray-600 hover:bg-gray-400
                            transition-all duration-200 ease-in-out opacity-0 group-hover:opacity-100
                            absolute right-[-180px]"
          >
            Back to original text
          </button>
        )}
        <p className="text-gray-800">{displayedMessage}</p>
      </div>
      <FilesContainer element={element} />
    </div>
  );
};

export default ReceiveMessageBlock;

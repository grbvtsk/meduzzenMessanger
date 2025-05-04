import Sidebar from "../Sidebar";
import Body from "../Body";
import MessageBlock from "../Message-block";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Message } from "../../types/Message.interface.ts";
import HeaderUp from "../Body/HeaderUp";
import { useNavigate } from "react-router-dom";

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [recipientUser, setRecipientUser] = useState<string>("");

  const loadMessages = async (): Promise<void> => {
    const token = localStorage.getItem("token") || "";
    const response = await axios.get<Message[]>(
      "http://localhost:5000/api/messages",
      {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
      }
    );
    setMessages(response.data);
  };

  useEffect(() => {
    loadMessages();
  }, []);

  const navigate = useNavigate();

  const handleLeave = (): void => {
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-gray-100 ">
      <Sidebar setRecipientUser={setRecipientUser} />
      <main className="flex-1 flex flex-col ">
        <HeaderUp handleLeave={handleLeave} />
        {recipientUser ? (
          <>
            <div className="flex-1 overflow-y-auto">
              <Body
                messages={messages}
                recipientUser={recipientUser}
                loadMessages={loadMessages}
              />
            </div>
            <MessageBlock
              recipientUser={recipientUser}
              loadMessages={loadMessages}
            />
          </>
        ) : (
          <div className="flex-1 overflow-y-auto flex items-center justify-center bg-gray-50">
            <div className="text-center px-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Welcome to Messenger
              </h2>
              <p className="text-gray-500">
                This messenger can summarize text. <br /> Select a chat to start
                messaging.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ChatPage;

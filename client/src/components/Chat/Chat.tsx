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
      </main>
    </div>
  );
};

export default ChatPage;

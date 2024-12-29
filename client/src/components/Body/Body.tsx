import {useNavigate} from "react-router-dom";
import SendMessageBlock from "./SendMessageBlock";
import ReceiveMessageBlock from "./ReceiveMessageBlock";
import HeaderUp from "./HeaderUp";
import {BodyProps} from "../../types/BodyComponents/BodyProps.interface.ts";
import React from "react";


const Body: React.FC<BodyProps> = ({messages, recipientUser,loadMessages}) => {

    const navigate = useNavigate()

    const handleLeave = ():void =>{
        navigate('/')
    }

    return (
        <div className="flex flex-col h-screen">
            <HeaderUp handleLeave={handleLeave} />
            <div className="flex-1 p-4 bg-gray-50">
                {recipientUser && (
                    <div className="space-y-4">
                        {messages.map((element) => {
                            if (element.sender_name === localStorage.getItem('user') &&
                                element.recipient_name===recipientUser) {
                                return (
                                    <SendMessageBlock key={element.id} element={element} loadMessages={loadMessages}/>
                                );
                            } else if (element.sender_name === recipientUser &&
                                element.recipient_name === localStorage.getItem('user')) {
                                return (
                                    <ReceiveMessageBlock key={element.id} element={element}/>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Body;

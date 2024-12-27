import {useNavigate} from "react-router-dom";
import axios from "axios";
import SendMessageBlock from "./SendMessageBlock";
import ReceiveMessageBlock from "./ReceiveMessageBlock";
import HeaderUp from "./HeaderUp";


const Body = ({messages, recipientUser,loadMessages}) => {

    const navigate = useNavigate()

    const handleLeave = () =>{
        navigate('/')
    }

    const handleDeleteMessage = async (id)=>{
        const token = localStorage.getItem('token') || '';
        await axios.delete(
            `http://localhost:5000/api/messages/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token,
                },
            }
        );
        loadMessages();
    }
    const handleEditMessage = (id,content)=>{
        const token = localStorage.getItem('token') || '';
        console.log(content)
    }

    return (
        <div className="flex flex-col h-screen">
            <HeaderUp handleLeave={handleLeave} />
            <div className="flex-1 p-4 bg-gray-50 overflow-y-auto">
                {recipientUser && (
                    <div className="space-y-4">
                        {messages.map((element) => {
                            if (element.sender_name === localStorage.getItem('user') &&
                                element.recipient_name===recipientUser) {
                                return (
                                    <SendMessageBlock key={element.id} element={element}
                                                      handleDeleteMessage={handleDeleteMessage}
                                                      handleEditMessage={handleEditMessage} />
                                );
                            } else if (element.sender_name === recipientUser &&
                                element.recipient_name === localStorage.getItem('user')) {
                                return (
                                    <ReceiveMessageBlock key={element.id} element={element}
                                                         handleDeleteMessage={handleDeleteMessage}/>
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

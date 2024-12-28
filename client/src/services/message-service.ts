import axios from "axios";

export const handleSend = async (e,message,recipientUser,setMessage,loadMessages)=>{
    e.preventDefault()
    const token = localStorage.getItem('token') || '';
    if(message.trim() && localStorage.getItem('user')){
        await axios.post(
            'http://localhost:5000/api/messages',
            {
                sender_name: localStorage.getItem('user'),
                content: message,
                recipient_name: recipientUser,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token,
                },
            }
        );
    }
    setMessage('')
    loadMessages();
}


export const handleDeleteMessage = async (id,loadMessages)=>{
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
export const handleEditMessage = async (id,content,loadMessages)=>{
    const token = localStorage.getItem('token') || '';
    await axios.patch(
        `http://localhost:5000/api/messages/${id}`,
        {
            content: content,
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token,
            },
        }
    );
    loadMessages();
}

import axios from "axios";

export const handleSend = async (e,message,recipientUser,setMessage,loadMessages, files,setFiles)=>{
    e.preventDefault()
    const token = localStorage.getItem('token') || '';

    const formData = new FormData();
    formData.append("sender_name",localStorage.getItem('user'))
    formData.append("content", message)
    formData.append("recipient_name", recipientUser)
    files.forEach((file) => {
        formData.append("files", file);
    });

    if(message.trim() && localStorage.getItem('user')){
        await axios.post(
            'http://localhost:5000/api/messages', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'x-access-token': token,
                },
            }
        );
    }
    setMessage('')
    setFiles([])
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

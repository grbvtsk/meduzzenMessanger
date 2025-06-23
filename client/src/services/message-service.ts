import axios from "axios";
import React from "react";

export const handleSend = async (
    e: React.FormEvent,
    message: string,
    recipientUser: string,
    setMessage: (value: string) => void,
    loadMessages: () => void,
    files: File[],
    setFiles: (files: File[]) => void
): Promise<void>=>{
    e.preventDefault()
    const token = localStorage.getItem('token') || '';

    const formData = new FormData();
    const senderName = localStorage.getItem('user') || '';
    formData.append("sender_name",senderName)
    formData.append("content", message)
    formData.append("recipient_name", recipientUser)
    files.forEach((file) => {
        formData.append("files", file);
    });

    if(message.trim() && localStorage.getItem('user')){
        await axios.post(
            'http://localhost:5001/api/messages', formData, {
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


export const handleDeleteMessage = async (
    id: string,
    loadMessages: () => void
): Promise<void> =>{
    const token = localStorage.getItem('token') || '';
    await axios.delete(
        `http://localhost:5001/api/messages/${id}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token,
            },
        }
    );
    loadMessages();
}
export const handleEditMessage = async (
    id: string,
    content: string,
    loadMessages: () => void
): Promise<void>=>{
    const token = localStorage.getItem('token') || '';
    await axios.patch(
        `http://localhost:5001/api/messages/${id}`,
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

export const summarizeMessage = async(content:string):Promise<string>=>{
    const token = localStorage.getItem('token') || '';
    const message = await axios.post(
        `http://localhost:5001/api/summarize`,
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
    return message.data
    
}

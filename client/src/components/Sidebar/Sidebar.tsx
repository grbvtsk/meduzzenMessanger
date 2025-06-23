import React, {useEffect, useState} from "react";
import axios from "axios";
import {SidebarProps} from "../../types/SidebarProps.interface.ts";
import {User} from "../../types/User.interface.ts";


const Sidebar: React.FC<SidebarProps> = ({setRecipientUser}) => {
    const [users,setUsers] = useState<User[]>([])


    useEffect(() => {
        const token = localStorage.getItem('token') || '';
        const user = localStorage.getItem("user")

        axios
            .get<User[]>('http://localhost:5001/api/users', {
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token,
                },
            })
            .then((response) => {
                setUsers(response.data.filter(data=>data.name !== user));
            })
    }, []);

    const handleSetRecipientUser = (user: string): void =>{
        setRecipientUser(user)
    }

    return (
        <div className="w-64 h-screen bg-gray-100 p-4 shadow-md">
            <h4 className="text-xl font-bold mb-4">Users</h4>
            <ul className="space-y-2">
                {users.map(el=>{
                    return <li className="p-2 rounded hover:bg-gray-200 cursor-pointer"
                    key={el.id} onClick={() => handleSetRecipientUser(el.name)}
                    >
                        {el.name}
                    </li>
                })}
            </ul>
        </div>
    );
};


export default Sidebar;

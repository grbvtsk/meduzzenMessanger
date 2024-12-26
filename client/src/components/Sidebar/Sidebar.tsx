

const Sidebar = () => {
    return (
        <div className="w-64 h-screen bg-gray-100 p-4 shadow-md">
            <h4 className="text-xl font-bold mb-4">Users</h4>
            <ul className="space-y-2">
                <li className="p-2 rounded hover:bg-gray-200 cursor-pointer">User 1</li>
                <li className="p-2 rounded hover:bg-gray-200 cursor-pointer">User 2</li>
                <li className="p-2 rounded hover:bg-gray-200 cursor-pointer">User 3</li>
            </ul>
        </div>
    );
};


export default Sidebar;

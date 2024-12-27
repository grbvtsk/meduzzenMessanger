
const HeaderUp = ({handleLeave}) => {
    return (
        <header className="sticky top-0 bg-gray-200 p-4 shadow-md z-10">
            <div className="flex justify-between items-center">
                <div className="flex-1"></div>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                        onClick={handleLeave}>
                    Exit chat
                </button>
            </div>
        </header>
    );
};

export default HeaderUp;

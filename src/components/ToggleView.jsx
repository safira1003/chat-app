
function ToggleView({ userRole, setUserRole }) {
    const userProfiles = {
        admin: "Admin",
        agent: "Agent A",
        customer: "King Customer",
    };

    return (
        <div className="flex flex-col space-y-2 mt-3">
            <h3 className="text-sm font-semibold text-gray-800 text-start">Pilih Role:</h3>
            <div className="flex gap-2">
                {Object.keys(userProfiles).map((role) => (
                    <button
                        key={role}
                        onClick={() => setUserRole(role)}
                        className={`flex-grow cursor-pointer py-1 px-3 rounded-md transition-all duration-300 shadow-sm text-sm font-medium 
               ${userRole === role ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                    >
                        {userProfiles[role]}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ToggleView;

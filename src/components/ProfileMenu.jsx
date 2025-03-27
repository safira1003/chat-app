import ToggleView from "./ToggleView";

const userProfiles = {
    admin: { id: "admin@mail.com", name: "Admin" },
    agent: { id: "agent@mail.com", name: "Agent A" },
    customer: { id: "customer@mail.com", name: "King Customer" },
};

function ProfileMenu({ userRole, setUserRole }) {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full p-4">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md border border-gray-300">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">Profile</h2>

                <div className="mb-3 sm:mb-4 p-3 sm:p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md text-center sm:text-left">
                    <p className="text-xs sm:text-sm opacity-80">Nama:</p>
                    <p className="text-base sm:text-lg font-semibold">{userProfiles[userRole].name}</p>
                </div>

                <div className="mb-3 sm:mb-4 p-3 sm:p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md text-center sm:text-left">
                    <p className="text-xs sm:text-sm opacity-80">ID:</p>
                    <p className="text-base sm:text-lg font-semibold">{userProfiles[userRole].id}</p>
                </div>

                <hr className="my-2 sm:my-4" />

                <ToggleView userRole={userRole} setUserRole={setUserRole} />
            </div>
        </div>
    );
}

export default ProfileMenu;

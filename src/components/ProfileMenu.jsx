// ProfileMenu.js
import ToggleView from "./ToggleView";

const userProfiles = {
    admin: { id: "admin@mail.com", name: "Admin" },
    agent: { id: "agent@mail.com", name: "Agent A" },
    customer: { id: "customer@mail.com", name: "King Customer" },
};

function ProfileMenu({ userRole, setUserRole }) {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full p-4">
            <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md border border-gray-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Profile</h2>

                <div className="mb-4 p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md">
                    <p className="text-sm opacity-80">Nama:</p>
                    <p className="text-lg font-semibold">{userProfiles[userRole].name}</p>
                </div>

                <div className="mb-4 p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md">
                    <p className="text-sm opacity-80">ID:</p>
                    <p className="text-lg font-semibold">{userProfiles[userRole].id}</p>
                </div>
                <hr />
                
                <ToggleView userRole={userRole} setUserRole={setUserRole} />
            </div>
        </div>
    );
}

export default ProfileMenu;

import ToggleView from "./ToggleView";

const userProfiles = {
    admin: { id: "admin@mail.com", name: "Admin" },
    agent: { id: "agent@mail.com", name: "Agent A" },
    customer: { id: "customer@mail.com", name: "King Customer" },
};

function ProfileMenu({ userRole, setUserRole }) {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile</h2>

                {/* Nama & ID */}
                <div className="mb-4">
                    <p className="text-gray-600">Nama:</p>
                    <p className="text-lg font-medium">{userProfiles[userRole].name}</p>
                </div>
                <div className="mb-4">
                    <p className="text-gray-600">ID:</p>
                    <p className="text-lg font-medium">{userProfiles[userRole].id}</p>
                </div>

                {/* Toggle Sudut Pandang */}
                <ToggleView userRole={userRole} setUserRole={setUserRole} />
            </div>
        </div>
    );
}

export default ProfileMenu;

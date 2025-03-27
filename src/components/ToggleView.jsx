function ToggleView({ userRole, setUserRole }) {
    return (
        <div className="flex flex-col space-y-2">
            <label className="flex items-center">
                <input
                    type="radio"
                    name="role"
                    value="admin"
                    checked={userRole === "admin"}
                    onChange={() => setUserRole("admin")}
                    className="mr-2"
                />
                Admin
            </label>

            <label className="flex items-center">
                <input
                    type="radio"
                    name="role"
                    value="agent"
                    checked={userRole === "agent"}
                    onChange={() => setUserRole("agent")}
                    className="mr-2"
                />
                Agent
            </label>

            <label className="flex items-center">
                <input
                    type="radio"
                    name="role"
                    value="customer"
                    checked={userRole === "customer"}
                    onChange={() => setUserRole("customer")}
                    className="mr-2"
                />
                Customer
            </label>
        </div>
    );
}

export default ToggleView;

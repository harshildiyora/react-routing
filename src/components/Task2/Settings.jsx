import { Outlet } from "react-router-dom"

function Settings() {
    return (
        <div>
            <h1>User Settings Page</h1>
            <Outlet />

        </div>
    )
}

export default Settings

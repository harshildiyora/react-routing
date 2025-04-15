import { Outlet } from "react-router-dom"

function Profile() {
    return (
        <>
        <h1> User Profile Page </h1>
        <Outlet/>
        </>
    )
}

export default Profile

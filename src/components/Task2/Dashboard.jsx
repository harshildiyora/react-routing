import { Link, Outlet } from "react-router-dom"

function Task2() {
  return (
    <div>
    <div className="flex flex-col gap-4 items-center w-full">
            <ul className="flex justify-evenly w-[60%] gap-5 border-2 rounded-xl px-4 py-2 *:text-blue-500">
                <li><Link to="/"> Home</Link></li>
                <li><Link to="/dashboard">Task2 Home</Link></li>
                <li><Link to="/dashboard/profile">Profile</Link></li>
                <li><Link to="/dashboard/settings">Settings</Link></li>
            </ul>

            <h1>Task 2 Page</h1>

            <Outlet />
        </div>

    </div>
  )
}

export default Task2

import { Link, Outlet } from "react-router-dom"

function Task1() {
    return (
        <div className="flex flex-col gap-4 items-center w-full">
            <ul className="flex justify-evenly w-[60%] gap-5 border-2 rounded-xl px-4 py-2 *:text-blue-500">
                <li><Link to="/"> Home</Link></li>
                <li><Link to="/task1">Task1 Home</Link></li>
                <li><Link to="/task1/about">About</Link></li>
                <li><Link to="/task1/contact">Contact</Link></li>
                <li><Link to="/task1/form">Form</Link></li>
            </ul>

            <h1>Task 1 Page</h1>

            {/* <div>
                <h1>Task 1 : Simple Routing</h1>
                <p>Create a basic React application with the following routes:</p>
                <ul>
                    <li>/ - Displays a “Home Page” component.</li>
                    <li>/about - Displays an “About Page” component.</li>
                    <li>/contact - Displays a “Contact Page” component.</li>
                </ul>
                <p>Task:</p>
                <ul>
                    <li>Use react-router-dom to implement routing.</li>
                    <li>Add navigation links to switch between pages.</li>
                </ul> 
            </div> */}
            <Outlet />
        </div>
    )
}

export default Task1

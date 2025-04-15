import { Link } from "react-router-dom"
import { useEffect, useState } from "react";

function Home() {
    const [HomeData, setHomeData] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}/api/home.json`)
            .then(response => response.json())
            .then(data => setHomeData(data))
            .catch(error => console.error("Error fetching home data:", error));
    }, []);
// import "./Home.css"

return (
    <div className="task-container flex flex-col gap-3 p-3">
            <nav>
                <ul className='flex justify-center w-full'>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>

            {/* <div className="tasks w-full flex flex-wrap gap-3 *:h-[300px]"> */}
            <div className="tasks w-full grid grid-cols-3 flex-wrap gap-3 *:h-[300px]">
                {
                    HomeData.map((data) => {
                        return <Link key={data.id} to={data.link} className="border-2 rounded-lg">
                            <div className="task task1 tasks-style">
                                <div className="task-title font-bold">
                                    <p> {data.title} </p>
                                </div>

                                <div className="task-about flex flex-col gap-4 ">
                                    <div>
                                        <p className="font-bold"> {data.steps.heading} </p>
                                        <ul>
                                            {
                                                data.steps.steps.map((step) => {
                                                    return <li key={step}> {step} </li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div>
                                        <p>Task:</p>
                                        <ul>
                                            {
                                                data.hints.map((hint) => {
                                                    return <li key={hint}> {hint} </li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    })
                }

                {/* <Link to="/task1" className="border-2 rounded-lg">
                    <div className="task task1 tasks-style">
                        <div className="task-title font-bold">
                            <p> Task 1 : Simple Routing </p>
                        </div>

                        <div className="task-about flex flex-col gap-4 ">
                            <div>
                                <p className="font-bold">Create a basic React application with the following routes:</p>
                                <ul>
                                    <li>/ - Displa  ys a “Home Page” component.</li>
                                    <li>/about - Displays an “About Page” component.</li>
                                    <li>/contact - Displays a “Contact Page” component.</li>
                                </ul>
                            </div>
                            <div>
                                <p>Task:</p>
                                <ul>
                                    <li>
                                        Use react-router-dom to implement routing.
                                    </li>
                                    <li>
                                        Add navigation links to switch between pages.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/dashboard" className="border-2 rounded-lg">
                    <div className="task task1 tasks-style">
                        <div className="task-title font-bold">
                            <p> 2. Nested Routing</p>
                        </div>

                        <div className="task-about flex flex-col gap-4 ">
                            <div>
                                <p className="font-bold">Create a React application with nested routes:</p>
                                <ul>
                                    <li>/dashboard - Displays a “Dashboard” component..</li>
                                    <li>/dashboard/profile - Displays a “Profile” component inside the Dashboard..</li>
                                    <li>/dashboard/settings - Displays a “Settings” component inside the Dashboard..</li>
                                </ul>
                            </div>
                            <div>
                                <p>Task:</p>
                                <ul>
                                    <li>
                                        Implement nested routing using Outlet from react-router-dom.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/dynamic-route" className="border-2 rounded-lg">
                    <div className="task task1 tasks-style">
                        <div className="task-title font-bold">
                            <p> 3. Dynamic Routing</p>
                        </div>

                        <div className="task-about flex flex-col gap-4 ">
                            <div>
                                <ul>
                                    <li className="font-bold">Create a route /user/:id that displays a “User Profile” component. The id parameter should dynamically fetch and display the user&apos;s details (mock data).</li>
                                </ul>
                            </div>
                            <div>
                                <p>Task:</p>
                                <ul>
                                    <li>Use useParams from react-router-dom to access the id.</li>
                                    <li>
                                        Display a user&apos;s details dynamically based on the URL.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Link> */}
            </div>
        </div>

    )
}

export default Home;

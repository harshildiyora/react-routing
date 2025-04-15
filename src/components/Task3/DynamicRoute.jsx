import { Link, Outlet, useLocation, useParams } from "react-router-dom"
import { useEffect, useState } from "react";

function DynamicRoute() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}/api/data.json`)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    let location = useLocation();
    let params = useParams();
    // console.log(params);

    // let min = 101;
    // let max = 100000;
    console.log(location);
    console.log(params);
    

    // const randomID = () => {
    //     return Math.floor(Math.random() * (max - min) + min);
    // }

    // const users = [randomID(), randomID(), randomID()]

    return (
        <div className="px-5">
            <div className="flex flex-col gap-4 items-center w-full">
                <ul className="flex justify-evenly w-[60%] gap-5 border-2 rounded-xl px-4 py-2 *:text-blue-500">
                    <li><Link to="/"> Home</Link></li>
                    <li><Link to="/dynamic-route"> Task 3 Home</Link></li>
                    {location.pathname == `/dynamic-route/user/${params.id}`  && 
                        <li><Link to={`/dynamic-route/user/${params.id}/profile`}> Profile</Link></li>
                    }

                     {
                        location.pathname == `/dynamic-route/user/${params.id}/profile` && 
                        <li><Link to={`/dynamic-route/user/${params.id}`}> Dashboard</Link></li>

                     }
                </ul>
                <Outlet />

                {
                    location.pathname== "/dynamic-route" &&
                    <h1>Task 3 Page</h1>
                }

            </div>

            <div>
                {/* Show this content only if NOT in a user profile */}
                {location.pathname === "/dynamic-route" && (
                    <>
                        {/* <h3>Users:</h3> */}
                        <ul>
                            {data.map((user) => (
                                <li key={user.id}><Link to={`/dynamic-route/user/${user.id}`}> {`User id ${user.id}`} </Link></li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    )
}

export default DynamicRoute

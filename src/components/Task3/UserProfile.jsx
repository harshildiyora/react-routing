import { useEffect, useState } from "react"
import { Outlet, useParams } from "react-router-dom"
// import data from '/api/data.json'

function UserProfile() {

    const [user, setUser] = useState({})

    const [data, setData] = useState([]);

    let { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(`/api/data.json`);
                
                const response = await fetch(`${import.meta.env.BASE_URL}api/data.json`); // Fetch from `public` folder
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const jsonData = await response.json(); // Convert response to JSON
                setData(jsonData); // Update state
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        
        fetchData();
    }, []);
    
    useEffect(() => {
        const foundUser = data.find((user) => Number(id) === user.id);

        if (foundUser) {
            setUser({
                id: foundUser.id,
                username: foundUser.username,
                email: foundUser.email
            })
        }
    }, [id, data])

    // console.log("fetched : ", user);


    return (
        <div className="">
            <div className="flex justify-center">
                <h1>User Profile Page</h1>
                <Outlet />
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-xl">User Data : </h1>

                <div className="data">
                    <p>Username : {user.username}</p>
                    <p>Email : {user.email}</p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile

import { Outlet, useLocation, useParams } from "react-router-dom"

function User() {
    let location = useLocation();
    let params = useParams();
    // console.log(params);

    return (
        <div className="w-full">
                <Outlet />
            <div className="flex justify-center">
                {
                    location.pathname == `/dynamic-route/user/${params.id}` &&
                    <h1>User Dashboard Page </h1>
                }
            </div>
            <div className="w-full">
               {
                location.pathname == `/dynamic-route/user/${params.id}` && 

                <h1>User ID : {params.id} </h1>
               }
            </div>

        </div>
    )
}

export default User

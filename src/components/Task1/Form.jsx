import { Outlet } from "react-router-dom"

function Form() {
    // let password = "";

    // function handleNameChange(e) {
    //     name = e.target.value;
    //     document.querySelector(".username").innerHTML = name;
    // }
    // function handleEMailChange(e) {
    //     email = e.target.value;
    //     document.querySelector(".email").innerHTML = email;
    // }
    // function handlePassChange(e) {
    //     password = e.target.value;
    //     document.querySelector(".password").innerHTML = password;
    // }

    function handleChange(e, label) {
        let text = e.target.value;

        if (label === "name") {
            // name = text;
            document.querySelector(".username").innerHTML = text;
        }
        else if (label === "email") {
            // email = text;
            document.querySelector(".email").innerHTML = text;
        }
        // else if (label === "password") {
        //     if (e.key == "Backspace" || e.key == "Enter") {
        //         password = password.substring(0, password.length - 1)
        //     }
        //     else {
        //         password += "*";
        //     }

        //     document.querySelector(".password").innerHTML = password;
        // }
    }

    return (
        <div className="flex flex-col gap-10 justify-center items-center">
            <div className="heading">
                <h1>Registration Form</h1>
            </div>

            <form action="" className="p-4 flex flex-col gap-5 *:flex *:gap-2 *:justify-between border-2 rounded-lg">
                <div className="form-part">
                    <label htmlFor="fname">Full Name : </label>
                    <input type="text" name="fname" id="fname" className="px-2 py-1 border-2 rounded-md" onChange={(e) => handleChange(e, "name")} />
                </div>

                <div className="form-part">
                    <label htmlFor="email">Email : </label>
                    <input type="email" name="email" id="email" className="px-2 py-1 border-2 rounded-md" onChange={(e) => handleChange(e, "email")} />
                </div>

                {/* <div className="form-part">
                    <label htmlFor="password">Password : </label>
                    <input type="password" name="password" id="password" className="px-2 py-1 border-2 rounded-md" onKeyDown={(e) => handleChange(e, "password")} />
                </div> */}
            </form>

            <div className="info flex flex-col gap-3">
                <p> Your name : <span className="username"></span> </p>
                <p> Your password : <span className="email"></span> </p>
                {/* <p> Your password : <span className="password"></span> </p> */}
            </div>
            <Outlet />
        </div>
    )
}

export default Form

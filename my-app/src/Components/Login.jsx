import { useState } from "react";

function Login() {

    let intialState = {
        useName: "",
        email: "",
        City: "",
        state: "",
        Password: ""


    }

    let [value, setvalue] = useState(intialState);

    let [user, setUser] = useState(true)

    let changehandle = (e) => {
        let target = e.target;
        setvalue((prev) => ({ ...prev, [target.name]: target.value }))
        console.log(value);
    }

    return (
        <>

            <div className="w-1/5 mx-auto" >
                <form action="" className="p-8 rounded-sm shadow-md items-center mt-40  gap-4 flex flex-col justify-center bg-[#f0f0f0] ">


                    {
                        user ? <label htmlFor="" className="font-medium">Full Name
                            <br />
                            <input className="border border-black rounded-sm  p-1" type="text" placeholder="Enter Full Name" value={value.useName}
                                onChange={changehandle} name="useName" />
                        </label> : null
                    }

                    <label htmlFor="" className="font-medium">Email
                        <br />
                        <input className="border border-black rounded-sm  p-1" type="text" placeholder="Enter Email" value={value.email} onChange={changehandle} name="email" />

                    </label>

                    {
                        user ? <label className="font-medium" htmlFor="">City
                            <br />
                            <input className="border border-black rounded-sm  p-1" type="text" placeholder="Enter City" value={value.City} onChange={changehandle} name="City" />
                        </label> : null
                    }

                    {
                        user ? <label className="font-medium" htmlFor="">State
                            <br />
                            <input className="border border-black rounded-sm  p-1" type="text" placeholder="Enter City" value={value.state}
                                onChange={changehandle} name="state" />
                        </label> : null
                    }


                    <label className="font-medium" htmlFor="">Password
                        <br />
                        <input className="border border-black rounded-sm  p-1" type="text" placeholder="Enter Password" value={value.Password}
                            onChange={changehandle} name="Password" />
                    </label>


                    <p className="text-green-900 cursor-pointer capitalize" onClick={() => setUser(!user)}>{user ? "If user / Log In Now" : "if not user /register now"}</p>

                    <button className="bg-green-600 px-3 py-2 rounded-sm text-white">Sign Up</button>



                </form>
            </div>
        </>
    )
}

export default Login;
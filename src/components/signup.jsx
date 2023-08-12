import React, { useState } from 'react';

const Body = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [Password, setPassword] = useState("");

    function enterFirstname(e) {
        setFirstname(e?.target?.value);
    }

    function enterLastname(e) {
        setLastname(e?.target?.value);
    }

    function enterEmail(e) {
        setEmail(e?.target?.value);
    }

    function enterPhone(e) {
        setPhone(e?.target?.value);
    }

    function enterPassword(e) {
        setPassword(e?.target?.value);
    }
    return (
        <>
            <div class="main" style={{ alignItems:"center", justifyContent: "right", display: "block",fontFamily:"sans-serif",backgroundColor:"azure"}} >
                <div className="head text-center">
                <h1  style={{ color: "blue", fontSize: "60px" }}>facebook</h1>
                <h3 > Create a new Account</h3>
                <p>its quick and easy</p>
                </div>
                <div  className="row g-3 text-center">
                    {/* firstname */}
                    <div  className="col-sm">
                        <input type="text"  className="form-control w-50" style={{ marginLeft: "50%"}} placeholder="First name" aria-label="State" onChange={(e) => enterFirstname(e)} />
                    </div>

                    {/* lastname */}
                    <div class="col-sm">
                        <input type="text"  className="form-control w-50" placeholder="Last name" aria-label="Zip" onChange={(e) => enterLastname(e)} />
                    </div>
                </div>
                {/* email adress */}
                <div className="col-sm">
                    <input type="text" className="form-control w-50 mt-2" style={{ marginLeft: "25%" }} placeholder="Email Adress" aria-label="State" onChange={(e) => enterEmail(e)} />
                </div>
                {/* phone number */}
                <div className="col-sm">
                    <input type="number"  className="form-control w-50 mt-2" style={{ marginLeft: "25%" }} placeholder="Mobile number" aria-label="State" onChange={(e) => enterPhone(e)} />
                </div>
                {/* password */}
                <div className="col-sm">
                    <input type="password" className="form-control w-50 mt-2" style={{ marginLeft: "25%" }} placeholder="Enter Password" aria-label="State" onChange={(e) => enterPassword(e)} />
                </div>
                <button type="submit"  className="btn btn-success w-50 mt-2" style={{ width: "100%", marginLeft: "25%" }}>Sign Up</button>

                <p className="w-50 mt-2 text-center" style={{ color: "blue", paddingLeft: "20%", marginLeft: "15%" }}>Already have an account?</p><hr></hr>
            </div>

            <div className="container-lg ms-5">
                <div className="showdata">
                    <ul>
                        <li>Full Name:{firstname} {lastname} </li>
                        <li>Email:{email}</li>
                        <li>Phone Num:{phone}</li>
                        <li>Password:{Password}</li>
                    </ul>
                </div>
            </div>
        </>
    );
};
export default Body;
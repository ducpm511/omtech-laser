import React, { useState } from "react";

const HeaderTop = () =>{
    const [isActiveF, setActiveF] = useState("false");
    const [signupOpen, setSignUpOpen] = useState(false)

   
    return (
        <div className={`headerTop`}>
            <div className="headerTopItem">
                <a href="#">Sign up</a> and Get FREE Laser Cut File
            </div>
            <div className="headerTopItem">
                United States [English/USD]
            </div>
        </div>
    );
}

export default HeaderTop;
import React, { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage() {
    const [isLogin , setIsLogin] = useState(true);
    const loginHandler = () => {
        setIsLogin(!isLogin);
        console.log("debug >>> login btn click");
    }
    const logoutHandler = () => {
        setIsLogin(!isLogin);
        console.log("debug >>> logout btn click");
    }
    return (
        <div class='container'>
            <Toolbar 
                isLogin={isLogin}
                onClickLogin={loginHandler}
                onClickLogout={logoutHandler}/>
            <div style={{ padding : 16 }}>조건부 렌더링을 이용한 페이지 구성</div>
        </div>
    )
}

export default LandingPage;
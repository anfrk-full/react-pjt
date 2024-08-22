import React, {useState} from 'react';
import Greeting from './Greeting';
import LogoutBtn from './LogoutBtn';
import LoginBtn from './LoginBtn';

function UserHome() {
    const [flag, setFlag] = useState(true);
    const loginHandler = () => {
        setFlag(false);
        console.log("debug >>> login Handler Click!");
    }
    const logoutHandler = () => {
        setFlag(true);
        console.log("debug >>> logout Handler Click!");
    }
    let btn;
    if(flag) {
        btn = <LoginBtn onClick={loginHandler}/>;
    } else {
        btn = <LogoutBtn onClick={logoutHandler}/>;
    }
    return (
        <div class='container'>
            <Greeting isLogin={flag}/>
            {btn}
        </div>
        
    )
}

export default UserHome;
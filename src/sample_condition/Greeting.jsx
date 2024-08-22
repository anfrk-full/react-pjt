import React from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

function Greeting (props) {
    const isLogin = props.isLogin;
    if(isLogin) {
        return <UserGreeting/>
    } else {
        return <GuestGreeting/>
    }
}

export default Greeting;
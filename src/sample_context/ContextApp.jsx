/*
function ContextApp() {
    return (
        <GrandParent msg='props를 이용한 단계별 메시지 전달방식' />
    );
}

function GrandParent(props) {
    return (
        <Parent msg={props.msg} />
    );
}

function Parent(props) {
    return (
        <Child msg={props.msg} />
    );
}

function Child(props) {
    return (
        <GrandChild msg={props.msg} />
    );
}

function GrandChild(props) {
    return (
        <Message msg={props.msg} />
    );
}

function Message(props) {
    return (
        <div className='container'>
            Recieved : {props.msg}
        </div>
    );
}
*/
import React, { createContext, useContext } from "react";

const msg = {
    id: "jslim",
    password: "jslim",
    nickName: "섭섭해"
};

const UserContext = createContext(msg);
UserContext.displayName = '상태공유 컨텍스트 트리';

function ContextApp() {
    
    return (
        <UserContext.Provider value={msg}>
            <GrandParent />
        </UserContext.Provider>
        
    );
}

function GrandParent(props) {
    return (
        <Parent />
    );
}

function Parent(props) {
    return (
        <Child />
    );
}

function Child(props) {
    return (
        <GrandChild />
    );
}

function GrandChild(props) {
    return (
        <Message />
    );
}

function Message(props) {
    const shareDate = useContext(UserContext);
    console.log("debug >>> " , shareDate)
    return (
        <div className='container'>
            Recieved : {shareDate.id}-{shareDate.password}-{shareDate.nickName}
        </div>
    );
}

export default ContextApp;
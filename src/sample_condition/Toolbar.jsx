import React from "react";
import LogoutBtn from "./LogoutBtn";
import LoginBtn from "./LoginBtn";

const styles = {
    wrapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid grey",
    },
    greeting: {
        marginRight: 8,
    },
};

// isLogin 값을 판단하여 false 이면 로그인버튼이 보여지고
// true이면 'xxxx님 환영합니다' 라는 메시지와 로그아웃버튼이 보여진다.
function Toolbar(props) {
    const {isLogin, onClickLogin, onClickLogout} = props;
    return (
        <div class='container'>
            {
                isLogin ? (
                    <div style={styles.wrapper}>
                        <p style={styles.greeting}>xxx님 환영합니다.</p>
                        <LogoutBtn onClick={onClickLogout}/>
                    </div>
                    ) : (
                    <div style={styles.wrapper}>
                        <LoginBtn onClick={onClickLogin}/>
                    </div>
                    )
            }    
        </div>
    );
}

export default Toolbar;
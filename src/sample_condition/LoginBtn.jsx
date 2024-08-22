import React from 'react';

function LoginBtn (props) {
    return (
        <button onClick={props.onClick} className='btn btn-primary'>
            Login
        </button>
    )
}

export default LoginBtn;
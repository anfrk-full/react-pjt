import React from 'react';

function LogoutBtn (props) {
    return (
        <button onClick={props.onClick} className='btn btn-primary'>
            Logout
        </button>
    )
}

export default LogoutBtn;
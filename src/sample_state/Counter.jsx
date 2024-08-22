import { useState, useEffect } from 'react';

function Counter (props) {
    const [count, setCount] = useState(0);

    useEffect( () => {
        document.title = `총 ${count}번 클릭하셨습니다.`
    });

    const increaseCnt = () => {
        console.log("debug >>> button clicked!!");
        setCount(count+1);
    }

    return (
        <div>
            <p>총 {count}번 클릭하셨습니다.</p>
            <button onClick={ increaseCnt } className='btn btn-primary'>
                Click
            </button>
        </div>
    );
}

export default Counter;
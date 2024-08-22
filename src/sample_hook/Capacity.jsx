import useCounter from './useCounter';
import { useState, useEffect } from 'react';

const MAX_CAPACITY = 10;

function Capacity(props) {

    const [count, increaseCnt, decreaseCnt] = useCounter();
    const [isFull, setIsFull] = useState(false);

    useEffect( () => {
        setIsFull(count >=MAX_CAPACITY);
    }, [ count ]);

    return (
        <div className="container">

            <p>{`총 ${count}명 수용했습니다.`}</p>
            <button onClick={ increaseCnt }
                    disabled={count === MAX_CAPACITY} 
                    className="btn btn-primary">입장
            </button>

            &nbsp;&nbsp;&nbsp;&nbsp;

            <button onClick={ decreaseCnt } 
                    disabled={count === 0} 
                    className="btn btn-danger">퇴장
            </button>

            {isFull && <p style={{color : 'red'}}> 정원이 가득 찼습니다.</p> }
        </div>
    );
}

export default Capacity;
// useXXXX 커스텀 훅
import { useState } from 'react';

function useCounter() {
    const [count, setCount] = useState(0);

    const increaseCnt = () => {
        setCount( (count) => count+1 );
    }
    
    const decreaseCnt = () => {
        setCount( (count) => Math.max(count-1, 0) );
    }

    return [ count, increaseCnt, decreaseCnt ];
}

export default useCounter;

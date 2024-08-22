import {useState} from 'react';

function ButtonEvent() {
    const [isFlag, setIsFlag] = useState(true);

    const btnHandler = (name) => {
        setIsFlag((isFlag) => !isFlag);
        console.log(`debug >>>> btn click ${name}!! ` );
    }

    return (
        <div className="container">
            <button onClick={ () => btnHandler('jslim')}
                    className={isFlag ? "btn btn-primary" : "btn btn-danger"}>
                {isFlag ? '켜짐' : '꺼짐'}
            </button>
        </div>
    )
}

export default ButtonEvent;
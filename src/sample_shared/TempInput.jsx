import React from "react";

const scaleNames = {
    c : '섭씨',
    f : '화씨'
};

function TempInput(props) {

    const tempHandler = (event) => {
        props.onTempChange(event.target.value);
    }
    return (
        <fieldset>
            <legend>온도를 입력하세요(단위 : {scaleNames[props.scale]}).</legend>
            <input type='text' value={props.temp} onChange={tempHandler} />
            
        </fieldset>
    );
}

export default TempInput;
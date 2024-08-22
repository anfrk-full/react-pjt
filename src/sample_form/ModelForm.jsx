import React, { useEffect, useState } from "react";

function ModelForm() {
    const [keyin, setKeyin] = useState('');
    const [fruit, setFruit] = useState('');

    const txtHandler = (event) => {
        setKeyin(event.target.value);
    }
    const selecHandler = (event) => {
        setFruit(event.target.value);
    }
    useEffect(() => {
        console.log("debug >>>> data , " , keyin)
        console.log("debug >>>> data , " , fruit)
    });

    return (
        <div class='form-control'>
            <form>
                <label>
                    이름 :&nbsp;&nbsp;
                    <input type='text' value={keyin} onChange={txtHandler}/>
                </label>
                <br/>
                <label>
                    과일을 선택해 주세요 :
                </label>
                <select value={fruit} onChange={selecHandler}>
                    <option value='apple'>사과</option>
                    <option value='banana'>바나나</option>
                    <option value='watermelon'>수박</option>
                </select>
                <button class='btn btn-primary'>Submit</button>
            </form>
        </div>
    );
}

export default ModelForm;
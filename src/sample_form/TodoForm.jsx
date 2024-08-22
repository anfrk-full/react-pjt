import axios from "axios";
import React, { useEffect, useState } from "react";

function TodoForm() {
    const [subject, setSubject] = useState('');

    const subjectHandler = (event) => {
        setSubject(event.target.value);
    }

    const [completed, setCompleted] = useState(false);

    const completedHandler = () => {
        setCompleted(!completed);
    }

    const [content, setContent] = useState('');

    const contentHandler = (event) => {
        setContent(event.target.value);
    }

    useEffect(() => {
        console.log("debug >>> data , " , subject);
        console.log("debug >>> data , " , completed);
        console.log("debug >>> data , " , content);
    })

    const createTodo = async() => {
        const data = {
            id : Date.now(),
            subject : subject,
            completed : completed ,
            body : content
        };

        try{
            const response = await axios.post(`http://localhost:8000/todos`, data);
            setSubject('');
            setCompleted(false);
            setContent('');
            console.log("debug >>> post result , " ,  response.data ); 
            window.alert("정상처리 되었습니다. ^.^");
        } catch (err) {
            console.log("debug >>> axious post err , " , err);
        }
    }

    return (
        <div className="container">
            <h2> Todo-Create </h2>
            <form>
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <label>Subject</label>
                            <input  type="text" 
                                    className="form-control" 
                                    value={subject} onChange={subjectHandler}/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label>State</label>
                            <div>
                                <button className="btn btn-primary" type="button" value={completed} onClick={completedHandler}> 
                                    {completed ? 'InComplete' : 'Complete' }
                                </button>
                            </div>
                        </div>
                    </div>    
                </div>    

                <div className="col-12">
                    <div className="form-group">
                        <label>Body</label>
                        <textarea className="form-control" cols="30" rows="10" value={content} onChange={contentHandler}></textarea>
                    </div> 
                </div>

                <button className="btn btn-outline-dark" 
                        type="button" onClick={createTodo}>
                            CREATE
                </button>

                <button className="btn btn-outline-danger ml-2">
                    Cancel
                </button>   

        </form>
        </div>
    );
}

export default TodoForm ; 
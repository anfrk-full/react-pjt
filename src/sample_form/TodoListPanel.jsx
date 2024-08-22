import React, { useEffect, useState } from "react";
import TodoList from './TodoList';
import axios from "axios";

/*
    mount, update 발생이 되면
    axios 통신을 통해서 모든 데이터를 json 형식으로 내려 받고
    해당 데이터를 TodoList props 전달하여 화면에 데이터를 출력(map key=id)
    useEffect() 사용 권고 - axios 
*/

function TodoListPanel() {

    const [todos, setTodos] = useState([]);

    useEffect( () => {
        const getTodos = async() => {
            try {
                const response = await axios.get(`http://localhost:8000/todos`);
                console.log("response data , " , response.data);
                setTodos(response.data);
            } catch (err) {
                console.log("get err , " , err);
            }
        };
        getTodos();
    }, []);

    return (
        <TodoList todos={todos}/>
    );
}

export default TodoListPanel;
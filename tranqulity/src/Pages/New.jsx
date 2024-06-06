import { useState } from "react";
import ListItem from "../Components/ListItem"

const New = () => {
    
    const [todos, setTodos] = useState([
        "Zrobić pranie",
        "Zrobić pizzę",
        "Napisać inżynierkę"
    ]);

    const [newTodo, setNewTodo] = useState([
    ])

    const handleNewTodo = (e) => {
        setTodos(todos.concat([newTodo]));
    }

    const todosHTML = todos
    .map(it => <ListItem key={it} text={it}></ListItem>);

    return (        
        <main>
            <input 
                value={newTodo} 
                onChange={e=>setNewTodo(e.target.value)} 
                className="App-input">

            </input>

            <button onClick={handleNewTodo} className="App-button">Add</button>


            {todosHTML}
        </main>


    );

}

export default New;
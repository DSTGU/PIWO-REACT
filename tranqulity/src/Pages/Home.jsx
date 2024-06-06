import { useState } from "react";
import ListItem from "../Components/ListItem"

const Home = () => {
    
    const [todos, setTodos] = useState([
        "Zrobić pranie",
        "Zrobić pizzę",
        "Napisać inżynierkę"
    ]);

    const [query, setQuery] = useState([
    ])

    const todosHTML = todos
    .filter(it => it.includes(query))
    .map(it => <ListItem key={it} text={it}></ListItem>);

    const handleQueryChange = (e) => {
        setQuery(e.target.value)
    }

    return (        
    <main>
        <input value={query} onChange={handleQueryChange} className="App-input"></input>
        {todosHTML}
    </main>
    );

}

export default Home;
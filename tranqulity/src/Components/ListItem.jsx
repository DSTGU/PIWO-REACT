import { useState } from "react";

const ListItem = ({text}) => {

    const [isDone, setisDone] = useState(false);

    const handleDone = (e) => {
        setisDone(!isDone);
    }

    return (
        <p onClick={handleDone} className={isDone ? "striked" : ""}>{text}</p>
    )
}

export default ListItem;
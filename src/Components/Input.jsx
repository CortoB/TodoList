import { useState } from "react"
import Button from "./Button"
import "../style.scss"

const Input = (props) => {

    const [inputValue, setInputValue] = useState("")
    const [list, setList] = useState([])

    const handleOnChange = (event) => {
        setInputValue(event.target.value)
    }

    
    const handleOnClick = () => {
        setList((prevList) => [...prevList, inputValue]);
    }

    const handleDelete = (index) => {
        const updatedList = [...list.slice(0, index), ...list.slice(index + 1)];
        setList(updatedList);
    };

    return (
        <div>
            <input onChange={handleOnChange} type="text" placeholder={props.placeholder} />
            <Button onClick={handleOnClick} text={"Submit"} className="submitButton" />
            {list.length > 0 && (
                <ul className="listContainer">
                    {list.map((todo, index) => (
                        <li key={index}>
                            {todo}
                            <Button onClick={() => handleDelete(index)} text={"Delete"} className="deleteButton" />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Input
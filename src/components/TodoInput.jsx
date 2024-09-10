import { useState } from "react"

export default function TodoInput(props) {
    const { handleAddtodos } = props
    const [todoValue, setTodoValue] = useState('')
    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter todo..." />
            <button onClick={() => {
                handleAddtodos(todoValue)
            }}>Add</button>
        </header>
    )
}
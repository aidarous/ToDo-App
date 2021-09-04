import { useRef, useState } from "react";

function AddToDo ({ task, createTask}) {
    const [taskInput, setTaskInput] = useState(null);

    const taskRef = useRef(null);

    const handleAddTaskClick = () => {
        const newTask = taskRef.current.value;

        createTask(newTask);
    }

    const handleTaskInput = () => {
        console.log('taskRef is', taskRef.current.value);
        setTaskInput(taskRef.current.value);
    }
    return (
        <div>
            <p> Add task: {taskInput}</p>
            <input ref={taskRef}></input><button onClick={handleAddTaskClick}>Add to list</button>
        </div>
        )
}

export default AddToDo;


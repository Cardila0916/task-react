import TasksForm from './TasksForm'
import TasksList from './TasksList'
import React, {useState, useEffect} from 'react';
import {Tasks as data} from './Tasks'

function App2() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(data)
    }, []);

    const createTask = (task) => {
        setTasks([...tasks, {
            name: task.name,
            id: tasks.length,
            description: task.description
        }])
    }

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    }

    return (
        <div>
            <TasksForm createTask={createTask} />
            <TasksList tasks={tasks} deleteTask={deleteTask} />
        </div>
    )
}

export default App2
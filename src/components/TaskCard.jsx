import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskCard({ task }) {

    const { deleteTask } = useContext(TaskContext);

    return (
        <div className='bg-gray-800 text-white p-4 rounded-md'>
            <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
            <p className='text-gray-500 text-sm'>{task.description}</p>
            <button className='bg-slate-700 px-2 py-2 rounded-md mt-3 hover:bg-slate-500' onClick={() => deleteTask(task.id)}>
                Eliminar tarea
            </button>
        </div>
    )
}

export default TaskCard
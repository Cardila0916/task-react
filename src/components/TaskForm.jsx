import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskForm() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const { createTask } = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
            title,
            description
        });
        setTitle('');
        setDescription('')
    }

    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmit} className='bg-gray-800 p-8 mb-4' >
                <h1 className='text-2xl font-bold mb-3 text-center text-white'>Crea tu tarea</h1>
                <input placeholder='Escribe tu tarea'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className='bg-slate-200 p-2 w-full mb-2'
                    autoFocus
                />
                <textarea placeholder='Escribe una descripción de la tarea'
                    onChange={(e) => setDescription(e.target.value)}
                    className='bg-slate-200 p-2 w-full mb-2'
                    value={description}
                ></textarea>
                <button className='bg-slate-700 px-2 py-2 rounded-md mt-3 hover:bg-slate-800' >Guardar</button>
            </form>
        </div>
    )
}

export default TaskForm
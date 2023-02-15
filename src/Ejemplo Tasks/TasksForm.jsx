import React, { useState } from 'react'

function TasksForm({ createTask }) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask({
            name,
            description
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder='Escribe una tarea' onChange={(e) => setName(e.target.value)} />

                <textarea placeholder='Escriba una descripción para la tarea'
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>

                <button>Guardar</button>

            </form>
        </div>
    )
}

export default TasksForm;
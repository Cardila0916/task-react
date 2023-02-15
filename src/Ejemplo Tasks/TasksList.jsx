
function TasksList({tasks, deleteTask}) {

    return (
        <div>
            {tasks.map((task) => (
                <div key={task.id}>
                    <h1>{task.name}</h1>
                    <p>{task.description}</p>
                    <button onClick={(e) => deleteTask(task.id)}>Eliminar Tarea</button>
                </div>
            ))}
        </div>
    )
}

export default TasksList
import React from 'react'

const TodoRowItem = ({ todoData, deleteTodo }) => {
    const generateRandomColorClass = () => {
        const colors = [
            'table-primary',
            'table-secondary',
            'table-success',
            'table-danger',
            'table-warning',
            'table-info',
            'table-light',
            'table-dark',
        ];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    return (
        todoData ? todoData.map((todo, key) => (
            <tr className={generateRandomColorClass()}>
                <td>{key + 1}</td>
                <td>{todo.work}</td>
                <td> {todo.time}</td>
                <td className='d-flex justify-content-evenly'>
                    <span><i className="bi bi-check2-circle"></i></span>
                    <span><i className="bi bi-pencil-fill"></i></span>
                    <span onClick={() => deleteTodo(todo.key)}> <i className="bi bi-trash3"></i></span>
                </td>
            </tr>
        )) : ""


    )
}

export default TodoRowItem

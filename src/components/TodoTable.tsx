import React from 'react'
import TodoRowItem from './TodoRowItem'

const TodoTable = (props:{todoData:TodoModel[],deleteTodo:Function}) => {
    const {todoData,deleteTodo} = props
    return (
        <>


            <table className="table table-bordered  table-hover table-striped" >
                <thead >

                    <tr className='text-center '>
                        <th scope="col">Todo No.</th>
                        <th scope="col">Todo Name</th>
                        <th scope="col">Date decided</th>
                        <th scope="col">Tools</th>

                    </tr>
                </thead>
                <tbody>

                    <TodoRowItem todoData={todoData} deleteTodo={deleteTodo} />
                </tbody>
            </table>
        </>
    )
}

export default TodoTable

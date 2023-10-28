import React from 'react'
import { TodoRowItem } from './TodoRowItem'

export const TodoTable: React.FC<{ todoData: TodoModel[], deleteTodo: Function }> = ({ todoData, deleteTodo }) => {

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
                    {
                        todoData.map((todo) => (
                            <TodoRowItem index={todo.index} time={todo.time} work={todo.work} deleteTodo={deleteTodo} />
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}



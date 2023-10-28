import React from 'react'
import { generateRandomColorClass } from '../functions/randomColor'
export const TodoRowItem: React.FC<{ index: number, time: string, work: string, deleteTodo: Function }> =
    ({ index, time, work, deleteTodo }) => {
        return (
            <>

                <tr className={generateRandomColorClass()} key={index}>

                    <td>{index}</td>
                    <td>{work}</td>
                    <td> {time}</td>
                    <td className='d-flex justify-content-evenly'>
                        <span><i className="bi bi-check2-circle"></i></span>
                        <span><i className="bi bi-pencil-fill"></i></span>
                        <span onClick={() => deleteTodo(index)}> <i className="bi bi-trash3"></i></span>
                    </td>
                </tr>

            </>


        )
    }

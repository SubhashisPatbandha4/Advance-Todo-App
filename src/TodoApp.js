
import React, { useState } from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import TakeTodo from './components/TakeTodo';

function App() {
  const [todoData, setTodoData] = useState([])
  const addTodo = (time, work) => {
    let todo = {key:todoData.length+1, time: time, work: work }
    setTodoData([...todoData, todo])

  }
  const deleteTodo = (key) => {
    setTodoData(todoData.filter(todo => todo.key !== key))
  }
  return (
    <div className='d-flex justify-content-center'>
      <div class="wrapper">
        {/* <div class="bubble-container"> */}
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
        <div><span class="dot"></span></div>
      </div>
      {/* </div> */}
      <div className='card w-75 mt-5 mycard'>
        <div className='card-header text-center  bg-tertiary text-dark'>
          <i>Hi Subhashis , Welcome to your Todo Table</i>
        </div>
        <div className='card-body '>

          {
            todoData.length !== 0 ?
              (
                <>
                  <TakeTodo addTodo={addTodo} /><TodoTable todoData={todoData} deleteTodo={deleteTodo}/>
                </>
              ) :
              (
                <div className=' card-body mt-5' style={{ height: '18rem', alignItems: 'center', textAlign: "center" }}>
                  <h1 >😎</h1>
                  <i className='h1'>Todo is Empty  </i> <br /> <br />

                  <TakeTodo addTodo={addTodo} />

                </div>
              )

          }


        </div>

      </div>


    </div>
  );
}

export default App;

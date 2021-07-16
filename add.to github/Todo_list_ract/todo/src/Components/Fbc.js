import React, { useState } from 'react'
import './Todostyle.css'

const Fbc = () => {
    const [input, setInput] = useState("")
    const [todos, setTodos] = useState([])

    const formHandler = (e) => {
        e.preventDefault()
        if (input) {
            setTodos([...todos, input])
        }
        else {
            alert("Pls write something")
        }
    }


    return (
        <div className='main_div'>
            <div className='center_div'>
                <br />
                <h1> ToDo List</h1>
                <br />
                <form onSubmit={formHandler}>
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter todo.." />
                    <button type="submit"> + </button>
                </form>

                {todos.length !== 0 ? todos.map(todo =>
                    <h3>{todo}</h3>
                ) : <p>No todos to show</p>}

            </div>
        </div>
    )
}

export default Fbc


// ********************************************************8

// import React, {useState} from 'react'

// const Fbc = () => {
//     const[input, setInput] = useState('')

//     const[todos, setTodos] = useState([])

//     const formHandler = (e) => {
//         e.preventDefault()
//         if(input){
//             setTodos({...todos, input})
//         }
//         else{
//             alert('Please write something')
//         }
//     }

//     return (
//         <div>
//             <form onSubmit={fromHandler}>
//             <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} placeholder="Enter todo.."> 
//             </input>
//             <button type="submit" >Submit</button>
//             </form>
//             {todos.length !== 0? todos.map(todo=>
//              <h3>{todo}</h3>
//              ); 
//               <p>No todos to show</p>}


//         </div>
//     )
// }

// export default Fbc

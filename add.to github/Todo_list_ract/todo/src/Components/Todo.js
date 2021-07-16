import React, { useState } from 'react'
import './Todostyle.css'
const Todo = () => {
    const [inputList, setInputList] = useState("buy Apple")
    const[Items, setItems] = useState([]);
    
    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () => {
        setItems((oldItems) =>{
            return[...oldItems, inputList];
        });
    };
    return (
        <div className='main_div'>
            <div className='center_div'>
                <br />
                <h1> ToDo List</h1>
                <br />
                <input type="text" placeholder='Add a Items' onChange={itemEvent}/>
                <button OnClick={listOfItems}> + </button>

                <ol> 
                  {/* <l1>{inputList}</l1> */}

                  {Items.map( (itemval) => {
                      return <li> {itemval} </li>
                  })}

                </ol>
            </div>
        </div>
    )
}

export default Todo

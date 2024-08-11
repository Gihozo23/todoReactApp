import React, { useState } from 'react'

function Todos(props) {

    const [checkbox, setCheckbox] = useState(false);
    const [visible, setVisible] = useState(true);
    // function handleClick() {
    //     setVisible(!visible);
    // }
    function handleChecked() {
        setCheckbox(!checkbox);
        
    }

    return (
      <>
            {true &&
           <div
           index={props.index}
           className='flex justify-center items-center gap-16 pt-4'>
           <input
               onClick={handleChecked} type='checkbox' className='w-4' name='checkbox' />
           <p
               className={checkbox ? "line-through" : ""}
               name="todo" >{props.task}</p>
           <button 
               onClick={() => props.handleDelete(props.index)}
               
               className='border-2 border-white rounded-full flex justify-center items-center'>
           <img name="delete" src="/trash.svg" className='w-4' alt="" />
       </button >
</div>}  
      </>
  )
}

export default Todos
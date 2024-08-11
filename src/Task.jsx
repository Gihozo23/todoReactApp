import React, { useState, useRef, useEffect } from 'react';
import Todos from './Todos';
function Task() {
    const inputRef = useRef(null);
    const [tasks, setTasks] = useState([]);
    const [visible, setVisible] = useState(false);
    function handleSubmit(event) {
        event.preventDefault();
        setTasks(prevTasks => [...prevTasks, inputRef.current.value] );
        setVisible(true);
    }
    // function handleDelete(id) {
    //     setTasks(prevTasks => {
    //         prevTasks.filter(task => task.id!== id)
    //     })
    // }
    useEffect(() => {
        console.log(tasks)
    }, [tasks]);
    console.log(tasks);
    return (
        <>
            <div className='flex justify-center pt-32 gap-'>
                <form onSubmit={handleSubmit} >
                    <input ref={inputRef} className='border rounded' type="text" placeholder='Add todo...' /> 
                    <button>
                        +
                    </button>
                </form> 
            </div>
            <div>
                {visible && 
                    tasks.map((task,index) => <Todos
                        key={index}
                        index={index}
                        task={task}
                        handleDelete={(index) => setTasks(task => {
                            tasks.splice(index, 1) 
                            return tasks
                        })}/>)
                    
                }
            </div>
            

        </>
    );
}

export default Task;

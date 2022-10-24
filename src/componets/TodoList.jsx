import React, { useEffect, useState } from 'react';
import CreateTask from '../modals/CreateTask';
import Card from './Card';

const TodoList = () => {
    const [modal, setModal] = useState('false');
    const [taskList, setTaskList] = useState([])


    useEffect(() => {
        let arr = localStorage.getItem("taskList")

        if (arr) {
            let obj = JSON.parse(arr)
            setTaskList(obj)
            setModal('')
        }
    }, [])

    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const comp=(index)=>{

        const collection = document.getElementsByClassName("tl2 ");
        collection[index].style.color="#ccc";
        collection[index].style.textDecoration="line-through";

        const collection1 = document.getElementsByClassName(" description");
        collection1[index].style.color="#ccc";
        collection1[index].style.textDecoration="line-through";

        const collection2 = document.getElementsByClassName(" fa-edit");
        collection2[index].style.display = 'none';
        const collection3 = document.getElementsByClassName(" fa-check");
        collection3[index].style.display = 'none';
    }
    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
    }
    return (
        <>
            <div className='header' >
                <h1 className='H1'>TODO</h1>
                <button className='btn-primary mt-3 custom-btn' onClick={() => setModal(true)}>Add task</button>
            </div>
            <div className="task-container">
                {taskList && taskList.map((obj, index) => <Card taskObj={obj} index={index} comp={comp} deleteTask={deleteTask} updateListArray={updateListArray} />)}
            </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask} />
        </>
    );
};

export default TodoList;
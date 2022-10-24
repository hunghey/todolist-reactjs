import React, { useState } from 'react';

import EditTask from '../modals/EditTask';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";


const Card = ({taskObj, index, deleteTask, updateListArray,comp }) => {
    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor: "#394755",
            secondaryColor: "#ECF3FC"
        },
        {
            primaryColor: "#063411",
            secondaryColor: "#FEFAF1"
        },
        {
            primaryColor: "#607c65",
            secondaryColor: "#F2FAF1"
        },
        {
            primaryColor: "#05721b",
            secondaryColor: "#FDF1F1"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }
    const handlecomp=()=>{
        comp(index);
    }
    const handleDelete = () => {
        deleteTask(index)
    }

    return (

        <VerticalTimeline>
            {
                <VerticalTimelineElement
                    date={taskObj.date}
                    iconStyle={{ "background": "#198754" }}
                >
                    <h3 className='vertical-timeline-element-title tl2' id='tl' style={{ "background-color": colors[index % 4].secondaryColor, "border-radius": "10px" }}>
                        {taskObj.Name}
                    </h3>
                    <p className="description">
                        {taskObj.Description}
                    </p>
                    <div style={{ "position": "absolute", "right": "20px", "bottom": "5px" }}>
                        <i class="fas fa-check mr15" style={{ "color": colors[index % 4].primaryColor, "cursor": "pointer" }} onClick={handlecomp}></i>
                        <i class="far fa-edit mr15" style={{ "color": colors[index % 4].primaryColor, "cursor": "pointer" }} onClick={() => setModal(true)}></i>
                        <i class="fas fa-trash-alt" style={{ "color": colors[index % 4].primaryColor, "cursor": "pointer" }} onClick={handleDelete}></i>
                    </div >
                    <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
                </VerticalTimelineElement>
                
            }


        </VerticalTimeline>
    );
};

export default Card;
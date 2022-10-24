import React, { useState } from 'react';
import {
    FaUserAlt,
    FaListAlt,
    FaBars
} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
const Slidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle =() => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Introduce",
            icon: <FaUserAlt />
        },
        {
            path: "/toDo",
            name: "To Do List",
            icon: <FaListAlt/>
        }
    ]
    return (
        <div className='container1'>
            <div style={{width: isOpen ? "200px" : "50px"}} className="slidebar">
                <div className="top_section">
                    <h1 style={{display: isOpen ? "block" : "none"}} className='logo'>Menu</h1>
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item,index)=>(
                        <NavLink to={item.path} key={index} className="link" >
                            <div className="icon">{item.icon}</div>
                            <div  style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main >{children}</main>
        </div>
    );
};

export default Slidebar;
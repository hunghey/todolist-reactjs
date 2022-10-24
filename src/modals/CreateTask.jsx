import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';


const CreateTaskPopup = ({ modal, toggle, save }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
    const { name, value } = e.target
        if (name === "taskName") {
            setTaskName(value)
        } else {
            setDescription(value)
        }
    }

    const handleSave = () => {
        let taskObj = {}
        var today = new Date();
        var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        taskObj["date"] = dateTime
        save(taskObj)   
    }

    (function () {
        'use strict'
      
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')
      
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }
      
              form.classList.add('was-validated')
            }, false)
          })
      })()

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}> Create Task</ModalHeader>
            <ModalBody>
                <form class="needs-validation" novalidate onSubmit={handleSave}>
                    <div className='form-group'>
                        <label>Task</label>
                        <input type="text" required  className="form-control" value={taskName} onChange={handleChange} name="taskName" />
                    </div>
                    <div className='form-group'>
                        <label>Description</label>
                        <textarea rows="5" className='form-control' value={description} onChange={handleChange} name="description"></textarea>
                    </div>

                    <div className="form-submit">
                    <Button color='primary' type="submit" style={{"margin-right":"10px"}}>Create</Button>
                    <Button color='secondary' onClick={toggle}>Cancle</Button>
                    </div>
                </form>
            </ModalBody>
        </Modal>
    );
};

export default CreateTaskPopup;
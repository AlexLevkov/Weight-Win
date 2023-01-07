import React from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
import { useState , useEffect } from 'react'
import service from '../services/storage-service'

const ResetBtn = () => {
  
  const [show,setShow]=useState(false)

  const resetProfile = () => {
    service.clearLocalStorage()
    window.location.reload()
  }

  const handleClose = () => {setShow(false)};
  const handleShow = () => {setShow(true)};

  return (
    <>
    <div className='' onClick={()=>{handleShow()}}>
    {/* <a href="#" onClick={() => { func1(); func2();}}>Test Link</a> */}
    Reset Profile
    </div>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Reset Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to reset profile?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          No
        </Button>
        <Button className="btn btn-app" onClick={()=>{handleClose();resetProfile()}} >
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default ResetBtn


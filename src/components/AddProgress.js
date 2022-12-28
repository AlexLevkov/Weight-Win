import React from 'react'
import AddDay from './AddDayForm';

import { Button, Modal } from 'react-bootstrap';

const AddProgress = ({addData,days}) => {


  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn-user" onClick={handleShow}>
        Add Progress
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please fill in the next questions </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddDay days={days} addData={addData} handleClose={handleClose} />
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className='btn-user' onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  )
}


export default AddProgress
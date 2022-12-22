import React from 'react'
import { useState , useEffect } from 'react'
import { Button, Collapse } from 'react-bootstrap';



const ProfileOptions = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className='ProfileOptions-cmp '>
      <Button
      className='mb-2'
      onClick={() => {
        setOpen(!open)
        document.querySelector('.AddDay-cmp').classList.toggle('none')
      }}
      aria-controls="example-collapse-text"
      aria-expanded={open}
      >
      Profile Options
      </Button>
      <Collapse in={open}>
        <div className=''>
          <button className='btn btn-dark m-2 '>Delete profile</button>
          <button className='btn btn-dark '>Download data to CSV file</button>
        </div>
      </Collapse>
    </div>
  )
}

export default ProfileOptions

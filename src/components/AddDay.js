import React from 'react'
import { useState , useEffect } from 'react'
import { Button, Collapse } from 'react-bootstrap';

import stas from '../imgs/stas.svg'
// src\imgs\stas.svg

const AddDay = ({onAdd,days}) => {

    const uniqid = require('uniqid'); 
  
    const [weight, setWeight] = useState(null)
    const [walk, setWalk] = useState(null)
    const [water, setWater] = useState(false)
    const [affirm, setAffirm] = useState(false)
    const [open, setOpen] = useState(false);
    const [todayStep, setTodayStep] = useState(null)
    
    useEffect(() => {
      if (todayStep){
        const lastUpdDate = new Date(days[days.length-1].date)
        const CurrDate = new Date()
        // if it's an update for the same day
        if (lastUpdDate.toLocaleDateString() === CurrDate.toLocaleDateString()){
          let daysCopy = days 
          daysCopy.pop()
          onAdd([...daysCopy,todayStep])
        // if it's first update for the day
        } else {
            onAdd([...days,todayStep])
        }
  
      }
        
    }, [todayStep]);
  
    function handleSubmit(e) {
      e.preventDefault()
      setTodayStep({ weight, walk, water, affirm, date: new Date(),id:uniqid() })
     }


  return (
    
    <div className='AddDay-cmp'>
    
      <Button
      className='mb-2'
      onClick={() => {
        document.querySelector('.ProfileOptions-cmp').classList.toggle('none')
        setOpen(!open)}}
      aria-controls="example-collapse-text"
      aria-expanded={open}
      >
      Today's Progress
      </Button>
      <Collapse in={open}>
        <div id="" className='w-20' style={{width:'400px'}}>
          <form className="w-20" onSubmit={handleSubmit}>
            <div className="form-group m-1">
              <label className='mb-1' htmlFor="weight-input">What is your weight today?</label>
              <input type="text" className="form-control" id="weight-input" onChange={(e) => setWeight(e.target.value)}/>
            </div>
            <div className="form-group m-1">
            <label className='mb-1' htmlFor="walk-input">How much time did you walk?</label>
            <input type="text" className="form-control" id="walk-input" onChange={(e) => setWalk(e.target.value)}/>
            </div>
            <div className="form-group form-check m-1">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={(e) => setWater(e.target.checked)}/>
              <label className="form-check-label" htmlFor="exampleCheck1">I drank two litters of water</label>
            </div>
            <div className="form-group form-check m-1">
              <input type="checkbox" className="form-check-input" id="exampleCheck2" onChange={(e) => setAffirm(e.target.checked)}/>
              <label className="form-check-label" htmlFor="exampleCheck2">I said my affirmation outloud</label>
            </div>
            <button type="submit" className="btn btn-primary my-2">Submit</button>
          </form>
          <div style={{position:'relative', bottom: '250px', left: '400px', width:'400px'}}>
          <img  src={stas}  style={{width:'400px'}}/>
          </div>
        </div>
      </Collapse>

   
   
       

        {/* 
        
        <div className='w-50'>
         
        </div> */}
       

    
       
       

    </div>

  )
}

export default AddDay

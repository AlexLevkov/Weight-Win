import React from 'react'
import { useState , useEffect } from 'react'

import stas from '../imgs/stas.svg'
// src\imgs\stas.svg

const AddDayForm = ({addData,days,handleClose}) => {
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
          addData([...daysCopy,todayStep])
        // if it's first update for the day
        } else {
            addData([...days,todayStep])
        }
  
      }
        
    }, [todayStep]);
  
    function handleSubmit(e) {
      e.preventDefault()
      setTodayStep({ weight, walk, water, affirm, date: new Date(),id:uniqid() })
      handleClose()
     }


  return (
    
    <div className='AddDay-cmp'>
    
   
        <div id="" className='w-20' style={{width:'400px'}}>
          <form className="w-20" onSubmit={handleSubmit}>
            <div className="form-group m-1">
              <label className='mb-1' htmlFor="weight-input">What is your weight today?</label>
              <input type="text" className="form-control" id="weight-input" onChange={(e) => setWeight(e.target.value)}/>
            </div>
            <div className="form-group m-1">
            <label className='mb-1' htmlFor="walk-input">How much time did you exercise?</label>
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
            <button type="submit" className="btn btn-user my-2">Submit</button>
          </form>
          <div style={{position:'relative', bottom: '250px', left: '400px', width:'400px'}}>
          {/* <img  src={stas}  style={{width:'400px'}}/> */}
          </div>
        </div>
    </div>

  )
}

export default AddDayForm

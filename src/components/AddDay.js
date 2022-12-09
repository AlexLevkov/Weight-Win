import React from 'react'
import { useState , useEffect } from 'react'
import stas from '../imgs/stas.svg'
// src\imgs\stas.svg

const AddDay = ({onAdd,days}) => {

    const uniqid = require('uniqid'); 
  
    const [weight, setWeight] = useState(null)
    const [walk, setWalk] = useState(null)
    const [water, setWater] = useState(false)
    const [affirm, setAffirm] = useState(false)
     
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
    
      <div className='d-flex'>
    
       
        {/* <form className='daily-form container d-flex-col' onSubmit={handleSubmit}>
            <label htmlFor="weight">Enter your weight: </label>
            <input id="weight" onChange={(e) => setWeight(e.target.value)} />
            <label htmlFor="walk">How much time did you walk?</label>
            <input id="walk" onChange={(e) => setWalk(e.target.value)} />
            <label htmlFor="water">Did you drink water?</label>
            <input type="checkbox" onChange={(e) => setWater(e.target.checked)} id="water" />
            <label htmlFor="affirm">Did your said out loud your motivation statement</label>
            <input type="checkbox" id="affirm" onChange={(e) => setAffirm(e.target.checked)} />
            <input type="submit" value="Done" />
        </form> */}
        <form className="w-50 ">
          <h1>Add Day</h1>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        
        <div className='w-50'>
          <img src={stas}/>
        </div>
       

    
       
       

    </div>

  )
}

export default AddDay

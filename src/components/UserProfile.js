import React from 'react'
import AddProgress from './AddProgress.js'
import { useState , useEffect } from 'react'
import ResetBtn from './ResetBtn.js'
import img1 from '../imgs/dumbbell.png'
import img2 from '../imgs/muscle.png'
import img3 from '../imgs/warming.png'
import arrayToCSV from '../functions/arrayToCSV'



const UserProfile = ({userData,days,addData}) => {
  const [goalDays, setGoalDays] = useState(null)
  const [daysToGoal, setDaysToGoal] = useState(null)

  // const test={
  //   1:{index: 1, userName: 'Alex'},
  //   2:{index: 2, currWeight: '70', goalWeight: '65'},
  //   3:{index: 3, affirm: 'Be healthy and fit'}
  // }

  

  useEffect(() => {
    const goal = userData[2].goalWeight
    const curr = days.length ? days[days.length-1].weight : userData[2].currWeight;
    const daysToGoal = ((curr - goal) / 0.2).toFixed(0)
    setDaysToGoal(daysToGoal)
    setGoalDays(daysToGoal)
  },[])

  console.log('userData:', userData)


  return (
    <div className='user-profile-cmp'>
      <h1>Hello {userData[1].userName} </h1>
        <div className="container my-3 d-flex gap-3 justify-content-center">
        <button className="btn btn-user" onClick={()=>{arrayToCSV(days)}}>Download to SCV</button>
        <AddProgress days={days} userData={userData} addData={addData}/>
        <ResetBtn/> 
        </div>
      <div className="profile-box-container flex-column flex-md-row d-flex gap-3 mt-3">
        <div className="reminder-box profile-box">
          <h5>Remember your goal is to {userData[3].affirm} </h5>
          <div className='d-flex justify-content-center gap-3 p-2'>
            <img style={{height: '40px'}} src={img1} />
            {/* <img style={{height: '50px'}} src={img2} /> */}
            <img style={{height: '40px'}} src={img3} />
          </div>
        </div>
        <div className="countdown-box profile-box">
          <h5>Number of days until you reach your goal:</h5>
          <h1 className= 'days-to-goal'>{daysToGoal}</h1>
        </div>
        <div className="motivation-box profile-box">
          <h5>
            "The thing standing between you and your goal is the will to try and the belief that it is possible." - Joel Brown
          </h5>
        </div>
      </div>
      <p></p>
    </div>
  )
}

export default UserProfile

import React from 'react'
import { useState , useEffect } from 'react'

const UserProfile = ({userData,days}) => {
  console.log('days:', days)
  const [goalDays, setGoalDays] = useState(null)

  // const test={
  //   1:{index: 1, userName: 'Alex'},
  //   2:{index: 2, currWeight: '70', goalWeight: '65'},
  //   3:{index: 3, affirm: 'Be healthy and fit'}
  // }



  useEffect(() => {
    
    console.log('userData in profile:', userData)
    const goal = userData[2].goalWeight
    const curr = days.length ? days[days.length-1].weight : userData[2].currWeight;
    const daysToGoal = ((curr - goal) / 0.2).toFixed(0)
    console.log('daysToGoal:', daysToGoal)
    setGoalDays(daysToGoal)
  },[])




  return (
    <div>
      <h1>UserProfile</h1>
      <h4>Hello {userData[1].userName}! </h4>
      <h4>Remember your goal is to {userData[3].affirm} </h4>
      <h4>Days until you reach your goal: {goalDays} </h4>
      <h4>Keep it going {userData[1].userName} you got it!</h4>
      <p></p>
    </div>
  )
}

export default UserProfile

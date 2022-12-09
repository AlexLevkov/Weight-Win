import React from 'react'
import { useState , useEffect } from 'react'

const UserProfile = ({userData,days}) => {
  console.log('days:', days)
  const [goalDays, setGoalDays] = useState(null)

  // const test={
  //   userName: 'test',
  //   affirm: 'affirm',
  //   currWeight: '70',
  //   goalWeight: '65',
  // }

  useEffect(() => {
    console.log('userData in profile:', userData)
    const goal = userData[2].goalWeight
    const curr = days[days.length-1].weight
    const daysToGoal = ((curr - goal) / 0.2).toFixed(0)
    console.log('daysToGoal:', daysToGoal)
    setGoalDays(daysToGoal)
  },[])




  return (
    <div>
      <h1>UserProfile</h1>
      <p>Hello {userData[1].userName}! </p>
      <p>Remember your goal is to {userData[3].affirm} </p>
      <p>Days until you reach your goal: {goalDays} </p>
      <p>Keep it going {userData[1].userName} you got it!</p>
      <p></p>
    </div>
  )
}

export default UserProfile

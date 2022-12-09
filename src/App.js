import React from 'react';
import { useState , useEffect } from 'react'
import service from './services/storage-service'
import Header from './components/Header'
import Motivation from './components/Motivation';
import AddDay from './components/AddDay';
import Chart from './components/Chart';
import Intro from './components/Intro';
import UserProfile from './components/UserProfile'
import Starter from './components/Starter'

function App() {
  
  const [isIntro,setIsIntro] = useState (true)
  const [isStart,setIsStart] = useState (true)

  const [isDebug, setIsDebug] = useState(false)
  const [days, setDays] = useState(null)
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    fetch("./data.json")
    .catch(err => console.log(err))
    .then( res=> res.json())
    .then( (data) => setDays(data.days))

    const data = service.loadFromStorage('userData')
    // console.log('data:', data)
    
    // setTimeout(() => {
    //   if (data){
    //     setUserData(data)
    //     setIsIntro(false)
    //   }}, 1000);

 }, []);



  const addData = (data) => {
    console.log('addData is on')
    console.log('data:', data)
    setDays(data)
  }

  const getUserData = (data) => {
    setUserData(data)
    const clone = structuredClone(userData);
    service.saveToStorage('userData',clone)
  }

  const submitUserData = (data) => {
      console.log('data in app:', data[1].userName)
      setUserData(data)
      setIsIntro(false)
  }


  const startDemo = () => {
    console.log('start demo')
  }

  const startIntro = () => {
    console.log('start intro')
    setIsStart(false)
  }

  return (
    <div>
      <Header />
      {isStart && <Starter onStartDemo={startDemo} onStartIntro={startIntro}/>}
     

      {!isStart && isIntro && <Intro submitUserData={submitUserData} onGetData={getUserData}/>}
      {/* <button onClick={()=>{service.clearLocalStorage()}}>
        CLEAR
      </button> */}

      {!isIntro && <UserProfile  days={days} userData={userData}/>}
      {!isIntro && <AddDay days={days} onAdd={addData}/>}
      {!isIntro && <Motivation/>}
      {!isIntro && <Chart days={days}/>}
      {/* {days && <div>{days.map((task, index) => (<h1 key={index} >{task.weight}</h1>))}</div>} */}
    </div>
  );
}

export default App;

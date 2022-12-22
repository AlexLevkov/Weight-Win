import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState , useEffect } from 'react'
import service from './services/storage-service'
import Header from './components/Header'
import Motivation from './components/Motivation';
import AddDay from './components/AddDay';
import ProfileOptions from './components/ProfileOptions.js';
import Chart from './components/Chart';
import Intro from './components/Intro';
import UserProfile from './components/UserProfile'
import Starter from './components/Starter'
import arrayToCSV from './functions/arrayToCSV'
import Test from './components/Test'

function App() {
  
  const uniqid = require('uniqid'); 

  // the intro is for the creation of the user profile
  const [isIntro,setIsIntro] = useState (true)
    // the start is the beginning window with options for demo or real user
  const [isStart,setIsStart] = useState (true)
  const [isDebug, setIsDebug] = useState(false)
  const [days, setDays] = useState([])
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    // fetch("./data.json")
    // .catch(err => console.log(err))
    // .then( res=> res.json())
    // .then( (data) => setDays(data.days))

    const userData = service.loadFromStorage('userData')
    const daysData = service.loadFromStorage('daysData')
    console.log('userData:', userData)
    if (userData){
      setUserData(userData)
      setDays(daysData)
      setIsStart(false)
      setIsIntro(false)
    }
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
    // console.log('data:', data)
    // setUserData(data)
    // service.saveToStorage('userData',data)
  }

  // user has pressed submit and entered the app
  const submitUserData = (data) => {
    console.log('data:', data)
    const weight = data[2].currWeight
    const daysData=[{ weight, date: new Date(),id:uniqid() }]

    service.saveToStorage('daysData',daysData)
    setDays(daysData)

    service.saveToStorage('userData',data)
    setUserData(data)

    setIsIntro(false)
  }


  const startDemo = () => {
    console.log('start demo')

    const demoUserData={
      1:{index: 1, userName: 'Alex'},
      2:{index: 2, currWeight: '70', goalWeight: '65'},
      3:{index: 3, affirm: 'be healthy and fit'}
    }

    fetch("./data.json")
    .catch(err => console.log(err))
    .then(res=> res.json())
    .then((data) => setDays(data.days))
    .then(()=> setUserData(demoUserData))
    .then(()=>setIsIntro(false))
    .then(()=>setIsStart(false))
  }


  // Activated after "Start wining" button is clicked
  const startIntro = () => {
    console.log('start intro')
    setIsStart(false)
  }

  return (
    <Router>
      <Header />
      {isStart && <Starter onStartDemo={startDemo} onStartIntro={startIntro}/>}
    </Router>
    
  );
}

export default App;

{/* <Test arrayToCSV={arrayToCSV}/> */}


// {/* <div className=''>
// <Header />
// {/* <Test arrayToCSV={arrayToCSV}/> */}



// {!isStart && isIntro && <Intro submitUserData={submitUserData} getUserData={getUserData}/>}
// {/* <button onClick={()=>{service.clearLocalStorage()}}>
//   CLEAR
// </button> */}

// {!isIntro && <UserProfile  days={days} userData={userData}/>}
// {!isIntro && 
// <div className="d-flex gap-2">
//   <AddDay days={days} onAdd={addData}/>
//   <ProfileOptions/>
// </div>}
// {!isIntro && <Motivation/>}
// {!isIntro && <Chart days={days}/>}
// {/* {days && <div>{days.map((task, index) => (<h1 key={index} >{task.weight}</h1>))}</div>} */}
// </div> */}
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState , useEffect } from 'react'
import service from './services/storage-service'
import Header from './components/Header'
import Motivation from './components/Motivation';
import AddDay from './components/AddDayForm';
import ProfileOptions from './components/ProfileOptions.js';
import Intro from './components/Intro';
import UserProfile from './components/UserProfile'
import Starter from './components/Starter'
import Test from './components/Test'
import Blog from './components/Blog'
import Contact from './components/Contact'
import GraphCarousel from './components/GraphCarousel'
import DaysChart from './components/charts/DaysChart';

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

  
  // user has pressed start demo
  const startDemo = () => {
    console.log('start demo')

    const demoUserData={
      1:{index: 1, userName: 'Alex (Demo Version)'},
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
    setIsStart(false)
  }

  return (
    <Router>
      <Header />
      {/* <Test/> */}
      <Switch>
        <Route exact path='/'>
          {isStart && <Starter onStartDemo={startDemo} onStartIntro={startIntro}/>}
          {!isStart && isIntro && <Intro submitUserData={submitUserData} getUserData={getUserData}/>}
          {!isIntro && <UserProfile  days={days} userData={userData} addData={addData}/> }
          {/* {!isIntro && <Chart days={days}/>} */}
          {!isIntro && <GraphCarousel days={days}/>}
        </Route>
        <Route path='/blog'>
          <Blog/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

      {/* <Test arrayToCSV={arrayToCSV}/> */}


// {/* <div className=''>
// <Header />
// {/* <Test arrayToCSV={arrayToCSV}/> */}

      // {/* {!isIntro && <Motivation/>} */}
      // {/* <AddDay days={days} onAdd={addData}/> */}
      // {/* <ProfileOptions/> */}


// {!isStart && isIntro && <Intro submitUserData={submitUserData} getUserData={getUserData}/>}
// {/* <button onClick={()=>{service.clearLocalStorage()}}>
//   CLEAR
// </button> */}


// {!isIntro && 
// <div className="d-flex gap-2">
  
// </div>}


// {/* {days && <div>{days.map((task, index) => (<h1 key={index} >{task.weight}</h1>))}</div>} */}
// </div> */}
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

  // the intro is referenced to the data entry by the user
  const [isIntro,setIsIntro] = useState (true)
  // the start is referenced to the landing page 
  const [isStart,setIsStart] = useState (true)
  const [isDebug, setIsDebug] = useState(false)
  const [days, setDays] = useState([])
  const [userData, setUserData] = useState(null)

  useEffect(() => {

    const userData = service.loadFromStorage('userData')
    const daysData = service.loadFromStorage('daysData')
    console.log('userData:', userData)
    if (userData){
      setUserData(userData)
      setDays(daysData)
      setIsStart(false)
      setIsIntro(false)
    }
 }, []);

  const addData = (data) => {
    console.log('addData is on')
    console.log('last data:', data)
    setDays(data)
    service.saveToStorage('daysData',data)

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

  const restToHomePage = () =>{
    if (service.keyInLocalStorage('userData')) return
    setIsIntro(true)
    setIsStart(true)
   }
  
   return (
    <Router>
      {/* <Test/> */}
      <Header restToHomePage={restToHomePage}/>
      <Switch>
        <Route exact path='/'>
          {isStart && <Starter onStartDemo={startDemo} onStartIntro={startIntro}/>}
          {!isStart && isIntro && <Intro submitUserData={submitUserData}/>}
          {!isIntro && <UserProfile  days={days} userData={userData} addData={addData}/> }
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


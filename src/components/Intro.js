import React from 'react'
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState , useEffect } from 'react'
import { MultiStepProgressBar } from "./multi_step_form/MultiStepProgressBar.js";
import { MultiStepForm } from "./multi_step_form/MultiStepForm.js";
import { questions } from "./multi_step_form/Questions";


const Intro = ({submitUserData,getUserData}) => {
  const [index, setIndex] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const totalPagesCount = questions?.length || 0;
  // numbered by pages. for exampe { 1: [{"key" : "value"}], 2:["key": "value"], 3: []}
  const [pagesAnswers, setPagesAnswers] = useState({});

  useEffect(() => {
  },[pagesAnswers])

  const prevButton = () => {
    if (index > 1) {
      setIndex(prevIndex => prevIndex - 1);
    }
  }

  const nextButton = () => {
    if (index - 4) {
      getUserData(pagesAnswers)
      setIndex(prevIndex => prevIndex + 1);
    } else {
      // clear the form on submit
      submitUserData(pagesAnswers);
      setSubmitted(true);
      getUserData(pagesAnswers)
    }
  }

  const onPageAnswerUpdate = (step, answersObj) => {
    setPagesAnswers({...pagesAnswers, [step]: answersObj});
  }

  const handleStart = () => {
    setIndex(1);
    setSubmitted(false);
  }

  return (
    <div className="App container w-50 ">
      <Container className="h-100 align-items-center">
        <Row className="m-5">
          <Col className="">
            <MultiStepProgressBar
              step={index}
              />
          </Col>
        </Row>
        <Row className='d-flex justify-content-center'>
        { submitted ?
            <Card className='w-50'>
              <Card.Body>
                <p>Your answers have been submitted!</p>
              </Card.Body>
              <Card.Footer>
                <Button onClick={handleStart}>Start Over</Button>
              </Card.Footer>
            </Card>
             :
            <Card className='w-50'>
              <Card.Body>
                <MultiStepForm
                  list={questions}
                  step={index}
                  onPageUpdate={onPageAnswerUpdate}
                  pagesAnswers={pagesAnswers}
                  />
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between">
                <Button onClick={prevButton} disabled={index == 1}>Previous</Button>
                <Button onClick={nextButton}>{index == totalPagesCount ? 'Submit' : 'Next'}</Button>
              </Card.Footer>
            </Card>
        }
        </Row>
      </Container>
    </div>
  );
}

export default Intro




// const Intro = ({onGetData,submitUserData}) => {


//   const [userData,setUserData] = useState(null)
//   const [name,setName] = useState(null)
//   const [affirm,setAffirm] = useState(null)
//   const [currWeight,setCurrWeight] = useState(null)
//   const [goalWeight,setGoalWeight] = useState(null)

//   // const demoData ={
//   //   name: 'John Doe',
//   //   affirm: "I want to be healthy and fit",
//   //   currWeight: 70,
//   //   goalWeight: 65
//   // }

//   useEffect(()=>{
//     if (name && affirm && currWeight && goalWeight) 
//     onGetData({name,affirm,currWeight,goalWeight})
//   },[name,affirm,currWeight,goalWeight])

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     onGetData({name,affirm,currWeight,goalWeight})
//     submitUserData()
//   }



//   return (
//     <div>
//       <h1>INTRO</h1>
//       <form onSubmit={handleSubmit}>
//         <label className='quetsionName' htmlFor="name">What is your name?</label>
//         <input className='quetsionName' id ="name "type="text" onChange={(e) => setName(e.target.value)} />
//         <label className='quetsionAffirm' htmlFor="affirm">My goal is to...</label>
//         <input className='quetsionAffirm' id ="affirm "type="text" onChange={(e) => setAffirm(e.target.value)} />
//         <label className='quetsionCurr' htmlFor="name">What is your weight right now?</label>
//         <input className='quetsionCurr' id ="name "type="text" onChange={(e) => setCurrWeight(e.target.value)} />
//         <label className='quetsionGoal' htmlFor="name">What is your goal weight?</label>
//         <input className='quetsionGoal' id ="name "type="text" onChange={(e) => setGoalWeight(e.target.value)} />
//         <button>submit</button>
//       </form>
//     </div>
//   )

// }


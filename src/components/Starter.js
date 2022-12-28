import React from 'react'
import mainBG from '../imgs/main-bg.png'
import image from '../imgs/Hero_image.svg';


const Starter = ({onStartDemo,onStartIntro}) => {

  const col1={height:'100%' }
  const col2={backgroundImage :`url(${image})`,  backgroundSize: 'contain',backgroundRepeat: 'no-repeat', backgroundPosition:'center',height:'100vh', paddingTop: '10%'}

  return (
    <div className="main-box container-fluid  p-0 d-md-flex " >
        <section className="land-box-txt col-md-5 col-12 h-100" style={col1}>
          <div>
            <h1>Welcome to</h1>
            <h1><span>Weight</span>win</h1>
            <p className='m-0'>We are here to help you lead your way to your goals and be more healthy, we <span>recommend</span> that you watch the app demo before getting started.</p>
            <div className='starter-btns-container d-flex gap-4'>
            <button onClick={onStartDemo} className="btn">Start Demo</button>
            <button onClick={onStartIntro} className="btn">Let's Start</button>
            </div>
          </div>
        </section>
        <section className="land-box-img col-md-7 col-12" style={col2}></section>
    </div> 
  )
}

export default Starter




// <div>
// <div className='left-txt-container container d-flex '>
//   <div className="col">
    // <h1>Welcome to</h1>
    // <h1><span>Weight</span>win</h1>
    // <p className='m-0'>We are here to help you lead your way to your goals and be more healthy, we recommend that you watch the app demo before getting started.</p>
    // <div className='starter-btns-container d-flex gap-5'>
    //   <button onClick={onStartDemo} className="btn btn-success">Watch demo</button>
    //   <button onClick={onStartIntro} className="btn btn-success">Start winning</button>
//     </div>
//   </div>

//   <div className="col " style={{backgroundImage:`url(${mainBG})`,width:'100vw',backgroundSize: 'cover'}}>
//     {/* <img className="w-100" src={mainBG}/> */}
//   </div>
// </div>

// </div>
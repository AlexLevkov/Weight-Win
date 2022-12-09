import React from 'react'

const Starter = ({onStartDemo,onStartIntro}) => {


  return (
    <div>
      <div className='container'>
        <h2>Hello and welcome to Wight Win.</h2>
        <p className='m-0'>Hello and welcome to Wight Win.</p>
        <p className='m-0'>If it is your first time here we recommend that you watch the app's demo.</p>
     
      <button onClick={onStartDemo} className="btn btn-success m-1">Watch demo</button>
      <button onClick={onStartIntro} className="btn btn-success">Start winning</button>
      </div>

    </div>
  )
}

export default Starter

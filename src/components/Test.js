import React from 'react';
import { Button, Collapse } from 'react-bootstrap';
import { useState , useEffect } from 'react'
import image from '../imgs/main-bg.png';
import { Container, Row, Col } from 'react-bootstrap';

function Test({arrayToCSV}) {
  const [open, setOpen] = useState(false);
  console.log('image:', image)
  const col1={backgroundColor: 'indigo',height:'100%' }
  const col2={backgroundImage :`url(${image})`,  backgroundSize: 'cover',height:'100%'}



  return (

 <div style={{height:'100vh'}}>
  <div className="main-box container-fluid p-0 d-md-flex" style={{height:'100vh'}}>
    <div className="row">
    <div className="land-box col-md-6 col-12 h-100" style={col1}>col1</div>
    <div className="land-box col-md-6 col-12 h-100" style={col2}>col2</div>
  </div>

  </div> 
</div> 

  );
}

export default Test;









// {/* <button onClick={()=>{arrayToCSV()}}>XXX</button> */}


// {/* <div className="main-box container-fluid p-0 d-sm-flex">
// {/* <img src='https://via.placeholder.com/150' alt="" srcset="" /> */}
// <div className="col" style={col1}>col1</div>
// <div className="col" style={col2}>col2</div>
// </div> */}
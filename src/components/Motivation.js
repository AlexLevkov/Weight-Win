import React from 'react'
import { useEffect, useState } from 'react';

const Motivation = () => {

   
    const [quote, setQuote] = useState('You are the best')
    const [author, setAuthor] = useState('me')
    
  

  return (
    <div style={{background:'grey'}}>
      <h2 >Motivation: {quote} </h2>
      {/* <h2 > {quote} </h2> */}
      {/* <h3>by {author}</h3> */}
    </div>
  )
}

export default Motivation


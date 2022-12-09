import React from 'react'
import { useEffect, useState } from 'react';

const Motivation = () => {

   
    const [quote, setQuote] = useState('You are the best')

    // useEffect(()=>{
    //     fetch('https://api.api-ninjas.com/v1/quotes?category=happiness',{
    //         method: 'GET',
    //         headers: {
    //         'Content-type': 'application/json',
    //         'X-Api-Key': '+wLw35/dcMxWmfdAb8nNiw==q2Dd5ZACjUT4QwjV'
    //         }
    //     })
    //     .then( (res)=> res.json())
    //     .then( (res)=> setQuote(res[0].quote))
    //     .catch( err => console.log(err) )
    // },[])
  

  return (
    <div>
      <h2 style={{background:'grey'}} >Motivation: {quote}</h2>
    </div>
  )
}

export default Motivation


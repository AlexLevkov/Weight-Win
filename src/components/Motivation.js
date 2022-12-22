import React from 'react'
import { useEffect, useState } from 'react';

const Motivation = () => {

   
    const [quote, setQuote] = useState('You are the best')
    const [author, setAuthor] = useState('me')
    

    // useEffect(()=>{
    //     fetch('https://api.api-ninjas.com/v1/chucknorris',{
    //         method: 'GET',
    //         headers: {
    //         'Content-type': 'application/json',
    //         'X-Api-Key': '+wLw35/dcMxWmfdAb8nNiw==q2Dd5ZACjUT4QwjV'
    //         }
    //     })
    //     .then( (res)=> res.json())
    //     .then( (res)=> {
    //       console.log('res:', res)
    //       setQuote(res.joke)
    //       setAuthor(res[0].author)})
    //     .catch( err => console.log(err) )
    // },[])
  

  return (
    <div style={{background:'grey'}}>
      <h2 >Motivation: {quote} </h2>
      {/* <h2 > {quote} </h2> */}
      {/* <h3>by {author}</h3> */}
    </div>
  )
}

export default Motivation


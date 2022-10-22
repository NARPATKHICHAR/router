import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import '../index.css';

export default function About() {

  const[data, setEmail] = useState([])


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/comments',{
      method:'GET'
    })
    .then((response) =>response.json())
    .then((actualData)=>// eslint-disable-next-line
      setEmail(actualData=actualData))
 .catch((err)=>{

 })
  })
  return (<>
    {
      data.map((item)=>{
        return(
          <button className="btn"><h2>{item.email}</h2></button>
          
        )
      })
    }
 </> )



}


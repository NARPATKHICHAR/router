import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
import '../index.css';

export default function Contect() {

  
  const[data,setBody]= useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/comments',{
      method:'GET'
    })

    .then((response) =>response.json()) 
      .then((actualData)=>{// eslint-disable-next-line
      setBody(actualData=actualData)
  })
    .catch((err) => {
      
    });
  },[])
  return (
    <>
   
     {
      data.map((item)=>{
        return(
          <div className="row">
          <h3>{item.body}</h3>
          </div>
         
        )
      })
     }
    </>
  )
}

import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
import '../index.css';

export default function Home() {

    const[data, setdata] = useState([]);


    useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/photos',{
    method:'GET'
  })
  .then((Response) => Response.json())
  .then((actualData)=> // eslint-disable-next-line
  setdata(actualData= actualData))
  .catch((err)=>{

  })
     } ,[])
    
    return (
      <div>
     
        {
          data.map((item)=>{
            return(
              <div className="urls">
              <img src={item.url} alt="eruthwelt" />"url": "https://via.placeholder.com/600/92c952",</div>
            )
          })
        }

      </div>
  )
}

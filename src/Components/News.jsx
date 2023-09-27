import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Button from '@mui/material/Button';


const News = () => {
    const [Data, setData] = useState([]);
    // useEffect(()=>{
    //     getData();
    // },[])

    const getData= async()=>{
        try {
            const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=c4df96fb9d4b46ef9efb68997e4841d4");
            console.log(response.data);
            setData(response.data.articles);
        } catch (error) {
            console.log( "API not fetehed",error);
            alert("API Not feteched")

            
        }
        
    }
    
  return (
    <>
    <div className='button-icon'>
        
        <Button variant="outlined" size="small" onClick={getData}>
            Fetch API
        </Button>
    </div>
    <div className="card">
        {
            Data.map((val, index)=>{
                return(
                    <div className="card" key={index}>
                        <h1>{val.title}</h1>
                        <p>{val.description}</p>
                        <p>{val.publishedAt}</p>
                        <p>{val.urlToImage}</p>
                    </div>
                )
            })
        }
        
    </div>


        
    </>
  )
}

export default News

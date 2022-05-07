import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import React, {useState,useEffect} from 'react'
import {GifGridItem} from './GifGridItem'
//import {getGifts} from '../helpers/getGifs'

export const GifGrid = ({category}) => {

    //const [images, setImages] = useState([])
    const { data:images, loading} = useFetchGifs(category);
    

    // //const [count, setCount] = useState(0);
    // useEffect( ()=>{
    //     //getGifts();
    //     getGifts(category)
    //         .then(imgs => setImages(imgs))
    //         //.then(setImages) lo mismo

    // },[category])



 
     
  return (
      <>
    <h3 className='animate__animated animate__fadeIn'>{category}</h3>  
    {loading && <p className="animate__animated animate__flash">Loading</p>}
    
    <div className="card-grid">             
        {            
            images.map( img=> (            
            <GifGridItem
            key={img.id}
            {...img}                                                
            />
        ))
        }         
    </div>
    </>
    
  )
}

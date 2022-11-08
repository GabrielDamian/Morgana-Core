import React,{useState, useEffect} from 'react';
import './coreStyle.css';
import DefaultBgImage from './res/DefaultImage.jpg';

//page intro header
export default function CoreModule({
    title,
    bgImage
})
{
    useEffect(()=>{
        setTimeout(()=>{
            window.scrollTo(0,0);
        },200)
    },[title])

    return (
       <div 
        style={{
            backgroundImage: `url(${bgImage?bgImage:DefaultBgImage})`
        }}
        className='layers_widget_6-container'>
            <span>{title}</span>
       </div>
    )
}

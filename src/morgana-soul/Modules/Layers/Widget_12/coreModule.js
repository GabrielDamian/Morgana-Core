import React,{useState, useEffect} from 'react';
import './coreStyle.css';

//page intro header
export default function CoreModule({image_1, image_2,bg})
{
    return (
        <div 
            className='layers_widget_12-container'
            style={{
                backgroundImage: `url('${bg}')`
            }}
            >
            <img src={image_1}/>
            <img src={image_2}/>
        </div>
    )
}

import React,{useState, useEffect} from 'react';
import './coreStyle.css';
import DefaultImage from './res/DefaultImage.jpg';
import DefaultCheckedIcon from './res/check.png';

//page intro header
export default function CoreModule({
    title
})
{
    const Facilities = [
        'asdad',
        '22de2d',
        'sfc4rgv',
        '4532fwef',
        'asdad',
        '22de2d',
        'sfc4rgv',
        '4532fwef'
    ]
    return (
        <div className='layers_widget_9-container'>
            <div className='layers_widget_9-container-left'>
                <div className='layers_widget_9-container-left-heading'>
                    <div className='layers_widget_9-container-left-heading-head'>
                        <span>[Cool headline here]</span>
                    </div>
                    <div className='layers_widget_9-container-left-heading-main'>
                        <span>{title}</span>
                    </div>
                </div>
                <div className='layers_widget_9-container-left-desc'>
                    <span>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now 
                    </span>
                </div>
                <div className='layers_widget_9-container-left-facilities'>
                    <div className='layers_widget_9-container-left-facilities-header'>
                        <span>Facilitati</span>
                    </div>
                    <div className='layers_widget_9-container-left-facilities-items'>
                    {
                        Facilities.map((el)=>{
                            return <FacilityItem title={el}/>
                        })
                    }
                    </div>
                </div>
            </div>
            <div className='layers_widget_9-container-right'>
                <div className='layers_widget_9-container-right-img'>
                    <img src={DefaultImage}/>
                </div>
                
                <div className='layers_widget_9-container-right-absolute'>
                    <img src={DefaultImage}/>
                </div>
            </div>
        </div>
    )
}


const FacilityItem = (props)=>{
    return(
        <div className='layers_widget_9-container-left-facilities-item-el'>
            <img src={DefaultCheckedIcon}/>
            <span>{props.title}</span>
        </div>
    )
}
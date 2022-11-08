import React,{useState, useEffect} from 'react';
import './coreStyle.css';
import DefaultImage from './res/DefaultImage.jpg';
import DefaultCheckedIcon from './res/check.png';
import DefaultBg from './res/bg1.jpg';

//page intro header
export default function CoreModule(props)
{
    const Facilities = props.featuresItems?props.featuresItems:[
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
        <div 
            className='layers_widget_9-container'
            style={{
                backgroundImage: `url(${props.bgImage?props.bgImage:DefaultBg})`
            }}
            >
            <div className='layers_widget_9-container-left'>
                <div className='layers_widget_9-container-left-heading'>
                    <div className='layers_widget_9-container-left-heading-head'>
                        <span
                            style={{
                                fontFamily: props.headlineFont?props.headlineFont:'Arial',
                                fontSize: props.headlineSize?props.headlineSize:'1.1rem',
                                color: props.headlineColor?props.headlineColor:'red'
                            }}
                        >{props.headline}</span>
                    </div>
                    <div className='layers_widget_9-container-left-heading-main'>
                        <span
                            style={{
                                fontFamily: props.titleFont?props.titleFont:'Arial',
                                fontSize: props.titleSize?props.titleSize:'1.1rem',
                                color: props.titleColor?props.titleColor:'red'
                            }}
                        >{props.title}</span>
                    </div>
                </div>
                <div className='layers_widget_9-container-left-desc'>
                    <span
                        style={{
                            fontFamily: props.contentFont?props.contentFont:'Arial',
                            fontSize: props.contentSize?props.contentSize:'1.1rem',
                            color: props.contentColor?props.contentColor:'red'
                        }}
                    >{props.content}</span>
                </div>
                <div className='layers_widget_9-container-left-facilities'>
                    <div className='layers_widget_9-container-left-facilities-header'>
                        <span
                            style={{
                                fontFamily: props.featuresFont?props.featuresFont:'Arial',
                                fontSize: props.featuresSize?props.featuresSize:'1.1rem',
                                color: props.featuresColor?props.featuresColor:'red',
                                borderBottom: `2px solid ${props.underlineColor?props.underlineColor:'blue'}`
                            }}
                        >{props.features}</span>
                    </div>
                    <div className='layers_widget_9-container-left-facilities-items'>
                    {
                        Facilities.map((el)=>{
                            return <FacilityItem title={el} all={{...props}}/>
                        })
                    }
                    </div>
                </div>
            </div>
            <div className='layers_widget_9-container-right'>
                <div className='layers_widget_9-container-right-img'>
                    <img src={props.img1?props.img1:DefaultImage}/>
                </div>
                
                <div className='layers_widget_9-container-right-absolute'>
                    <img src={props.img2?props.img2:DefaultImage}/>
                </div>
            </div>
        </div>
    )
}


const FacilityItem = ({title, all})=>{
    return(
        <div className='layers_widget_9-container-left-facilities-item-el'>
            <img src={DefaultCheckedIcon}/>
            <span
                style={{
                    fontFamily: all.featuresItemsFont?all.featuresItemsFont:'Arial',
                    fontSize: all.featuresItemsSize?all.featuresItemsSize:'1.1rem',
                    color: all.featuresItemsColor?all.featuresItemsColor:'red'
                }}
            >{title}</span>
        </div>
    )
}
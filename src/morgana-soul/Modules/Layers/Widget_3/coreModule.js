import React,{useState, useEffect} from 'react';
import './coreStyle.css';
import Carousel from "react-elastic-carousel";
import DefaultImage from './res/DefaultImage.jpg';
import DefaultSearchIcon from './res/search.png';

// npm i react-elastic-carousel
// npm i styled-components

export default function CoreModule({})
{
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    ];

    return (
        <div className='layers_widget_3-container'>
                <Carousel breakPoints={breakPoints}>
                    <Item imageParam={DefaultImage}>1</Item>
                    <Item imageParam={DefaultImage}>1</Item>
                    <Item imageParam={DefaultImage}>1</Item>
                    <Item imageParam={DefaultImage}>1</Item>
                    <Item imageParam={DefaultImage}>1</Item>
                    <Item imageParam={DefaultImage}>1</Item>
                    <Item imageParam={DefaultImage}>1</Item>
                    <Item imageParam={DefaultImage}>1</Item>
                    <Item imageParam={DefaultImage}>1</Item>
                </Carousel>
        </div>
    )
}


const Item = ({imageParam})=>{
    return(
        <div 
            className='layers_widget_3-item'
            style={{
                backgroundImage: `url('${imageParam}')`
            }}
            >
        </div>
    )
}
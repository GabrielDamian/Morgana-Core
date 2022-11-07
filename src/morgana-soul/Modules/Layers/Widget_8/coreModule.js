import React,{useState, useEffect} from 'react';
import './coreStyle.css';
import DefaultImage from './res/DefaultImage.jpg';
import DefaultImage2 from './res/DefaultImage2.jpg';
import { useNavigate } from 'react-router-dom';


//page intro header
export default function CoreModule({
})
{
    const items = [
        {
            title: 'Vila Mare',
            link: '/vila-mare',
            bg1: DefaultImage,
            bg2: DefaultImage2,
            footers: [
                'aparatament 1',
                'aparatament 1',
            ],
            textHover: 'It is a  page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page edit'
        },
        {
            title: 'Vila Mica',
            link: '/vila-mica',
            bg1: DefaultImage2,
            bg2: DefaultImage,
            footers: [
                'aparatament 2',
                'aparatament 3',
            ],
            textHover: 'It is a long established fact that a reader of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page edit'
        },
    ]
    return (
        <div
            id="layers_widget_8-container" 
            className='layers_widget_8-container'>
            {
                items.map((el)=>{
                    return <Item {...el} />
                })
            }
           
        </div>
    )
}
const Item = (props)=>{
    
    const navigate = useNavigate();
    
    const handleRedirect = ()=>{
        navigate(props.link)
    }

    return(
        <div 
            onClick={handleRedirect}
            className='layers_widget_8-container-item'
            style={{
                backgroundImage: `url(${props.bg1})`
            }}
            >
                <div 
                    className='layers_widget_8-container-item-title'
                    >
                    <span>
                        {props.title}
                    </span>
                </div>
                <div className='layers_widget_8-container-item-desc'>
                    <span>
                        {props.textHover}
                    </span>
                    <br></br>
                    {
                        props.footers.map((el)=>{
                            return(
                                <>
                                    <span>-- {el} --</span>
                                </>
                            )
                        })
                    }
                </div>
        </div>
    )
}
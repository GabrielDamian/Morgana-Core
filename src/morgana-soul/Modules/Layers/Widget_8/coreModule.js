import React,{useState, useEffect} from 'react';
import './coreStyle.css';
import DefaultImage from './res/DefaultImage.jpg';
import DefaultImage2 from './res/DefaultImage2.jpg';
import { useNavigate } from 'react-router-dom';


//page intro header
export default function CoreModule(props)
{
    const defaultItems =props.items?props.items:[
        {
            title: 'Vila Mare',
            link: '/vila-mare',
            bg1: DefaultImage,
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
                defaultItems.map((el)=>{
                    return <Item el={{...el}} all={{...props}}/>
                })
            }
           
        </div>
    )
}
const Item = ({el,all})=>{
    
    const navigate = useNavigate();
    
    const handleRedirect = ()=>{
        navigate(el.link)
    }

    return(
        <div 
            onClick={handleRedirect}
            className='layers_widget_8-container-item'
            style={{
                '--layers_widget_8-hover-color': all.bgColorHover,
                backgroundImage: `url(${el.bg1})`
            }}
            >
                <div className='layers_widget_8-container-item-title'>
                    <span
                        style={{
                            fontSize: all.titleSize?all.titleSize:'1.1rem',
                            fontFamily: all.titleFont?all.titleFont:'Arial',
                            color: all.titleColor?all.titleColor:'black',
                            backgroundColor: all.titleBgColor?all.titleBgColor:'gray'
                        }}
                    >
                        {el.title}
                    </span>
                </div>
                <div className='layers_widget_8-container-item-desc'>
                    <span
                        style={{
                            fontSize: all.descSize?all.descSize:'1.1rem',
                            fontFamily: all.descFont?all.descFont:'Arial',
                            color: all.descColor?all.descColor:'black',
                        }}
                    >
                        {el.textHover}
                    </span>
                    <br></br>
                    {
                        el.footers.map((el)=>{
                            return(
                                <>
                                    <span
                                        style={{
                                            fontSize: all.descSize?all.descSize:'1.1rem',
                                            fontFamily: all.descFont?all.descFont:'Arial',
                                            color: all.descColor?all.descColor:'black',
                                        }}
                                    >-- {el} --</span>
                                </>
                            )
                        })
                    }
                </div>
        </div>
    )
}
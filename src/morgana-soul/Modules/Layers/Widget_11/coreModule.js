import React,{useState, useEffect} from 'react';
import './coreStyle.css';
import DefaultPhoneCall from './res/phone-call.png';
import DefaultBg from './res/DefaultBg.jpg';

//page intro header
export default function CoreModule({
    onlyMap
})
{
    useEffect(()=>{
        console.log("onlyMap:",onlyMap)
    },[])
    const DefaultItems = [
        {
            icon: DefaultPhoneCall,
            title: 'Numar de telefon',
            value: '+403524234234'
        },
        {
            icon: DefaultPhoneCall,
            title: 'Numar de telefon',
            value: '+403524234234'
        }
    ]
    return (
        <div 
            className='layers_widget_11-container'
            style={{
                backgroundImage: `url(${DefaultBg})`
            }}
            >
            {
                (onlyMap == true)  ? null :
                <div className='layers_widget_11-container-left'>
                <div className='layers_widget_11-container-left-headline'>
                    <span>Contact</span>
                </div>
                <div className='layers_widget_11-container-left-items'>
                {
                    DefaultItems.map((el)=>{
                        return(
                            <Item {...el}/>
                        )
                    })
                }
                </div>
                </div>
        }
            <div 
                className='layers_widget_11-container-right'
                style={{
                    width: (onlyMap == true)  ? '100%':null
                }}
                >
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44761.66255786637!2d25.494628687025898!3d45.47778233391919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b341820b34c309%3A0xd04b498d5f6d0aa0!2sVilele%20Col%C8%9Bii%20Morarului!5e0!3m2!1sro!2sro!4v1667737240635!5m2!1sro!2sro" 
                width="100%" 
                height="100%" 
                style={{border:0,outline: 'none'}}
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">

            </iframe>

            </div>
        </div>
    )
}


const Item = (props)=>{
    return(
        <div className='layers_widget_11-container-left-item-el'>
            <div className='layers_widget_11-container-left-item-el-top'>
                <img src={props.icon}/>
                <span>{props.title}</span>
            </div>
            <div className='layers_widget_11-container-left-item-el-bot'>
                <span>{props.value}</span>
            </div>
        </div>
    )
}
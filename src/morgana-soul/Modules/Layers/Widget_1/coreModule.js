import React,{useState, useEffect} from 'react';
import './coreStyle.css';
import DefaultImage from './res/DefaultImage.jpg';
import DefaultBackground from './res/DefaultBg.jpg';

export default function CoreModule(props)
{
    const Facilitati = props.items?props.items:[
        {
            title: 'Gratar',
            headline: 'bla bla',
            desc: 'more and more and more bla bla bla',
            bg: DefaultImage
        },
        {
            title: 'Gratar',
            headline: 'bla bla',
            desc: 'more and more and more bla bla bla',
            bg: DefaultImage
        },
        {
            title: 'Gratar',
            headline: 'bla bla',
            desc: 'more and more and more bla bla bla',
            bg: DefaultImage
        }
    ]

    return (
        <div 
            id="widget_1_ref"
            className='layers_widget_1-container'
            style={{
                backgroundImage: `url(${DefaultBackground})`
            }}
            >
                {
                    Facilitati.map((el)=>{
                        return(
                            <FlipItem data={el} props={props}/>
                        )
                    })
                }
        </div>
    )
}

const FlipItem = ({data,props})=>{
    return(
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <div className='flip-card-front-absolute'>
                        <span 
                            className='flip-card-front-absolute-title'
                            style={{
                                color: props.titleColor?props.titleColor:'#5e646c',
                                backgroundColor: props.titleBgColor?props.titleBgColor:'#ffffff80;',
                                fontFamily: props.titleFont?props.titleFont:'Arial',
                                fontSize: props.titleSize?props.titleSize:'1.7rem'
                            }}
                            >{data.title}</span>
                        <span 
                            className='flip-card-front-absolute-desc'
                            style={{
                                color: props.headlineColor?props.headlineColor:'#5e646c',
                                backgroundColor: props.headlineBgColor?props.headlineBgColor:'#ffffff80;',
                                fontFamily: props.headlineFont?props.headlineFont:'Arial',
                                fontSize: props.headlineSize?props.headlineSize:'1.7rem'
                            }}
                            >{data.desc}</span>
                    </div>
                    <img src={data.bg} alt="Avatar" />
                </div>

                <div
                    style={{
                        backgroundColor: props.bgColorBack?props.bgColorBack:'red'
                    }}  
                    className="flip-card-back">
                    <div className="flip-card-back-header">
                        <span 
                            style={{
                                color: props.titleColor?props.titleColor:'#5e646c',
                                backgroundColor: props.titleBgColor?props.titleBgColor:'#ffffff80;',
                                fontFamily: props.titleFont?props.titleFont:'Arial',
                                fontSize: props.titleSize?props.titleSize:'1.7rem'
                            }}
                            className="flip-card-back-header-title">{data.title}</span>
                        <span
                            style={{
                                color: props.headlineColor?props.headlineColor:'#5e646c',
                                backgroundColor: props.headlineBgColor?props.headlineBgColor:'#ffffff80;',
                                fontFamily: props.headlineFont?props.headlineFont:'Arial',
                                fontSize: props.headlineSize?props.headlineSize:'1.7rem'
                            }}
                            className="flip-card-back-header-desc">{data.headline}</span>
                    </div>
                    <div className="flip-card-back-content">
                        <span
                            style={{
                                color: props.descColor?props.descColor:'blue',
                                fontFamily: props.descFont?props.descFont:'Arial'
                            }}
                        >
                            {data.desc}
                        </span>
                        <props.button />
                    </div>
                </div>
            </div>
        </div>
    )
}

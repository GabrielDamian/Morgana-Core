import React,{useState, useEffect} from 'react';
import './coreStyle.css';
import DefaultImage from './res/DefaultImage.jpg';
import DefaultBackground from './res/DefaultBg.jpg';

export default function CoreModule({
    button:Button
})
{
    const Facilitati = [
        {
            title: 'Gratar',
            headline: 'bla bla',
            desc: 'more and more and more bla bla bla'
        },
        {
            title: 'Gratar',
            headline: 'bla bla',
            desc: 'more and more and more bla bla bla'
        },
        {
            title: 'Gratar',
            headline: 'bla bla',
            desc: 'more and more and more bla bla bla'
        }
    ]

    return (
        <div 
            className='layers_widget_1-container'
            style={{
                backgroundImage: `url(${DefaultBackground})`
            }}
            >
                {
                    Facilitati.map((el)=>{
                        return(
                            <FlipItem button={Button} title={el.title} headline={el.headline} desc={el.desc} />
                        )
                    })
                }
        </div>
    )
}

const FlipItem = ({button:Button, bgImage,title,headline,desc})=>{
    return(
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <div className='flip-card-front-absolute'>
                        <span className='flip-card-front-absolute-title'>{title}</span>
                        <span className='flip-card-front-absolute-desc'>{desc}</span>
                    </div>
                    <img src={DefaultImage} alt="Avatar" />
                </div>

                <div className="flip-card-back">
                    <div className="flip-card-back-header">
                        <span className="flip-card-back-header-title">{title}</span>
                        <span className="flip-card-back-header-desc">{headline}</span>
                    </div>
                    <div className="flip-card-back-content">
                        <span>
                            {desc}
                        </span>
                        <Button />
                    </div>
                </div>
            </div>
        </div>
    )
}

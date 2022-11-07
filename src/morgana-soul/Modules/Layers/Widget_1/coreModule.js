import React,{useState, useEffect} from 'react';
import './coreStyle.css';
import DefaultImage from './res/DefaultImage.jpg';

export default function CoreModule({
    button:Button
})
{
    return (
        <div className='layers_widget_1-container'>
            <FlipItem button={Button} title="PENSIUNE" desc="CAMERE"/>
            <FlipItem button={Button} title="PENSIUNE" desc="CAMERE"/>
            <FlipItem button={Button} title="PENSIUNE" desc="CAMERE"/>
            {/* <div className="flip-card" style={{width:'300px',height:'300px'}}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <div className='flip-card-front-absolute'>
                        ceva
                    </div>
                    <img src={DefaultImage} alt="Avatar" style={{width:'300px',height:'300px'}}/>
                </div>
                <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
                </div>
            </div>
            </div> */}
            {/* <div 
                className='layers_widget_1-container-item'
                style={{
                    backgroundImage: `url('${DefaultImage}')`
                }}
                >
                <div className='layers_widget_1-container-item-title'>
                    <span>Pensiune</span>
                </div>
                <div className='layers_widget_1-container-item-headline'>
                    <span>Restaurant</span>
                </div>
            </div>
            <div 
                className='layers_widget_1-container-item'
                style={{
                    backgroundImage: `url('${DefaultImage}')`
                }}
                >
                <div className='layers_widget_1-container-item-title'>
                    <span>Pensiune</span>
                </div>
                <div className='layers_widget_1-container-item-headline'>
                    <span>Restaurant</span>
                </div>
            </div>
            <div 
                className='layers_widget_1-container-item'
                style={{
                    backgroundImage: `url('${DefaultImage}')`
                }}
                >
                <div className='layers_widget_1-container-item-title'>
                    <span>Pensiune</span>
                </div>
                <div className='layers_widget_1-container-item-headline'>
                    <span>Restaurant</span>
                </div>
            </div> */}
        </div>
    )
}

const FlipItem = ({button:Button, bgImage,title,desc})=>{
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
                        <span className="flip-card-back-header-desc">{desc}</span>
                    </div>
                    <div className="flip-card-back-content">
                        <span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        </span>
                        <Button />
                        {/* {
                            Button 
                            ? 
                            <Button />
                            :
                            (
                                <button>
                                    Afla mai multe
                                </button>
                            )
                        } */}


                    </div>
                </div>
            </div>
        </div>
    )
}

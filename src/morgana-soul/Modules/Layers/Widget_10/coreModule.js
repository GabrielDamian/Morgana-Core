import React,{useState, useEffect} from 'react';
import './coreStyle.css';
import DefaultImage from './res/DefaultImage.jpg';

//page intro header
export default function CoreModule({
    title
})
{
    return (
        <div className='layers_widget_10-container'>
            <div className='layers_widget_10-container-left'>
                <div className='layers_widget_10-container-left-head'>
                    <div className='layers_widget_10-container-left-head-headline'>
                        <span>[Cool headline here]</span>
                    </div>
                    <div className='layers_widget_10-container-left-head-title'>
                        <span>{title}</span>
                    </div>
                    <div className='layers_widget_10-container-left-head-separator'>

                    </div>
                </div>
                <div className='layers_widget_10-container-left-content'>
                    <span>
                        Sezonul cald se petrece afară, alături de toți cei dragi. Gândește-te cum ar arăta weekendurile in familie, savurând mancarea preferată, preparată chiar pe terasă.
                        In acest caz ți-ar prinde bine o zonă special amenajată pentru grătar și grill.
                    </span>
                </div>
            </div>
            <div className='layers_widget_10-container-right'>
                <div className='layers_widget_10-container-right-img'>
                    <img src={DefaultImage} />
                </div>
                <div className='layers_widget_10-container-right-absolute'>
                    <img src={DefaultImage} />
                </div>
            </div>
        </div>
    )
}

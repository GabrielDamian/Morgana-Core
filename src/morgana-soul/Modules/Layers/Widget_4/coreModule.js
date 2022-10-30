import React,{useState, useEffect} from 'react';
import './coreStyle.css';
import DefaultRestaurantIcon from './res/restaurant.png';
import DefaultFacilitatiIcon from './res/facilitatiDefault.png';
import DefaultImage from './res/DefaultImage.jpg';
import hexToCSSFilters from '../../../core/utils/hexToCSSFilters';


export default function CoreModule({})
{
    let defaultItems = [
        {
            icon: DefaultRestaurantIcon,
            title: 'Restaurant',
            desc: 'Camerele sunt dotate cu tot ce trebuie ca sa va asiguram confortul necesar.'
        },
        {
            icon: DefaultRestaurantIcon,
            title: 'Restaurant',
            desc: 'Camerele sunt dotate cu tot ce trebuie ca sa va asiguram confortul necesar.'
        },
        {
            icon: DefaultRestaurantIcon,
            title: 'Restaurant',
            desc: 'Camerele sunt dotate cu tot ce trebuie ca sa va asiguram confortul necesar.'
        },
        {
            icon: DefaultRestaurantIcon,
            title: 'Restaurant',
            desc: 'Camerele sunt dotate cu tot ce trebuie ca sa va asiguram confortul necesar.'
        }
    ]
    return (
       <div 
            className='layers_widget_4-container'
            style={{
                backgroundImage: `url(${DefaultImage})`
            }}
            >
           <div className='layers_widget_4-container-title'>
            <img src={DefaultFacilitatiIcon} alt="icon"/>
                <span>Facilitati</span>
               <div className='layers_widget_4-container-title-separator'>

               </div>

           </div>
           <div className='layers_widget_4-container-items'>
            {defaultItems.map(el=><Item icon={el.icon} title={el.title} desc={el.desc} iconsColor="a68554"/>)}
           </div>
       </div>
    )
}

const Item = ({icon, title, desc,iconsColor})=>{
    return(
        <div className='layers_widget_4-container-item'>
            <div className='layers_widget_4-container-item-icon'>
                <img src={icon} alt="icon" style={{filter: iconsColor?`${hexToCSSFilters(iconsColor)}`:`none`}}/>
            </div>
            <div className='layers_widget_4-container-item-title'>
                <span>{title}</span>
            </div>
            <div className='layers_widget_4-container-item-desc'>
                <span>{desc}</span>
            </div>

        </div>
    )
}

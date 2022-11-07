import React,{useState, useEffect} from 'react';
import './coreStyle.css';
import DefaultRestaurantIcon from './res/restaurant.png';
import DefaultFacilitatiIcon from './res/facilitatiDefault.png';
import DefaultImage from './res/DefaultImage.jpg';
import hexToCSSFilters from '../../../core/utils/hexToCSSFilters';


export default function CoreModule({})
{
    const [makeVisible, setMakeVisible] = useState('');

    useEffect(()=>{
        window.addEventListener('scroll', function() {
            try{
                var element = document.querySelector('#layers_widget_4-container');
                var position = element.getBoundingClientRect();
            
                // checking for partial visibility
                if(position.top < window.innerHeight && position.bottom >= 0) {
                    if(makeVisible == '')
                    {
                        setMakeVisible('layers_widget_4-container-item-make-visible')
                    }
                }
            }
            catch(err)
            {
                
            }
           
        });
    },[])

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
            id="layers_widget_4-container"
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
            {defaultItems.map((el,index)=><Item icon={el.icon} title={el.title} desc={el.desc} iconsColor="a68554" animClass={makeVisible} delay={index*0.4}/>)}
           </div>
       </div>
    )
}

const Item = ({icon, title, desc,iconsColor,animClass,delay})=>{
    return(
        <div
            style={{animationDelay: `${delay}s`}} 
            className={`layers_widget_4-container-item ${animClass}`}>
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

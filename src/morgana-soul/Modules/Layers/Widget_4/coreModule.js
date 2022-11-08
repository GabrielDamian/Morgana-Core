import React,{useState, useEffect} from 'react';
import './coreStyle.css';
import DefaultRestaurantIcon from './res/restaurant.png';
import DefaultFacilitatiIcon from './res/facilitatiDefault.png';
import DefaultImage from './res/DefaultImage.jpg';
import hexToCSSFilters from '../../../core/utils/hexToCSSFilters';


export default function CoreModule({
    title,
    titleSize,
    titleFont,
    titleColor,

    topIcon,
    topIconColor,
    separatorColor,

    items,
    itemsIconColor,

    itemsTitleFont,
    itemsTitleColor,
    itemsTitleSize,

    itemsDescColor,
    itemsDescFont,
    itemsDescSize,


    bgImage
})
{
    const [makeVisible, setMakeVisible] = useState('');

    useEffect(()=>{
        console.log("topIcon:",topIcon)
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

    let defaultItems = items?items:[
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
                backgroundImage: `url(${bgImage?bgImage:DefaultImage})`
            }}
            >
           <div className='layers_widget_4-container-title'>
            <img src={topIcon?topIcon:DefaultFacilitatiIcon} alt="icon" style={{filter: topIconColor?`${hexToCSSFilters(topIconColor)}`:`none`}}/>
                <span
                    style={{
                        fontSize: titleSize?titleSize:'1.9rem',
                        fontFamily: titleFont?titleFont:'Arial',
                        color: titleColor?titleColor:'white'
                    }}
                >{title}</span>
               <div 
                    className='layers_widget_4-container-title-separator'
                    style={{
                        backgroundColor: separatorColor?separatorColor:'white'
                    }}    
                >
               </div>

           </div>
           <div className='layers_widget_4-container-items'>
            {defaultItems.map((el,index)=>
            {
                return <Item 
                            icon={el.icon} 
                            title={el.title}
                            desc={el.desc} 
                            iconsColor={itemsIconColor} 
                            animClass={makeVisible} 
                            delay={index*0.4}

                            itemsTitleFont={itemsTitleFont}
                            itemsTitleColor={itemsTitleColor}
                            itemsTitleSize={itemsTitleSize}
                        
                            itemsDescColor={itemsDescColor}
                            itemsDescFont={itemsDescFont}
                            itemsDescSize={itemsDescSize}
                            />
            }
                
            
            )}
           </div>
       </div>
    )
}

const Item = ({
        icon, 
        title, 
        desc,
        iconsColor,
        animClass,
        delay,

        itemsTitleFont,
        itemsTitleColor,
        itemsTitleSize,
    
        itemsDescColor,
        itemsDescFont,
        itemsDescSize,
    
    })=>{

        useEffect(()=>{
            console.log("deeeep:",itemsDescFont)
        },[])
    return(
        <div
            style={{animationDelay: `${delay}s`}} 
            className={`layers_widget_4-container-item ${animClass}`}>
            <div className='layers_widget_4-container-item-icon'>
                <img src={icon} alt="icon" style={{filter: iconsColor?`${hexToCSSFilters(iconsColor)}`:`none`}}/>
            </div>
            <div className='layers_widget_4-container-item-title'>
                <span
                    style={{
                        fontFamily: itemsTitleFont?itemsTitleFont:'Arial',
                        color: itemsTitleColor?itemsTitleColor:'white',
                        fontSize: itemsTitleSize?itemsTitleSize:'1.9rem'
                    }}
                >{title}</span>
            </div>
            <div className='layers_widget_4-container-item-desc'>
                <span
                    style={{
                        color: itemsDescColor?itemsDescColor:'white',
                        fontFamily: itemsDescFont?itemsDescFont:'Arial',
                        fontSize: itemsDescSize?itemsDescSize:'1.2rem'
                    }}
                >{desc}</span>
            </div>

        </div>
    )
}

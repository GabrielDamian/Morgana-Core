import React,{useState, useEffect} from 'react';
import './coreStyle.css';
import DefaultImage from './res/DefaultImage.jpg';
import DefaultImage2 from './res/DefaultImage2.jpg';
import IconArrowLeft from './res/left-arrow.png';
import IconArrowRight from './res/right-arrow.png';


//page intro header
export default function CoreModule({
    title,
    slides
})
{
    const defaultInterests = slides ? slides : [
        {
            title:  'puncte de interest 1',
            desc: 'desc 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
            img1: DefaultImage,
            img2: DefaultImage2
        },
        {
            title:  'puncte de interest 2',
            desc: 'desc 2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
            img1: DefaultImage2,
            img2: DefaultImage
        }
    ]

    const [index, setIndex] = useState(0);

    const handleArrowClick = (direction)=>{
        if(direction == 'right')
        {
            if(index == defaultInterests.length - 1)
            {
                //reset index
                setIndex(0);
            }
            else 
            {
                setIndex(prev=>prev+1)
            }
        }
        else if(direction == 'left') 
        {
            if(index == 0)
            {
                setIndex(defaultInterests.length-1)
            }
            else 
            {
                setIndex(prev=>prev-1)
            }
        }
        
    }
    return (
        <div className='layers_widget_7-container'>
            <div className='layers_widget_7-container-left'>
                <img className="layers_widget_7-container-left-img1" src={defaultInterests[index]['img1']} alt="atractie"/>
                <img className="layers_widget_7-container-left-img2" src={defaultInterests[index]['img2']} alt="atractie"/>
            </div>
            <div className='layers_widget_7-container-right'>
                <div className='layers_widget_7-container-right-title'>
                    <div className='layers_widget_7-container-right-title-header'>
                        <span>{`[Ce Vedem la Bran]`}</span>
                    </div>
                    <div className='layers_widget_7-container-right-title-raw'>
                        <span>{defaultInterests[index]['title']}</span>
                        <br></br>
                        <span>...........</span>
                    </div>
                </div>
                <div className='layers_widget_7-container-right-content'>
                    <span>
                    {
                        defaultInterests[index]['desc']
                    }
                    </span>
                </div>
                <div className='layers_widget_7-container-right-btns'>
                    <button>
                        <img onClick={()=>handleArrowClick('left')} src={IconArrowLeft} alt="arrow"/>
                    </button>
                    <button>
                        <img onClick={()=>handleArrowClick('right')} src={IconArrowRight} alt="arrow"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

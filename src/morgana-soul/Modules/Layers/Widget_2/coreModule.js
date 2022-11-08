import React,{useState, useEffect} from 'react';
import './coreStyle.css';
import DefaultImg1 from './res/default-1.jpg';
import DefaultImg2 from './res/default-2.jpg';
import DefaultImg2Fade from './res/default-2-fade.png';
import DefaultBgLeft from './res/defaultBgLeft.jpg';


export default function CoreModule({
    title,
    titleSize,
    titleFont,

    desc,
    descSize,
    descFont,

    img1,
    img2,

    bgLeft,
    bgRight,

    invertOrder
})
{
    const [makeVisible,setMakeVisible] = useState({
        left: '',
        right: ''
    })
    useEffect(()=>{
        window.addEventListener('scroll', function() {
            try{
                var element = document.querySelector('#layers_widget_2-container-left');
                var position = element.getBoundingClientRect();
            
                // checking for partial visibility
                if(position.top < window.innerHeight && position.bottom >= 0) {
                    if(makeVisible.left == '' && makeVisible.right =='')
                    {
                        setMakeVisible({
                            left: 'layers_widget_2-container-left-make-visible',
                            right: 'layers_widget_2-container-right-make-visible '
                        })
                    }
                }
            }
            catch(err)
            {

            }
        });
    },[])
    return (
        <div className='layers_widget_2-container'>
            <div 
                id="layers_widget_2-container-left" 
                className={`layers_widget_2-container-left ${makeVisible.left}`}
                style={{
                    backgroundImage: `url('${bgLeft?bgLeft:DefaultBgLeft}')`
                }}
                >
                <img className='layers_widget_2-container-left-img1' src={img1?img1:DefaultImg2} />
                <img className='layers_widget_2-container-left-img2' src={img2?img2:DefaultImg1} />
            </div>

            <div className={`layers_widget_2-container-right ${makeVisible.right}`}
                style={{
                    backgroundImage: `url('${bgRight?bgRight:DefaultImg2Fade}')`
                }}
                >
                <div className='layers_widget_2-container-right-title'>
                    <span
                        style={{
                            fontSize: titleSize?titleSize:'1.9rem',
                            fontFamily: titleFont?titleFont:'Arial'
                        }}
                    >{title}</span>
                </div>
                <div className='layers_widget_2-container-right-content'>
                    {
                        desc.map((el)=>{
                            return(
                                <>
                                    <span
                                        style={{
                                            fontFamily: descFont?descFont:'Arial',
                                            fontSize: descSize?descSize:'1.2rem'
                                        }}
                                    >
                                        {el}
                                    </span>
                                    <br/>
                                    <br/>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}



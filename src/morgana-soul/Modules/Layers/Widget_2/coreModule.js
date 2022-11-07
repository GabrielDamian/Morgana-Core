import React,{useState, useEffect} from 'react';
import './coreStyle.css';
import DefaultImg1 from './res/default-1.jpg';
import DefaultImg2 from './res/default-2.jpg';
import DefaultImg2Fade from './res/default-2-fade.png';
import DefaultBgLeft from './res/defaultBgLeft.jpg';


export default function CoreModule({
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
                    backgroundImage: `url('${DefaultBgLeft}')`
                }}
                >
                <img className='layers_widget_2-container-left-img1' src={DefaultImg2} />
                <img className='layers_widget_2-container-left-img2' src={DefaultImg1} />
            </div>

            <div className={`layers_widget_2-container-right ${makeVisible.right}`}
                style={{
                    backgroundImage: `url('${DefaultImg2Fade}')`
                }}
                >
                <div className='layers_widget_2-container-right-title'>
                    <span>WELCOME</span>
                </div>
                <div className='layers_widget_2-container-right-content'>
                    <span>
                        Lorem Ipsum is simply dummy teen the industry's standard dummy text ever since the 
                    <br/>
                    <br/>
                        Lorem Ipsum is sindustry. Loremard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                    <br/>
                    <br/>
                        scrambled it to make aive centuries, but also the leap into electronic typesetting.
                    </span>
                </div>
            </div>

        </div>
    )
}



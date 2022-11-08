import React,{useState, useEffect,useLayoutEffect} from 'react';
import './coreStyle.css';
import DefaultImage from './res/DefaultImage.jpg';
import DefaultBg from './res/bg.jpg';
//page intro header
{
    // title,
    // headline,
    // text,
    // img1,
    // img2,
    // invertOrder //boolean
}
export default function CoreModule(props)
{
    const [ignoreInvertOrder, setIgnoreInvertOrder] = useState(false);
    const mobileBreakpoint = 700;

    useLayoutEffect(() => {
        
        function updateSize() {
          console.log("new width:",window.innerWidth);
            if(window.innerWidth < mobileBreakpoint)
            {
                setIgnoreInvertOrder(true)
            }
            else 
            {
                setIgnoreInvertOrder(false);
            }
        }

        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
      }, []);
      
      const decideOrder = (shouldIgnore, props)=>{
        if(props.invertOrder && (shouldIgnore == false))
        {
            return(
                <>
                        <Container2 {...props}/>
                        <Container1 {...props}/>
                    </>
            )
        }
        else 
        {
            return(
                <>
                    <Container1 {...props}/>
                    <Container2 {...props}/>
                </>
            )
        }
      }
    return (
        <div 
            className='layers_widget_10-container'
            style={{
                backgroundImage: `url('${DefaultBg}')`
            }}
            >
            {
                decideOrder(ignoreInvertOrder, props)
            }
        </div>
    )
}
const Container1 = ({
    title,
    headline,
    text,
})=>{
    useEffect(()=>{
        console.log("title check:", title);
    },[title])
    return(
        <div className='layers_widget_10-container-left'>
        <div className='layers_widget_10-container-left-head'>
            <div className='layers_widget_10-container-left-head-headline'>
                <span>[{headline}]</span>
            </div>
            <div className='layers_widget_10-container-left-head-title'>
                <span>{title}</span>
            </div>
            <div className='layers_widget_10-container-left-head-separator'>

            </div>
        </div>
        <div className='layers_widget_10-container-left-content'>
            <span>{text}</span>
        </div>
    </div>
    )

}
const Container2 = ({
    img1,
    img2,
})=>{
    return(
<div className='layers_widget_10-container-right'>
                <div className='layers_widget_10-container-right-img'>
                    <img src={img1?img1:DefaultImage} />
                </div>
                <div className='layers_widget_10-container-right-absolute'>
                    <img src={img2?img2:DefaultImage} />
                </div>
            </div>
    )
}


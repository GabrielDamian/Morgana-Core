import React,{useState, useEffect,useLayoutEffect} from 'react';
import './coreStyle.css';
import DefaultImage from './res/DefaultImage.jpg';
import DefaultBg from './res/bg.jpg';
//page intro header

export default function CoreModule(props)
{
    const [ignoreInvertOrder, setIgnoreInvertOrder] = useState(false);
    const mobileBreakpoint = 700;

    useLayoutEffect(() => {
        
        function updateSize() {
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
                backgroundImage: `url('${props.bgImg?props.bgImg:DefaultBg}')`
            }}
            >
            {
                decideOrder(ignoreInvertOrder, props)
            }
        </div>
    )
}
const Container1 = (props)=>{
    return(
        <div className='layers_widget_10-container-left'>
        <div className='layers_widget_10-container-left-head'>
            <div className='layers_widget_10-container-left-head-headline'>
                <span
                    style={{
                        fontFamily: props.headlineFont?props.headlineFont:'Arial',
                        fontSize: props.headlineSize?props.headlineSize:'1.7rem'
                    }}
                >{props.headline}</span>
            </div>
            <div className='layers_widget_10-container-left-head-title'>
                <span
                    style={{
                        fontFamily: props.titleFont?props.titleFont:'Arial',
                        fontSize: props.titleFontSize?props.titleFontSize:'1.7rem',
                        color: props.titleColor?props.titleColor:'red'
                    }}
                >{props.title}</span>
            </div>
            <div 
                className='layers_widget_10-container-left-head-separator'
                style={{
                    backgroundColor: props.undelineBorderColor?props.undelineBorderColor:'red'
                }}
                >

            </div>
        </div>
        <div className='layers_widget_10-container-left-content'>
            <span
                style={{
                    fontFamily: props.contentFont?props.contentFont:'Arial',
                    fontSize: props.contentSize?props.contentSize:'1.7rem',
                    color: props.contentColor?props.contentColor:'red'
                }}
            >{props.text}</span>
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


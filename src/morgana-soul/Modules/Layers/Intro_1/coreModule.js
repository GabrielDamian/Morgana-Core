import React,{useState, useEffect} from 'react';
import './coreStyle.css';
import DefaultBg from './res/DefaultBg.jpg';
import DefaultBg2 from './res/DefaultBg-2.jpg';
import DefaultBg3 from './res/DefaultBg-3.jpg';
import DefaultLogoImport from './res/DefaultLogo.png';


export default function CoreModule({
    slides,
    logoImg,
    titleFont,
    headlineFont,
    button:Button
})
{
    useEffect(()=>{
        setTimeout(()=>{
            window.scrollTo(0,0);
        },200)
    },[])

    let DefaultLogo = logoImg ? logoImg : DefaultLogoImport;
    let defaultSlides = slides ? slides: [
        {
            bg: DefaultBg,
            top: 'Pensiunea la Costel 1',
            bot: 'coold headline here 1'
        },
        {
            bg: DefaultBg2,
            top: 'asd dasd asdas dad',
            bot: ' ded d2d dasd ada'
        },
        {
            bg: DefaultBg3,
            top: ' dfgdfg dfg dgf dg fgd',
            bot: 'd asfsgfgdfsffsf'
        },
    ]

    const [slideIndex, setSlideIndex] = useState(0);
    useEffect(()=>{
    },[slideIndex])

    const changeSlide = ()=>{
        setSlideIndex((prev)=>{
            if(prev === defaultSlides.length-1)
            {
                return 0
            }
            else 
            {
                return prev+1
            }
        })
    }
    
    useEffect(()=>{
        //reveal element
        let revealElementInterval = undefined
        revealElementInterval = setInterval(()=>{
            setRevealHideSwitch('layers_intro_1-reveal-element')
        },6000) 
        
        return ()=>clearInterval(revealElementInterval)
    },[])

    useEffect(()=>{
        //hide element
        let hideElementInterval = undefined;
        setTimeout(()=>{
            hideElementInterval = setInterval(()=>{
                setRevealHideSwitch('layers_intro_1-hide-element')
            },6000)
        }, 4500) 
        
        return ()=>clearInterval(hideElementInterval)
    },[])

    useEffect(()=>{
        //change elements
        let setIntervalSlide = undefined;
        
        setTimeout(()=>{
            setIntervalSlide = setInterval(()=>{
                changeSlide();
            },6000)
        },5500)
 
        return () => clearInterval(setIntervalSlide);
    },[])
    
    const [revealHideSwitch, setRevealHideSwitch] = useState('layers_intro_1-reveal-element');

    return (
        <div
            style={{
                backgroundImage: `url(${defaultSlides[slideIndex].bg})`
            }}
            className='layers_intro_1-container'
        >
            <div className='layers_intro_1-container-logo'>
                <img src={DefaultLogo} alt="logo-intro"/>
            </div>
            <div className='layers_intro_1-container-logo-text'>
                <h1 class={`layers_intro_1-home-title ${revealHideSwitch}`}>
                  <span className='layers_intro_1-home-title-top' style={{fontFamily: `${titleFont?titleFont:''}`}}>{defaultSlides[slideIndex].top}</span>
                  <span className='layers_intro_1-home-title-bot' style={{fontFamily: `${headlineFont?headlineFont:''}`}}>{defaultSlides[slideIndex].bot}</span>
                </h1>
            </div>
            <Button />
        </div>
    )
}

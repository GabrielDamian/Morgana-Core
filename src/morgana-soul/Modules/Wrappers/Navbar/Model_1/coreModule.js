import React,{useState, useEffect} from 'react';
import './coreStyle.css';
import MapPinIconDefault from './res/maps-and-flags.svg';
import PhoneIconDefault from './res/phone-call.svg';
import LogoTemplate from './res/logo-template.png';
import { useLocation } from 'react-router-dom'

import hexToCSSFilters from '../../../../core/utils/hexToCSSFilters';
import {
    Link
  } from "react-router-dom";

export default function CoreModule({
    mapIcon,
    locationName,

    phoneIcon,
    phoneName,
    
    iconsColor,
    
    primaryFont,
    secondaryFont,

    fontColor,
    fontColorOnScroll,

    bgFirstColor,
    bgColorOnScroll,
    
    borderItemsHover,
    hoverTextColor,

    //
    links,
    logo,
    hoverAnim,
    borderBottom,
    
    containerPadding,
    logoHeight,
})
{
    const location = useLocation();
    useEffect(()=>{
        console.log("location updte:",location)
        setBurgerActive(false);
    },[location])

    useEffect(()=>{
        console.log("links:",links);
    },[])
    const [bgColorState, setBgColorState] = useState(bgFirstColor);
    useEffect(()=>{
        let checkTrigger = ()=>{
            let trigger = 100
            
            if(window.scrollY > trigger)
            {
                setBgColorState(bgColorOnScroll)
            }
            else if(window.scrollY < trigger) 
            {
                setBgColorState(bgFirstColor)
            }
        }
        let bgTrigger = window.addEventListener('scroll', checkTrigger);

        return window.removeEventListener('scroll',bgTrigger)

    },[])


    const decideBeforeAnimation = ()=>{
        switch(hoverAnim)
        {
            case 1:
                return 'navbar_model_1_anim_1'
            case 2:
                return 'navbar_model_1_anim_2'
            case 3:
                return 'navbar_model_1_anim_3'
            case 4:
                return 'navbar_model_1_anim_4'
            case 5:
                return 'navbar_model_1_anim_5'
            case 6:
                return 'navbar_model_1_anim_6'
            case 7:
                return 'navbar_model_1_anim_7'
            case 8:
                return 'navbar_model_1_anim_8'
            default: 
                return 'navbar_model_1_anim_1'
        }
    }

    const [burgetActive, setBurgerActive] = useState(false);

    let internStyle={
        btnLink:{
            color: fontColor?(bgColorState==bgFirstColor ? fontColor:fontColorOnScroll):'white'
        },
        btnMobileLink:{
            color: fontColor?(bgColorState==bgFirstColor ? fontColor:fontColorOnScroll):'white',
            transition:'all 0.5s ease',
            width: burgetActive ?'auto':'0px',
            padding:burgetActive ? '20px' :'0px',
            fontSize:'2.5rem',
            textDecoration: 'none',
            overflow:'hidden'
        },
        phoneLocationSpan:{
            fontFamily: secondaryFont?secondaryFont:'none',
            color: fontColor?(bgColorState==bgFirstColor ? fontColor:fontColorOnScroll):'white'
        }

    }
    return(
        <>
        <div className='navbar_model_1-container navbar_model_1-underline-option ' 
            style={{ 
                backgroundColor: bgColorState,
                '--navbar_model_1-before-color': borderItemsHover,
                '--navbar_model_1-link-text-color': fontColor?(bgColorState==bgFirstColor ? fontColor:fontColorOnScroll):'white',
                '--navbar_model_1-hover-text-color': hoverTextColor,
                borderBottom: borderBottom?`2px solid ${borderBottom}`:'none',
                padding: containerPadding ?containerPadding:'none'
                }}>
            <div className='navbar_model_1-container-location-and-phone'>
                <img src={mapIcon ? mapIcon : MapPinIconDefault} style={{filter: iconsColor?`${hexToCSSFilters(iconsColor)}`:`none`}} />
                <span style={internStyle.phoneLocationSpan} >{locationName}</span>
            </div>
            <div className='navbar_model_1-container-center'
                 style={{
                    fontFamily: primaryFont ? primaryFont:'none',
                 }}
             >
                <div className={`navbar_model_1-container-center-link-container ${decideBeforeAnimation()}`}>
                    {
                        links.left.map((el)=>{
                            return(
                                <Link to={el.ref}>{el.name}</Link>
                            )
                        })
                    }
                </div>
                <div className='navbar_model_1-container-center-logo'>
                    <img src={logo?logo:LogoTemplate} alt="logo" style={{height: logoHeight ? logoHeight :'60px'}}/>
                </div>
                <div className={`navbar_model_1-container-center-link-container ${decideBeforeAnimation()}`}>
                    {
                        links.right.map((el)=>{
                            return(
                                <Link to={el.ref}>{el.name}</Link>
                            )
                        })
                    }
                </div>
            </div>
            <div className='navbar_model_1-container-location-and-phone'>
                <img src={phoneIcon ? phoneIcon : PhoneIconDefault} style={{filter: iconsColor?`${hexToCSSFilters(iconsColor)}`:`none`}} />
                <span style={internStyle.phoneLocationSpan} >{phoneName}</span>
            </div>
        </div>
        <div className='navbar_model_1-container-mobile' style={{backgroundColor: bgColorState}}>
            <div className='navbar_model_1-container-mobile-logo'>
                <img
                    src={logo?logo:LogoTemplate} alt="logo" style={{height: logoHeight ? logoHeight :'60px'}}/>
            </div>
            <div 
                onClick={()=>setBurgerActive((prev)=>!prev)} 
                className={`navbar_model_1-container-mobile-burger ${burgetActive ? 'navbar_model_1-container-mobile-burger-active':''}`}>
                <span id="navbar_model_1_burger_1"></span>
                <span id="navbar_model_1_burger_2"></span>
                <span id="navbar_model_1_burger_3"></span>
            </div>

            <div 
                style={{backgroundColor: bgColorState}}
                className={`navbar_model_1-container-mobile-absolute-container ${burgetActive ? 'navbar_model_1-container-mobile-absolute-container-active':''}`}>
                <div className='navbar_model_1-container-mobile-absolute-container-top'>
                {
                    links.left.map((item)=>{
                        return(
                            <div className='navbar_model_1-container-mobile-absolute-container-item'>
                                <Link to={item.ref} style={{...internStyle.btnMobileLink }}>{item.name}</Link>
                            </div>
                        )
                    })
                }
                {
                    links.right.map((item)=>{
                        return(
                            <div className='navbar_model_1-container-mobile-absolute-container-item'>
                                <Link to={item.ref} style={{...internStyle.btnMobileLink }}>{item.name}</Link>
                            </div>
                        )
                    })
                }

                </div>
                <div className='navbar_model_1-container-mobile-absolute-container-bot'>
                    <img src={phoneIcon ? phoneIcon : PhoneIconDefault} style={{filter: iconsColor?`${hexToCSSFilters(iconsColor)}`:`none`}} />
                    <span style={internStyle.phoneLocationSpan} >{phoneName}</span>
                </div>
                
                
            </div>
        </div>
        </>
        
    )
}
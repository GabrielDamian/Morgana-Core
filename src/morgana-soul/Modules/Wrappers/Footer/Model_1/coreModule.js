import React,{useState, useEffect} from 'react';
import './coreStyle.css';
import DefaultLogo from './res/defaultLogo.png';
import DefaultBgImage from './res/defaultBg.jpg';
import DefaultEmailIcon from './res/email.png';
import DefaultPhoneIcon from './res/telephone.png';
import DefaultPinIcon from './res/location.png';
import hexToCSSFilters from '../../../../core/utils/hexToCSSFilters';
export default function CoreModule({
    title,
    titleFont,
    
    commText,
    commTextFont,

    logo,
    bg,

    iconsColor,
    itemsFont,
    
    items,
})
{
    return(
        <div 
            className='footer_model_1'
            style={{
                backgroundImage: `url('${bg?bg:DefaultBgImage}')`
            }}
            >
            <div className='footer_model_1-left'>
                <div className='footer_model_1-left-top'>
                    <img src={logo?logo:DefaultLogo} alt="logo"/>
                    <span 
                        className='footer_model_1-left-top-desc'
                        style={{
                            fontFamily: commTextFont?commTextFont:'Arial'
                        }}
                        >{commText}</span>
                    
                </div>
            </div>
            <div className='footer_model_1-right'>
            <div className='footer_model_1-right-top'>
                <span
                    style={{
                        fontFamily: titleFont?titleFont:'Arial'
                    }}
                >
                    {title}
                </span>

            </div>
            
            <div className='footer_model_1-right-separator'>

            </div>
            <div className='footer_model_1-right-bot'>
                <div className='footer_model_1-right-bot-col'>
                    {
                        items.left.map((el)=>{
                            return(
                                <FooterItem
                                    title={el.title}
                                    imageIcon={el.imageIcon ?el.imageIcon:DefaultEmailIcon}
                                    text={el.text}
                                    iconColor={iconsColor?iconsColor:'#313131'}
                                />
                            )
                        })
                    }
                </div>
                <div className='footer_model_1-right-bot-separator'>
                    <div className='footer_model_1-right-bot-separator-content'>

                    </div>
                </div>
                <div className='footer_model_1-right-bot-col'>
                {
                        items.right.map((el)=>{
                            return(
                                <FooterItem
                                    title={el.title}
                                    imageIcon={el.imageIcon ?el.imageIcon:DefaultEmailIcon}
                                    text={el.text}
                                    iconColor={iconsColor?iconsColor:'#313131'}
                                />
                            )
                        })
                    }
                </div>
            </div>
            </div>
        </div>
    )
}

const FooterItem = ({imageIcon, text,title, iconColor, })=>{
    return(
        <div className='footer_model_1-right-bot-col-item'>
            <div className='footer_model_1-right-bot-col-item-icon'>
                <img src={imageIcon} style={{filter: iconColor?`${hexToCSSFilters(iconColor)}`:`none`}}/>
                <span>{title}</span>
            </div>
            <div className='footer_model_1-right-bot-col-item-text'>
                <span>{text}</span>
            </div>
        </div>
    )
}
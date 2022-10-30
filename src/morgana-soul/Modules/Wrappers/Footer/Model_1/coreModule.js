import React,{useState, useEffect} from 'react';
import './coreStyle.css';
import DefaultLogo from './res/defaultLogo.png';
import DefaultBgImage from './res/defaultBg.jpg';
import DefaultEmailIcon from './res/email.png';
import DefaultPhoneIcon from './res/telephone.png';
import DefaultPinIcon from './res/location.png';

export default function CoreModule()
{
    return(
        <div 
            className='footer_model_1'
            style={{
                backgroundImage: `url('${DefaultBgImage}')`
            }}
            >
            <div className='footer_model_1-left'>
                <div className='footer_model_1-left-top'>
                    <span className='footer_model_1-left-top-intro'>PRIVATE CHEF</span>
                    <span className='footer_model_1-left-top-intro'>RECEPIES AND MENU DEVELOPER</span>
                    <img src={DefaultLogo} alt="logo"/>
                    <span className='footer_model_1-left-top-desc'>Poftă de viață bună sa ai!</span>
                    
                </div>
                <div className='footer_model_1-left-bot'>
                    <button>Book Now</button>
                </div>
            </div>
            <div className='footer_model_1-right'>
            <div className='footer_model_1-right-top'>
                <span>
                    Contact
                </span>

            </div>
            
            <div className='footer_model_1-right-separator'>

            </div>
            <div className='footer_model_1-right-bot'>
                <div className='footer_model_1-right-bot-col'>
                    <FooterItem
                        title="EMAIL"
                        imageIcon={DefaultEmailIcon}
                        text="defaultEmail@gmail.com"
                    />
                    <FooterItem
                        title="TELEFON"
                        imageIcon={DefaultPhoneIcon}
                        text="0765665678"
                    />
                </div>
                <div className='footer_model_1-right-bot-separator'>
                    <div className='footer_model_1-right-bot-separator-content'>

                    </div>
                </div>
                <div className='footer_model_1-right-bot-col'>
                    <FooterItem
                        title="LOCATIE"
                        imageIcon={DefaultPinIcon}
                        text="Baile Felix"
                    />
                    <FooterItem
                        title="LOCATIE"
                        imageIcon={DefaultPinIcon}
                        text="Baile Felix"
                    />
                </div>
            </div>
            </div>
        </div>
    )
}

const FooterItem = ({imageIcon, text,title})=>{
    return(
        <div className='footer_model_1-right-bot-col-item'>
            <div className='footer_model_1-right-bot-col-item-icon'>
                <img src={imageIcon}/>
                <span>{title}</span>
            </div>
            <div className='footer_model_1-right-bot-col-item-text'>
                <span>{text}</span>
            </div>
        </div>
    )
}
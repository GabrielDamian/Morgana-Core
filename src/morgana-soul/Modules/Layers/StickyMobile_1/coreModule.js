import React,{useState, useEffect} from 'react';
import './coreStyle.css';
import DefaultPhoneImg from './res/phone.png';
import DefaultSocialFb from './res/social-media.png';
import DefaultSocialIg from './res/instagram.png';
import DefaultSocialYt from './res/youtube.png';

import hexToCSSFilters from '../../../core/utils/hexToCSSFilters';

export default function CoreModule({
    iconsColor
})
{
    return (
        <div className='layers_stickymobile_1-container'>
            <div className='layers_stickymobile_1-container-social'>
                <img className='layers_stickymobile_1-container-social-default' src={DefaultSocialFb} style={{filter: iconsColor?`${hexToCSSFilters(iconsColor)}`:`none`}}/>
                <img className='layers_stickymobile_1-container-social-elem' src={DefaultSocialFb} style={{filter: iconsColor?`${hexToCSSFilters(iconsColor)}`:`none`}}/>
                <img className='layers_stickymobile_1-container-social-elem' src={DefaultSocialIg} style={{filter: iconsColor?`${hexToCSSFilters(iconsColor)}`:`none`}}/>
                <img className='layers_stickymobile_1-container-social-elem' src={DefaultSocialYt} style={{filter: iconsColor?`${hexToCSSFilters(iconsColor)}`:`none`}}/>
            </div>
        </div>
    )
}

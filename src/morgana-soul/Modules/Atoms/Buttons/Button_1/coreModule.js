import React from 'react';
import './coreStyle.css';

//https://codepen.io/rafaaro/pen/oNvJQyb
export default function CoreModule({
    
})
{
    //TO DELETE
    const handleClick = ()=>{
        var elmntToView = document.getElementById("widget_1_ref");
        elmntToView.scrollIntoView();
    }
    return (
        <div className='atoms_buttons_btn_1-container'>
            <button className='atoms_buttons_btn_1-container-btn' onClick={handleClick}>
                Descoperă
            </button>
            <span className='atoms_buttons_btn_1-container-btn-span-1'></span>
            <span className='atoms_buttons_btn_1-container-btn-span-2'></span>
            <span className='atoms_buttons_btn_1-container-btn-span-3'></span>
            <span className='atoms_buttons_btn_1-container-btn-span-4'></span>
        </div>
    )
}
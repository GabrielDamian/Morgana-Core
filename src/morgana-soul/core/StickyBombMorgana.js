import React,{useEffect, useState} from 'react';

export default function StickyBombMorgana(props)
{
    useEffect(()=>{
        console.log("sticky bomb attached:",props)
        document.title = props.title
        //Insert page description using react helmet
    },[])

    return(
        <></>
    )
}
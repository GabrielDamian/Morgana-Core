import React,{useEffect, useState} from 'react';

export default function StickyBombMorgana({metadata})
{
    useEffect(()=>{
        console.log("sticky bomb attached:",metadata)
        document.title = metadata.title
        //Insert page description using react helmet
    },[metadata])

    return(
        <></>
    )
}
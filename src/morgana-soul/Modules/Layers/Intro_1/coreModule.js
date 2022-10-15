import React,{useState, useEffect} from 'react';

export default function CoreModule({ceva})
{
    useEffect(()=>{
        console.log("intro_1 init")
    },[])
    
    return (
        <p>
            core module layers module 1
            ceva: {ceva}
        </p>
    )
}

import React, { useEffect } from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import StickyBombMorgana from './StickyBombMorgana';

export function routerDomSpreadCore(config)
{

    const buildPage = (metadata, NavBar, Layers, Footer)=>{
        console.log("build page:",metadata)
        return(
            <>
            {/* Bomb planted on site B */}
                <StickyBombMorgana metadata={metadata}/>
            {/*  */}
                {NavBar}
                <>
                    {Layers.map(el=>el)}
                </>
                {Footer}
            </>
        )
    }
    
    return(
        <>
            <Router>
                <Routes>
                    {config.content.pages.map((page)=>{
                    return <Route path={page.url} element={buildPage(page.metadata , config.content.appBar,page.components, config.content.footer)}></Route>
                    })}
                </Routes>
            </Router>
        </>
    )
}
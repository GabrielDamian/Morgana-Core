import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


let TestComponent = ()=>{
    return(
        <p>tst comp</p>
    )
}
export function routerDomSpreadCore(config)
{
    console.log("router dom spread core:", config)

    const buildPage = (NavBar, Layers, Footer)=>{
        console.log("nav bar:", NavBar)
        console.log("footer:", Footer)
        console.log("layers:", Layers)

        return(
            <>
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

                        console.log("page:", page)
                    return <Route path={page.url} element={buildPage(config.content.appBar,page.components, config.content.footer)}></Route>
                    })}
                </Routes>
            </Router>
        </>
    )
}
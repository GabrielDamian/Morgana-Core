import React from 'react';
import Theme from './morgana-soul/core/themeHandler';
import {Omnitrix} from './morgana-soul/core/modulesHandler';

// define theme
const theme = new Theme()
theme.initFonts(`'Bitter'`,`'BIZ UDPMincho'`, `'Crimson Text'`)
theme.initColors('bda370', '291e1a','efe8da')

// resources (images) from static folder
const images = { //custom obj per build
    introBg: '',
}

console.log("TEST core:",theme.getColorDark())
// define pages
export const core = {
    websiteName: 'templatTest',
    description: 'templateDesc',
    content:{
        appBar: <Omnitrix.Module_Wrappers_Navbar_1
                    mapIcon={null} //svg ref
                    phoneIcon={null} //svg ref

                    locationName='Baile Felix' //string
                    phoneName='+40 234 234 234'

                    iconsColor={theme.getColorAccent_1()} //ex: dd9a34, map and phone icons

                    primaryFont={theme.getFontCallToAction()} //nav bar buttons
                    secondaryFont={theme.getFontText()} //location name and phone nr
                    
                    fontColor="white"
                    fontColorOnScroll={'black'}

                    bgFirstColor={'rgba(0, 0, 0, 0.68)'}
                    bgColor= {'white'}
                    underlineColor={`#${theme.getColorAccent_1()}`}

                    links={[
                        {
                            name: 'Acasa',
                            ref: '/'
                        },
                        {
                            name: 'Camere',
                            ref: '/camere'
                        },
                        {
                            name: 'Galerie',
                            ref: '/gallery'
                        },
                        {
                            name: 'Contact',
                            ref: '/contact'
                        }
                    ]}

                    logo={null}
                    hoverAnim={8} //range(1,8)
                    hoverTextColor={null}
                    borderBottom={`#${theme.getColorAccent_1()}`} //red

                    //sizes details
                    containerPadding='10px'
                    logoHeight='50px'   
                />,
        footer: <Omnitrix.Module_Wrappers_Footer_1 ceva="footer param"/>,
        pages:[
            {
                url: '/',
                title: 'Page 1 title',
                components: [
                    <Omnitrix.Module_Layers_Intro_1 
                        // titleFont="Times New Roman"
                    />,
                    <Omnitrix.Module_Layers_StickyMobile_1
                        iconsColor="a48454"
                    />,
                    <Omnitrix.Module_Layers_Widget_1
                    
                    />,
                   
                    <Omnitrix.Module_Layers_Widget_2

                    />,
                    <Omnitrix.Module_Layers_Widget_3
                    
                    />,
                    <Omnitrix.Module_Layers_Widget_4
                    
                    />
                ]
            },
            {
                url: '/gallery',
                title: 'Page 1 title',
                components: [
                    <Omnitrix.Module_Layers_Widget_5/>
                ]
            }
        ]
    }
}




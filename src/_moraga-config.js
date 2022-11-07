import React from 'react';
import Theme from './morgana-soul/core/themeHandler';
import {Omnitrix} from './morgana-soul/core/modulesHandler';

// define theme
const theme = new Theme()
theme.initFonts(`Inknut Antiqua`,`'BIZ UDPMincho'`, `'Crimson Text'`)
theme.initColors('bda370', '291e1a','efe8da')

// resources (images) from static folder
const images = { //custom obj per build
    logo: './logo.png',
}

// define pages
export const core = {
    websiteName: 'templatTest',
    description: 'templateDesc',
    content:{
        appBar: <Omnitrix.Module_Wrappers_Navbar_1
                    mapIcon={null} //svg ref
                    locationName='Baile Felix' //string
                    
                    phoneIcon={null} //svg ref
                    phoneName='+40 234 234 234'

                    iconsColor={theme.getColorAccent_1()} //ex: dd9a34, without '#'

                    primaryFont={theme.getFontCallToAction()} //nav bar buttons
                    secondaryFont={theme.getFontText()} //location name and phone nr
                    
                    fontColor="white" //ex: red, hex, rgba
                    fontColorOnScroll={'black'} 

                    bgFirstColor={'rgba(0, 0, 0, 0.68)'}
                    bgColorOnScroll= {'white'}

                    borderItemsHover={`#${theme.getColorAccent_1()}`}
                    hoverTextColor = {`gray`}
                    links={{
                        left:[
                            {
                                name: 'Acasa',
                                ref: '/'
                            },
                            
                            {
                                name: 'Galerie',
                                ref: '/gallery'
                            },
                            {
                                name: 'Facilitati',
                                ref: '/facilitati'
                            },
                        ],
                        right:[
                            {
                                name: 'Vila Mare',
                                ref: '/vila-mare'
                            },
                            {
                                name: 'Vila Mica ',
                                ref: '/vila-mica'
                            },
                            {
                                name: 'Contact',
                                ref: '/contact'
                            }
                        ]
                    }}

                    logo={images.logo}
                    hoverAnim={8} //range(1,8)
                    borderBottom={`#${theme.getColorAccent_1()}`} //color with #

                    containerPadding='10px'
                    logoHeight='50px'   
                />,
        footer: <Omnitrix.Module_Wrappers_Footer_1 />,
        pages:[
            {
                url: '/',
                metadata: {
                    title: 'Page 1 title',
                    desc: 'Page 1 description'
                },
                components: [
                    <Omnitrix.Module_Layers_Intro_1 
                        // titleFont="Times New Roman"
                        button={Omnitrix.Atom_Buttons_Btn_1}
                        logoImg={images.logo}
                        titleFont={theme.getFontTitle()}
                        // slides={[{  
                        //             bg: './bg-1.jpeg',
                        //             top: 'Vilele Colții Morarului',
                        //             bot: 'coold headline here 1'
                        //         },
                        //         {  
                        //             bg: './bg-2.jpeg',
                        //             top: 'Vilele Colții Morarului',
                        //             bot: 'coold headline here 2'
                        //         },
                                
                            
                        //     ]
                        // }
                    />,
                    <Omnitrix.Module_Layers_StickyMobile_1
                        iconsColor="a48454"
                        
                    />,
                    <Omnitrix.Module_Layers_Widget_1
                        button={Omnitrix.Atom_Buttons_Btn_1}
                    />,
                    <Omnitrix.Module_Layers_Widget_8
                    
                    
                    />,
                    <Omnitrix.Module_Layers_Widget_2

                    />,
                    <Omnitrix.Module_Layers_Widget_3
                    
                    />,
                    <Omnitrix.Module_Layers_Widget_4
                    
                    />,
                    <Omnitrix.Module_Layers_Widget_7
                    
                    />
                ]
            },
            {
                url: '/gallery',
                metadata: {
                    title: 'Page 2 title',
                    desc: 'Page 2 description'
                },
                components: [
                    <Omnitrix.Module_Layers_Widget_6
                        title="Galerie"
                    />,
                    <Omnitrix.Module_Layers_Widget_5/>,
                ]
            },
            {
                url: '/vila-mare',
                metadata: {
                    title: 'Page 3 title',
                    desc: 'Page 3 description'
                },
                components: [
                    <Omnitrix.Module_Layers_Widget_6
                        title="vila-mare"
                    />,
                    <Omnitrix.Module_Layers_Widget_9
                        title="Apartament 1"
                    />,
                    <Omnitrix.Module_Layers_Widget_5/>,
                    <Omnitrix.Module_Layers_Widget_9
                        title="Apartament 2"
                    />,
                    <Omnitrix.Module_Layers_Widget_5/>,
                ]
            },
            {
                url: '/vila-mica',
                metadata: {
                    title: 'Page 3 title',
                    desc: 'Page 3 description'
                },
                components: [
                    <Omnitrix.Module_Layers_Widget_6
                        title="vila-mica"
                    />,
                    <Omnitrix.Module_Layers_Widget_9
                        title="Apartament 3"

                    />,
                    <Omnitrix.Module_Layers_Widget_5/>,
                    
                    <Omnitrix.Module_Layers_Widget_9
                        title="Apartament 4"

                    />,
                    <Omnitrix.Module_Layers_Widget_5/>,
                ]
            },
            {
                url: '/facilitati',
                metadata: {
                    title: 'Page 3 title',
                    desc: 'Page 3 description'
                },
                components: [
                    <Omnitrix.Module_Layers_Widget_6
                        title="facilitati"
                    />,
                    <Omnitrix.Module_Layers_Widget_10
                        title="Feature title 1"
                    />,
                    <Omnitrix.Module_Layers_Widget_10
                        title="Feature title 2"
                    />
                ]
            },
            {
                url: '/contact',
                metadata: {
                    title: 'Page 3 title',
                    desc: 'Page 3 description'
                },
                components: [
                    <Omnitrix.Module_Layers_Widget_6
                        title="Contact"
                    />,
                    <Omnitrix.Module_Layers_Widget_11

                    />
                ]
            }
        ]
    }
}




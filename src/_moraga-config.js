import Theme from './morgana-soul/core/themeHandler';
import {Omnitrix} from './morgana-soul/core/modulesHandler';

// define theme
const theme = new Theme()
theme.initFonts(`'Bitter'`,`'BIZ UDPMincho'`, `'Crimson Text'`)
theme.initColors('blue', 'orange','yellow')

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

                    iconsColor={'000000'} //ex: dd9a34, map and phone icons

                    primaryFont='Helvetica' //nav bar buttons
                    primaryFontColor={'red'}

                    secondaryFont='Arial' //location name and phone nr
                    secondaryFontColor='lightgreen'

                    bgFirstColor={'blue'}
                    bgColor= {'orange'}
                    underlineColor={'yellow'}

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
                            ref: '/galerie'
                        },
                        {
                            name: 'Contact',
                            ref: '/contact'
                        }
                    ]}

                    logo={null}
                    hoverAnim={8} //range(1,8)
                    hoverTextColor='lightgreen'
                    borderBottom={null} //red

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
                    <Omnitrix.Module_Layers_Intro_1 ceva="layer 1"/>,
                ]
            },
            {
                url: '/page1',
                title: 'Page 1 title',
                components: [
                    <Omnitrix.Module_Layers_Intro_1 ceva="layer 2"/>
                ]
            }
        ]
    }
}




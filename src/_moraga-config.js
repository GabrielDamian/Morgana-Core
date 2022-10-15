import Theme from './morgana-soul/core/themeHandler';
import {Omnitrix} from './morgana-soul/core/modulesHandler';

// define theme
const theme = new Theme()


// resources (images) from static folder
const images = { //custom obj per build
    introBg: '',

}


// define pages
export const core = {
    websiteName: 'templatTest',
    description: 'templateDesc',
    content:{
        appBar: <Omnitrix.Module_1_Layers_Intro_1 ceva="app bar parma"/>,
        footer: <Omnitrix.Module_1_Layers_Intro_1 ceva="footer param"/>,
        pages:[
            {
                url: '/',
                title: 'Page 1 title',
                components: [
                    <Omnitrix.Module_1_Layers_Intro_1 ceva="layer 1"/>,
                    <Omnitrix.Module_1_Layers_Intro_1 ceva="layer 1.1"/>,
                ]
            },
            {
                url: '/page1',
                title: 'Page 1 title',
                components: [
                    <Omnitrix.Module_1_Layers_Intro_1 ceva="layer 2"/>
                ]
            }
        ]
    }
}




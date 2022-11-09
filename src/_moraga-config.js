import React from 'react';
import Theme from './morgana-soul/core/themeHandler';
import {Omnitrix} from './morgana-soul/core/modulesHandler';

// define theme
const theme = new Theme()
theme.initFonts(`'Karla', sans-serif`,`'Zen Antique', serif`,null)
theme.initColors('#313131','#d8b774','#f8f8f8')//black, gold, white

// resources (images) from static folder
const images = { //custom obj per build
    logo: './img/logo.png',
    bg_1: './img/Acasa/bg-1.jpg',
    bg_2: './img/Acasa/bg-2.jpg',
    bg_3: './img/Acasa/bg-3.jpg',
    ciubar: './img/Acasa/ciubar.jpg',
    design: './img/Acasa/design.jpg',
    vilaMare: './img/Acasa/vila-mare.jpg',
    presentation_1: './img/Acasa/pres_1.jpg',
    presentation_2: './img/Acasa/pres_2.jpg',
    presentation_bg: './img/Acasa/pres_3.jpg',

    gallery_1:'./img/Acasa/gal_1.jpg',

}

// define pages
export const core = {
    websiteName: 'templatTest',
    description: 'templateDesc',
    content:{
        appBar: <Omnitrix.Module_Wrappers_Navbar_1
                    mapIcon={null} //svg ref
                    locationName='Predeal' //string
                    
                    phoneIcon={null} //svg ref
                    phoneName='+40 759 071 937'

                    iconsColor={theme.colors.color_2} //ex: dd9a34, without '#'

                    primaryFont={theme.fonts.font_1} //nav bar buttons
                    secondaryFont={theme.fonts.font_2} //location name and phone nr
                    
                    fontColor="white" //ex: red, hex, rgba
                    fontColorOnScroll={'black'} 

                    bgFirstColor={'rgba(49, 49, 49, 0.8)'}
                    bgColorOnScroll= {theme.colors.color_3}

                    mobileFontSize={'1.3rem'}
                    borderItemsHover={`${theme.colors.color_2}`}
                    hoverTextColor = {`gray`}
                    links={{
                        left:[
                            {
                                name: 'Acasă',
                                ref: '/'
                            },
                            
                            {
                                name: 'Galerie',
                                ref: '/gallery'
                            },
                            {
                                name: 'Facilități',
                                ref: '/facilitati'
                            },
                        ],
                        right:[
                            {
                                name: 'Vila Mare',
                                ref: '/vila-mare'
                            },
                            {
                                name: 'Vila Mică ',
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
                    borderBottom={`${theme.colors.color_2}`} //color with #

                    containerPadding='10px'
                    logoHeight='50px'   
                />,
        footer: <Omnitrix.Module_Wrappers_Footer_1 
                    title={'CONTACT'}
                    titleFont={theme.fonts.font_1}
                    
                    commText={'O locatie de poveste'}
                    commTextFont={theme.fonts.font_2}

                    logo={images.logo}
                    bg={null}

                    iconsColor={theme.colors.color_2}
                    itemsFont={theme.fonts.font_1}

                    items={{
                        left:[
                                {
                                    title:"MAIL",
                                    imageIcon: './img/Acasa/mail.png',
                                    text:"coltiimorarului@gmail.com",
                                },
                                {
                                    title:"TELEFON",
                                    imageIcon: './img/Acasa/phone-call.png',
                                    text:"+40 759 071 937",
                                },
                            ],
                        right:
                            [
                                {
                                    title:"FACEBOOK",
                                    imageIcon: './img/Acasa/facebook.png',
                                    text:"Vilele Colții Morarului",
                                },
                                {
                                    title:"LOCATIE",
                                    imageIcon: './img/Acasa/pin.png',
                                    text:"Strada Iancu Jianu, Predeal",
                                },
                            ],
                    }}
                    
        />,
        pages:[
            {
                url: '/',
                metadata: {
                    title: 'Colții Morarului - Acasă',
                    desc: 'Pagina Acasa Pensiunea Coltii Morarului'
                },
                components: [
                    <Omnitrix.Module_Layers_Intro_1 
                        //TODO: set up callback for scroll on button click
                        button={Omnitrix.Atom_Buttons_Btn_1}
                        logoImg={images.logo}

                        titleFont={theme.fonts.font_2}
                        headlineFont={theme.fonts.font_1}
                        
                        titleFontSize={'3rem'}
                        headlineFontSize={'1.3rem'}
                        
                        slides={[{  
                                    bg: images.bg_1,
                                    top: 'Vilele Colții Morarului',
                                    bot: 'Un loc de poveste'
                                },
                                {  
                                    bg: images.bg_2,
                                    top: 'Vilele Colții Morarului',
                                    bot: 'Un loc de poveste'
                                },
                                {  
                                    bg: images.bg_3,
                                    top: 'Vilele Colții Morarului',
                                    bot: 'Un loc de poveste'
                                },
                            ]
                        }
                    />,
                    <Omnitrix.Module_Layers_StickyMobile_1
                        iconsColor="a48454"
                    />,
                    <Omnitrix.Module_Layers_Widget_1
                        //TODO: set up callback for features redirect
                        button={Omnitrix.Atom_Buttons_Btn_1}
                        items={[
                            {
                                title: 'Ciubar',
                                headline: 'Pentru că știm cât de mult contează relaxarea',
                                desc: 'Pentru că știm cât de mult contează relaxarea',
                                bg: images.ciubar
                            },
                            {
                                title: 'Design Rustic',
                                headline: 'La noi te vei simți ca acasă',
                                desc: 'La noi te vei simți ca acasă',
                                bg: images.design
                            },
                            {
                                title: 'Peisaj Superb',
                                headline: 'Ești inconjurat de frumusețile naturii',
                                desc: 'Ești inconjurat de frumusețile naturii',
                                bg: './img/Acasa/peisaj.jpg'
                            }
                        ]}

                        titleColor={theme.colors.color_2}
                        titleBgColor={theme.colors.color_1}
                        titleFont={theme.fonts.font_2}
                        titleSize={'1.5rem'}

                        headlineColor={theme.colors.color_1}
                        headlineBgColor={theme.colors.color_3}
                        headlineFont={theme.fonts.font_1}
                        headlineSize={'1rem'}

                        descColor={theme.colors.color_3}
                        descFont={theme.fonts.font_1}
                        bgColorBack={'rgba(49, 49, 49, 0.5)'}
                    />,
                    <Omnitrix.Module_Layers_Widget_8
                        items={
                            [
                                {
                                    title: 'VILA MARE',
                                    link: '/vila-mare',
                                    bg1: images.vilaMare,
                                    footers: [
                                        'aparatament 1',
                                        'aparatament 1',
                                    ],
                                    textHover: 'Vila mare contine un total de x camere fiecare cu baie/fara baie , o bucatarie si ferestre cu privelisti de neuitat.'
                                },
                                {
                                    title: 'VILA MICA',
                                    link: '/vila-mica',
                                    bg1: images.bg_3,
                                    footers: [
                                        'aparatament 2',
                                        'aparatament 3',
                                    ],
                                    textHover: 'Vila mica contine un total de x camere fiecare cu baie/fara baie , o bucatarie si ferestre cu privelisti de neuitat.'
                                },
                            ]
                        }

                        bgColorHover={'rgba(49, 49, 49, 0.6)'}

                        titleSize={'2.5rem'}
                        titleFont={theme.fonts.font_2}
                        titleColor={theme.colors.color_2}
                        titleBgColor={theme.colors.color_1}
                    
                        descSize={'1.1rem'}
                        descFont={theme.fonts.font_1}
                        descColor={theme.colors.color_3}
                    />,
                    <Omnitrix.Module_Layers_Widget_2
                        title={"Despre Coltii Morarului"}
                        titleSize={'1.9rem'}
                        titleFont={theme.fonts.font_2}

                        desc={[
                            'Vilele Colții Morarului se află la 2,2 km de pârtia de schi Poliștoaca și oferă cazare cu un lounge comun, o grădină și o recepție deschisă non-stop.',
                            'Locatia este superba, pozitia ei geografica iti ofera un peisaj de poveste iar aspectul vilei este unul vintage.',
                            'Apartamentele sunt incapatoare cu o terasa superba cu vedere spre munte ,curat ,mobilat cu stil ,parcare privata,toate facilitatile necesare , deasemeni la parter se afla o sala living destul de spatioasa cu bucatarie',
                        ]}
                        descSize={'1.1rem'}
                        descFont={theme.fonts.font_1}

                        img1={images.presentation_2}
                        img2={images.presentation_1}

                        bgLeft={null}
                        bgRight={images.presentation_bg}

                        invertOrder={true}
                    />,
                    <Omnitrix.Module_Layers_Widget_3
                        pictures={[
                            './img/Acasa/gal_1.jpg',
                            './img/Acasa/gal_2.jpg',
                            './img/Acasa/gal_3.jpg',
                            './img/Acasa/gal_4.jpg',
                            './img/Acasa/gal_5.jpg',
                            './img/Acasa/gal_6.jpg',
                            './img/Acasa/gal_7.jpg',
                            './img/Acasa/gal_8.jpg',
                        ]}
                    
                    />,
                    // <Omnitrix.Module_Layers_Widget_4
                    //     title={'FACILITATI'}
                    //     titleSize={'2.5rem'}
                    //     titleFont={theme.fonts.font_1}
                    //     titleColor={theme.colors.color_4}

                    //     topIcon={'./img/Acasa/abstract.png'}
                    //     topIconColor={theme.colors.color_2}
                    //     separatorColor={theme.colors.color_2}

                    //     items={[
                    //         {
                    //             icon: './img/Acasa/facility-item.jpg',
                    //             title: 'Restaurant1',
                    //             desc: 'Camerele sunt dotate cu tot ce trebuie ca sa va asiguram confortul necesar.'
                    //         },
                    //         {
                    //             icon: './img/Acasa/facility-item.jpg',
                    //             title: 'Restaurant2',
                    //             desc: 'Camerele sunt dotate cu tot ce trebuie ca sa va asiguram confortul necesar.'
                    //         },
                    //         {
                    //             icon: './img/Acasa/facility-item.jpg',
                    //             title: 'Restaurant3',
                    //             desc: 'Camerele sunt dotate cu tot ce trebuie ca sa va asiguram confortul necesar.'
                    //         },
                    //     ]}

                    //     itemsIconColor={theme.colors.color_2}
                        
                    //     itemsTitleFont={theme.fonts.font_2}
                    //     itemsTitleColor={theme.colors.color_3}
                    //     itemsTitleSize={'2.2rem'}

                    //     itemsDescColor={theme.colors.color_3}
                    //     itemsDescFont={theme.fonts.font_1}
                    //     itemsDescSize={'1rem'}

                    //     bgImage={'./img/Acasa/facilitati-bg.jpg'}
                    
                    // />,
                    <Omnitrix.Module_Layers_Widget_7
                        slides = {[
                            {
                                title:  'Pârtia Subteleferic',
                                desc: ' Pârtia Subteleferic este o pârtie neagră cu un grad avansat de dificultate și o lungime de 1200 de metri. Are o diferență de nivel de 350 de metri, o înclinație de 31% și este deservită de o instalație de transport pe cablu: Telescaun Predeal. ',
                                img1: './img/Acasa/atractie_1.jpg',
                                img2: './img/Acasa/atractie_2.jpg',
                            },
                            {
                                title:  'Cascada Tamina',
                                desc: `Dacă eşti în zona Timişu de Sus sau prin Predeal, o vizionare a acestei cascade poate fi un bun prilej pentru o drumeţie de aprox. 2,5km.
                                După ce laşi maşina la DN1 caută şi urmăreşte traseul "bandă albastră" care te va duce la cascadă în 1h-1h30min, depinde cât de sprinten(ă) şi grăbit(ă) eşti; sau poţi merge pe drumul forestier care şerpuieşte prin pădure - e mai lung (aproape 4 km, 2 ore) dar mult mai uşor de parcurs. `,
                                img1: './img/Acasa/tamina1.jpg',
                                img2: './img/Acasa/tamina2.jpg',
                            },
                        ]}
                        dummyHeadline={'Ce vedem in Predeal'}

                        bgImage={'./img/Acasa/atractii-bg.jpg'}

                        titleSize={'2.1rem'}
                        titleFont={theme.fonts.font_2}
                        titleColor={theme.colors.color_1}

                        descSize={'1.3rem'}
                        descFont={theme.fonts.font_1}
                        descColor={theme.colors.color_1}
                    />
                ]
            },
            {
                url: '/gallery',
                metadata: {
                    title: 'Galerie',
                    desc: 'Page 2 description'
                },
                components: [
                    <Omnitrix.Module_Layers_Widget_6
                        bgImage={'./img/Acasa/gal_1.jpg'}
                        title="Galerie"
                    />,
                    <Omnitrix.Module_Layers_Widget_5
                        imagesProps={[
                            {
                                src: './img/Acasa/gal_1.jpg',
                                width: 250,
                                height: 220,
                            },
                            {
                                src: './img/Acasa/gal_2.jpg',
                                width: 200,
                                height: 220,
                            },
                            {
                                src: './img/Acasa/gal_3.jpg',
                                width: 220,
                                height: 220,
                            },
                            {
                                src: './img/Acasa/gal_4.jpg',
                                width: 250,
                                height: 220,
                            },
                            {
                                src: './img/Acasa/gal_5.jpg',
                                width: 250,
                                height: 220,
                            },
                            {
                                src: './img/Acasa/gal_6.jpg',
                                width: 250,
                                height: 220,
                            },


                            {
                                src: './img/Acasa/bg-1.jpg',
                                width: 250,
                                height: 220,
                            },
                            {
                                src: './img/Acasa/bg-2.jpg',
                                width: 250,
                                height: 220,
                            },
                            {
                                src: './img/Acasa/bg-3.jpg',
                                width: 250,
                                height: 220,
                            },
                            {
                                src: './img/Acasa/facilitati-bg-top.jpg',
                                width: 250,
                                height: 220,
                            },
                            {
                                src: './img/Acasa/vila-mare.jpg',
                                width: 250,
                                height: 220,
                            },


                            {
                                src: './img/Acasa/gal_7.jpg',
                                width: 250,
                                height: 220,
                            },
                            {
                                src: './img/Acasa/gal_8.jpg',
                                width: 250,
                                height: 220,
                            },
                            {
                                src: './img/Acasa/gal_9.jpg',
                                width: 250,
                                height: 220,
                            },
                            {
                                src: './img/Acasa/gal_10.jpg',
                                width: 250,
                                height: 220,
                            },
                            {
                                src: './img/Acasa/gal_11.jpg',
                                width: 250,
                                height: 220,
                            },
                            {
                                src: './img/Acasa/gal_12.jpg',
                                width: 250,
                                height: 220,
                            },
                            {
                                src: './img/Acasa/gal_13.jpg',
                                width: 250,
                                height: 220,
                            },
                            {
                                src: './img/Acasa/gal_14.jpg',
                                width: 220,
                                height: 220,
                            },
                            {
                                src: './img/Acasa/gal_15.jpg',
                                width: 250,
                                height: 220,
                            },

                        ]}
                        defaultValues={false}
                    />,
                ]
            },
            {
                url: '/vila-mare',
                metadata: {
                    title: 'Vila Mare',
                    desc: 'Page 3 description'
                },
                components: [
                    <Omnitrix.Module_Layers_Widget_6
                        title="VILA MARE"
                        bgImage={'./img/Acasa/vila-mare.jpg'}
                    />,
                    <Omnitrix.Module_Layers_Widget_9

                        bgImage={'./img/Acasa/camere-bg.jpg'}
                        img1={'./img/Acasa/gal_7.jpg'}
                        img2={'./img/Acasa/gal_7.jpg'}

                        headline={"Apartamentul Ventrum"}
                        headlineFont={theme.fonts.font_1}
                        headlineSize={'1.1rem'}
                        headlineColor={'gray'}
                        
                        title="Ventrum"
                        titleFont={theme.fonts.font_2}
                        titleSize={'1.8rem'}
                        titleColor={theme.colors.color_1}
                        
                        content={"Apartamentul se afla la mansarda vilei. Are doua dormitoare , living cu kichineta, terasa acoperita cu gratar si o priveliste superba catre Muntii Bucegi."}
                        contentFont={theme.fonts.font_1}
                        contentSize={"1.1rem"}
                        contentColor={theme.colors.color_1}

                        features="Facilitati 1"
                        featuresFont={theme.fonts.font_1}
                        featuresSize={'1.2rem'}
                        featuresColor={theme.colors.color_1}
                        underlineColor={theme.colors.color_2}

                        featuresItems={[
                            'Zonă de picnic',
                            'Terasă/grădină',
                            'Grătar',
                            'Bucătărie comună',
                            'Wi-Fi',
                            'Parcare',
                            'Camere de familie',
                        ]}

                        featuresItemsFont={theme.fonts.font_1}
                        featuresItemsSize={'1rem'}
                        featuresItemsColor={theme.colors.color_1}

                    />,
                    <Omnitrix.Module_Layers_Widget_5
                        imagesProps={[
                            {
                                src: './img/Acasa/gal_3.jpg',
                                width: 200,
                                height: 220,
                            },
                            {
                                src: './img/Acasa/gal_6.jpg',
                                width: 200,
                                height: 220,
                            },
                            {
                                src: './img/Acasa/gal_3.jpg',
                                width: 220,
                                height: 220,
                            },
                            {
                                src: './img/Acasa/gal_7.jpg',
                                width: 250,
                                height: 220,
                            },
                            {
                                src: './img/Acasa/gal_8.jpg',
                                width: 250,
                                height: 220,
                            },
                            {
                                src: './img/Acasa/pres_1.jpg',
                                width: 250,
                                height: 220,
                            },
                        ]}
                        defaultValues={false}
                    />,
                    <Omnitrix.Module_Layers_Widget_9

                    bgImage={'./img/Acasa/camere-bg.jpg'}
                    img1={'./img/Acasa/gal_8.jpg'}
                    img2={'./img/Acasa/gal_8.jpg'}

                    headline={"Apartament Aqua"}
                    headlineFont={theme.fonts.font_1}
                    headlineSize={'1.1rem'}
                    headlineColor={'gray'}
                    
                    title="Aqua"
                    titleFont={theme.fonts.font_2}
                    titleSize={'1.8rem'}
                    titleColor={theme.colors.color_1}
                    
                    content={"Apartamentul Aqua este structurat astfel : doua dormitoare , living cu acvariu și kichineta , o baie și terasa acoperită cu grătar"}
                    contentFont={theme.fonts.font_1}
                    contentSize={"1.1rem"}
                    contentColor={theme.colors.color_1}

                    features="Facilitati 1"
                    featuresFont={theme.fonts.font_1}
                    featuresSize={'1.2rem'}
                    featuresColor={theme.colors.color_1}
                    underlineColor={theme.colors.color_2}

                    featuresItems={[
                        'Zonă de picnic',
                        'Terasă/grădină',
                        'Grătar',
                        'Bucătărie comună',
                        'Wi-Fi',
                        'Parcare',
                        'Camere de familie',
                    ]}

                    featuresItemsFont={theme.fonts.font_1}
                    featuresItemsSize={'1.1rem'}
                    featuresItemsColor={theme.colors.color_1}

                />,
                <Omnitrix.Module_Layers_Widget_5
                    imagesProps={[
                        {
                            src: './img/Acasa/gal_3.jpg',
                            width: 200,
                            height: 220,
                        },
                        {
                            src: './img/Acasa/gal_6.jpg',
                            width: 200,
                            height: 220,
                        },
                        {
                            src: './img/Acasa/gal_4.jpg',
                            width: 220,
                            height: 220,
                        },
                        {
                            src: './img/Acasa/gal_7.jpg',
                            width: 250,
                            height: 220,
                        },
                        {
                            src: './img/Acasa/gal_8.jpg',
                            width: 250,
                            height: 220,
                        },
                        {
                            src: './img/Acasa/pres_1.jpg',
                            width: 250,
                            height: 220,
                        },

                    ]}
                    defaultValues={false}
                />
                ]
            },
            {
                url: '/vila-mica',
                metadata: {
                    title: 'Vila Mica',
                    desc: 'Page 3 description'
                },
                components: [
                    <Omnitrix.Module_Layers_Widget_6
                        title="VILA MICA"
                        bgImage={'./img/Acasa/bg-3.jpg'}
                    />,
                    <Omnitrix.Module_Layers_Widget_9

                    bgImage={'./img/Acasa/camere-bg.jpg'}
                    img1={'./img/Acasa/gal_8.jpg'}
                    img2={'./img/Acasa/gal_8.jpg'}

                    headline={"Apartament Aqua"}
                    headlineFont={theme.fonts.font_1}
                    headlineSize={'1.1rem'}
                    headlineColor={'gray'}
                    
                    title="Aqua"
                    titleFont={theme.fonts.font_2}
                    titleSize={'1.8rem'}
                    titleColor={theme.colors.color_1}
                    
                    content={"Apartamentul Aqua este structurat astfel : doua dormitoare , living cu acvariu și kichineta , o baie și terasa acoperită cu grătar"}
                    contentFont={theme.fonts.font_1}
                    contentSize={"1.1rem"}
                    contentColor={theme.colors.color_1}

                    features="Facilitati 1"
                    featuresFont={theme.fonts.font_1}
                    featuresSize={'1.2rem'}
                    featuresColor={theme.colors.color_1}
                    underlineColor={theme.colors.color_2}

                    featuresItems={[
                        'Zonă de picnic',
                        'Terasă/grădină',
                        'Grătar',
                        'Bucătărie comună',
                        'Wi-Fi',
                        'Parcare',
                        'Camere de familie',
                    ]}

                    featuresItemsFont={theme.fonts.font_1}
                    featuresItemsSize={'1.1rem'}
                    featuresItemsColor={theme.colors.color_1}

                />,
                <Omnitrix.Module_Layers_Widget_5
                    imagesProps={[
                        {
                            src: './img/Acasa/gal_3.jpg',
                            width: 200,
                            height: 220,
                        },
                        {
                            src: './img/Acasa/gal_6.jpg',
                            width: 200,
                            height: 220,
                        },
                        {
                            src: './img/Acasa/gal_4.jpg',
                            width: 220,
                            height: 220,
                        },
                        {
                            src: './img/Acasa/gal_7.jpg',
                            width: 250,
                            height: 220,
                        },
                        {
                            src: './img/Acasa/gal_8.jpg',
                            width: 250,
                            height: 220,
                        },
                        {
                            src: './img/Acasa/pres_1.jpg',
                            width: 250,
                            height: 220,
                        },

                    ]}
                    defaultValues={false}
                />,
                    <Omnitrix.Module_Layers_Widget_9

                    bgImage={'./img/Acasa/camere-bg.jpg'}
                    img1={'./img/Acasa/gal_7.jpg'}
                    img2={'./img/Acasa/gal_7.jpg'}

                    headline={"Apartamentul Ventrum"}
                    headlineFont={theme.fonts.font_1}
                    headlineSize={'1.1rem'}
                    headlineColor={'gray'}
                    
                    title="Ventrum"
                    titleFont={theme.fonts.font_2}
                    titleSize={'1.8rem'}
                    titleColor={theme.colors.color_1}
                    
                    content={"Apartamentul se afla la mansarda vilei. Are doua dormitoare , living cu kichineta, terasa acoperita cu gratar si o priveliste superba catre Muntii Bucegi."}
                    contentFont={theme.fonts.font_1}
                    contentSize={"1.1rem"}
                    contentColor={theme.colors.color_1}

                    features="Facilitati 1"
                    featuresFont={theme.fonts.font_1}
                    featuresSize={'1.2rem'}
                    featuresColor={theme.colors.color_1}
                    underlineColor={theme.colors.color_2}

                    featuresItems={[
                        'Zonă de picnic',
                        'Terasă/grădină',
                        'Grătar',
                        'Bucătărie comună',
                        'Wi-Fi',
                        'Parcare',
                        'Camere de familie',
                    ]}

                    featuresItemsFont={theme.fonts.font_1}
                    featuresItemsSize={'1rem'}
                    featuresItemsColor={theme.colors.color_1}

                />,
                <Omnitrix.Module_Layers_Widget_5
                    imagesProps={[
                        {
                            src: './img/Acasa/gal_3.jpg',
                            width: 200,
                            height: 220,
                        },
                        {
                            src: './img/Acasa/gal_6.jpg',
                            width: 200,
                            height: 220,
                        },
                        {
                            src: './img/Acasa/gal_3.jpg',
                            width: 220,
                            height: 220,
                        },
                        {
                            src: './img/Acasa/gal_7.jpg',
                            width: 250,
                            height: 220,
                        },
                        {
                            src: './img/Acasa/gal_8.jpg',
                            width: 250,
                            height: 220,
                        },
                        {
                            src: './img/Acasa/pres_1.jpg',
                            width: 250,
                            height: 220,
                        },
                    ]}
                    defaultValues={false}
                />,
               
                ]
            },
            {
                url: '/facilitati',
                metadata: {
                    title: 'Facilitati',
                    desc: 'Facilitati'
                },
                components: [
                    <Omnitrix.Module_Layers_Widget_6
                        title="FACILITĂȚI"
                        bgImage={'./img/Acasa/facilitati-bg-top.jpg'}
                    />,
                    <Omnitrix.Module_Layers_Widget_10
                        title="Ciubar"
                        titleFont={theme.fonts.font_1}
                        titleFontSize={'1.7rem'}
                        undelineBorderColor={theme.colors.color_2}
                        titleColor={theme.colors.color_1}

                        headline="Ciubar"
                        headlineFont={theme.fonts.font_1}
                        headlineSize={'1.2rem'}

                        contentFont={theme.fonts.font_1}
                        contentSize={'1.3rem'}
                        contentColor={theme.colors.color_1}
                        
                        text="Pentru că știm cât de mult contează relaxarea"
                        img1={'./img/Acasa/ciubar.jpg'}
                        img2={'./img/Acasa/ciubar.jpg'}
                        invertOrder={true}
                        bgImg={'./img/Acasa/feature_1.jpg'}
                    />,
                    <Omnitrix.Module_Layers_Widget_10
                        title="Design Rustic"
                        titleFont={theme.fonts.font_1}
                        titleFontSize={'1.7rem'}
                        undelineBorderColor={theme.colors.color_2}
                        titleColor={theme.colors.color_1}

                        headline="Design Rustic"
                        headlineFont={theme.fonts.font_1}
                        headlineSize={'1.2rem'}

                        contentFont={theme.fonts.font_1}
                        contentSize={'1.3rem'}
                        contentColor={theme.colors.color_1}
                        
                        text="La noi te vei simți ca acasă"
                        img1={'./img/Acasa/design.jpg'}
                        img2={'./img/Acasa/design.jpg'}
                        invertOrder={false}
                        bgImg={'./img/Acasa/feature_2.jpg'}
                    />,
                    <Omnitrix.Module_Layers_Widget_10
                        title="Peisaj Superb"
                        titleFont={theme.fonts.font_1}
                        titleFontSize={'1.7rem'}
                        undelineBorderColor={theme.colors.color_2}
                        titleColor={theme.colors.color_1}

                        headline="Peisaj Superb"
                        headlineFont={theme.fonts.font_1}
                        headlineSize={'1.2rem'}

                        contentFont={theme.fonts.font_1}
                        contentSize={'1.3rem'}
                        contentColor={theme.colors.color_1}
                        
                        text="Ești inconjurat de frumusețile naturii
                        "
                        img1={'./img/Acasa/gal_1.jpg'}
                        img2={'./img/Acasa/gal_1.jpg'}
                        invertOrder={true}
                        bgImg={'./img/Acasa/feature_3.jpg'}
                    />,
                ]
            },
            {
                url: '/contact',
                metadata: {
                    title: 'Contact',
                    desc: 'Page 3 description'
                },
                components: [
                    <Omnitrix.Module_Layers_Widget_6
                        title="Contact"
                        bgImage={'./img/Acasa/gal_5.jpg'}
                    />,
                    <Omnitrix.Module_Layers_Widget_11
                        onlyMap={true}
                        
                    />
                ]
            }
        ]
    }
}




class Theme {
    // init Area
    constructor()
    {
        this.colors = {}
        this.fonts = {}
    }
    initColor(accent_1, accent_2, dark, darkLight, light, light_2){
        this.colors = {
            accent_1,
            accent_2,
            dark,
            light,
            darkLight,
            light_2
        }
    }
    initFonts(title, text, callToAction){
        this.fonts ={
            title, text, callToAction
        }
    }
    // Getters Colors
    getColorAccent_1(){ return this.colors.accent_1} 
    getColorAccent_2(){ return this.colors.accent_2} 
    getColorDark(){return this.colors.dark}
    getColorDarkLight(){return this.color.darkLight}
    getColorLight(){return this.color.light}
    getColorLight_2(){return this.color.light_2}

    // Getters Fonts
    getFontTitle(){return this.fonts.title}
    getFontText(){return this.fonts.text}
    getFontCallToAction(){return this.fonts.callToAction}
}

export default Theme
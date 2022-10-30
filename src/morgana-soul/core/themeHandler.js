class Theme {
    // init Area
    constructor()
    {
        this.colors = {}
        this.fonts = {}
    }
    initColors(accent_1, dark, light){
        this.colors = {
            accent_1,
            dark,
            light,
        }
    }
    initFonts(title, text, callToAction){
        this.fonts ={
            title, text, callToAction
        }
    }
    // Getters Colors
    getColorAccent_1(){ return this.colors.accent_1} 
    getColorDark(){return this.colors.dark}
    getColorLight(){return this.color.light}

    // Getters Fonts
    getFontTitle(){return this.fonts.title}
    getFontText(){return this.fonts.text}
    getFontCallToAction(){return this.fonts.callToAction}
}

export default Theme
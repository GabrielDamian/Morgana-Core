class Theme {
    // init Area
    constructor()
    {
        this.colors = {}
        this.fonts = {}
    }
    initColors(color_1,color_2,color_3){
        this.colors = {
            color_1,
            color_2,
            color_3
        }
    }
    initFonts(font_1,font_2,font_3){
        this.fonts ={
            font_1,
            font_2,
            font_3
        }
    }
    
}

export default Theme
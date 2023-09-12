class Shape {
    constructor(color, text, textColor, fontSize) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
        this.fontSize = fontSize;
    
    }
    setText(text) {
        this.text = text;
    }
    setColor(color) {
        this.color = color;
    }
    setTextColor(textColor) {
        this.textColor = textColor;
    }
    setFontSize(fontSize) {
        this.fontSize = fontSize;
    }
}

module.exports = Shape;
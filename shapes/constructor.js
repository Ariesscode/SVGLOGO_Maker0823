class Shape {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    
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
}

module.exports = Shape;
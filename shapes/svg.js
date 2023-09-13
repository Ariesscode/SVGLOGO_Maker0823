class SVG {
    constructor(width, height, text, textColor) {
        
        this.width = width;
        this.height = height;
        this.text = text;
        this.textColor = textColor;
    
    }
    render() {
        return `
        <svg version="1.1" width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>
        `;
    }

    setWidth(width) {
        this.width = width;
    }
    setHeight(height) {
        this.height = height;
    }
    setText(text) {
        this.text = text;
    }
    setTextColor(textColor) {
        this.textColor = textColor;
    }
    
}

module.exports = SVG;
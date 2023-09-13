class SVG {
    constructor(width, height, text, textColor, color) {
        
        this.width = width;
        this.height = height;
        this.text = text;
        this.textColor = textColor;
        this.color = color;
    }
    render() {
    return `
    <svg version="1.1" width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">
    <rect x="90" y="40" width="120" height="120" fill="${this.color}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>
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
    setColor(color) {
        this.color = color;
    }
    
}


module.exports = SVG;
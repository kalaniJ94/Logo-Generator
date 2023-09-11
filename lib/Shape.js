// First class here, extended from here. 

class Shape {
    constructor(color, textColor, letters) {
        this.color = color;
        this.textColor = textColor;
        this.letters = letters;
    }
    render(){
        return `
        
    <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
        
        `
    }
}
module.exports = Shape
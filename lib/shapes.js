class SVGGenerator {
    constructor() { }

    generateShape(shape, color, textColor, letters) {
        switch (shape) {
            case 'Circle':
                return this.generateCircleSVG(color, textColor, letters);
            case 'Rectangle':
                return this.generateRectangleSVG(color, textColor, letters);
            case 'Triangle':
                return this.generateTriangleSVG(color, textColor, letters);
            default:
                throw new Error('Invalid shape.');
        }
    }

    generateCircleSVG(data) {
        console.log("circle", data)
        return `
    <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="90" cy="50" r="50" fill=${data.color}></circle>
        <text  x="75" y="50" font-size="16" fill=${data.textColor}>${data.letters}</text>
    </svg>
        `
    }
    generateRectangleSVG(data) {
        console.log("Rectangle" + data)
        return `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect height="100" width="200" x="100" y="60" fill=${data.color}/>
        <text x="150" y="105" font-size="16" fill= ${data.textColor}>${data.letters}</text>
        </svg>
        `
    }
    generateTriangleSVG(data){
        console.log("triangle" + data)
        return `
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,1 1,95 99,95" fill=${data.color} /> 
        <text x="35" y="80" font-size="16" fill=${data.textColor}>${data.letters}</text>
    </svg> 
        `
    }
};

function generateSVG(shape, color, textColor, letters){
    const svgGenerator = new SVGGenerator();
    return svgGenerator.generateShape(shape,color,textColor, letters);
}

module.exports = {
    SVGGenerator,
    generateSVG,
}
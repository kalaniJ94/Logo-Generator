const fs = require('fs');
const { JSDOM } = require('jsdom')
const { SVGGenerator } = require('/Users/kalan/bootcamp/Challenges/Logo-Generator/lib/shapes.js');
const { parse } = require('svg-parser');


describe ('SVGGenerator', () => {
    let svgGenerator;

    beforeAll(() => {
     svgGenerator = new SVGGenerator();

    });

    it('should generate SVG for circle', ()=> {
        const shape = 'Circle';
        const color = 'blue';
        const textColor = 'white';
        const letters = 'KDJ';

        const svg = svgGenerator.generateShape(shape, color, textColor, letters);
       expect(svgGenerator.generateSHape).toHaveBeenCalledWith(shape, color, textColor, letters);
    });
    it('should generate Circle with correct position', () => {
        const shape = 'Circle';
        const color = 'blue';
        const textColor = 'white';
        const letters = 'KDJ';

        const svgString = generateSVG(shape, color, textColor, letters);
        const parsedSVG = parse(svgString);

        const circle = parsedSVG.children.find((child) => child.tagName === 'circle');
        const text = parsedSVG.children.find((child) => child.tagName === 'text');

        expect(circle.properties.cx).toBe('90');
        expect(circle.properties.cy).toBe('50');
        expect(text.properties.x).toBe('75');
        expect(text.properties.y).toBe('50');

    });


});

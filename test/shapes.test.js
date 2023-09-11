const fs = require('fs');
const { JSDOM } = require('jsdom')
const { parse } = require('svg-parser');
const { Shape } = require("../lib/Shape");
const { Circle, Square, Triangle} = require("../lib/function");
const { compileSVG } = require("../index");


describe('shape', () => {
    let shape;

    // beforeAll(() => {
    //     shape = new Shape();
    // });

    it('should render shape class correctly', () => {
        let shape = 'Circle';
    });
});
describe('Circle', () => {
    it('should generate SVG for Circle', () => {
        const color = 'blue';
        const textColor = 'white';
        const letters = 'KDJ';

        const circle = new Circle(color, textColor, letters);
        const svg = circle.insertCircleSVG() + circle.insertText();

        expect(svg).toMatch(/<circle/);
        expect(svg).toMatch(new RegExp(`fill="${color}"`));
        expect(svg).toMatch(new RegExp(`fill="${textColor}"`));
        expect(svg).toMatch(new RegExp(letters));
    });
});
    


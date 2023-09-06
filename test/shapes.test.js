const fs = require('fs');
const { JSDOM } = require('jsdom')

function readSVGFile(filePath) {
    const svgString = fs.readFileSync(filePath, 'utf-8');
    const dom = new JSDOM(svgString);
    return dom.window.document.querySelector('svg');
};


describe('SVG Shapes and Text', () => {
    test('Circle should have correct attributes', () => {
      const circleSVG = readSVGFile('./a.svg');
      const circleElement = circleSVG.querySelector('circle');
  
      // Add your assertions here to test the circle and text elements
      expect(circleElement).toHaveAttribute('cx', '90');
      expect(circleElement).toHaveAttribute('cy', '50');
      expect(circleElement).toHaveAttribute('r', '50');
      })
});
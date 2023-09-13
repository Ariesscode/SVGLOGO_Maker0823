const SVG = require("../shapes/SVG_constructor");
const Square = require("../shapes/square");


describe("Square", () => {
  test("should render a 300 x 200 svg element", () => {
    const expectedSvg = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="90" y="40" width="120" height="120" fill="${this.color}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
    const svg = new SVG();
    svg.setWidth("300");
    svg.setHeight("200");
    const actualSvg = svg.render();
    expect(actualSvg.trim()).toEqual(expectedSvg.trim());
  });
  test("should append text element", () => {
    const expectedSvg = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="90" y="40" width="120" height="120" fill="white" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">A</text>
    </svg>
    `;
    const svg = new SVG();
    svg.setText("A");
    svg.setTextColor("white");
    svg.setHeight("200");
    svg.setWidth("300");
    svg.setColor("white");
    const actualSvg = svg.render();
    console.log(actualSvg);
    expect(actualSvg.trim()).toEqual(expectedSvg.trim());
  });
  test("should set text message and color", () => {
    const expectedSvg = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="90" y="40" width="120" height="120" fill="white" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text>
    </svg>
    `;
    const svg = new SVG();
    svg.setText("SVG");
    svg.setTextColor("#333");
    svg.setColor("white");
    svg.setHeight("200");
    svg.setWidth("300");
    expect(svg.render().trim()).toEqual(expectedSvg.trim());
  });
});
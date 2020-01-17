export const rgbToHex = ([r, g, b]) => {
  return "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("");
};

class Color extends React.PureComponent {
  constructor(r, g, b, hex) {
    this.rgb = r, g, b
    this.hex = hex
  }

  getRgb(rgb = this.rgb) {

  }

  getHex(hex = this.hex) {

  }
}
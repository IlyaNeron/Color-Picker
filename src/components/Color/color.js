export const rgbToHex = ({ red: r, green: g, blue: b }) => {
  return "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("");
};

export const hexToRgb = hex => {
  hex = hex.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return { red: r, green: g, blue: b };
};

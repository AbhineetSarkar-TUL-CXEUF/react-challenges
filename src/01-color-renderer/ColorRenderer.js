import Color from "./Color";
import { Fragment } from "react";

const colors = [
  {
    hex: "#91A6FF",
    name: "Cornflower Blue",
  },
  {
    hex: "#FF88DC",
    name: "Persian Pink",
  },
  {
    hex: "#80FF72",
    name: "Screamin Green",
  },
  {
    hex: "#FF5154",
    name: "Tart Orange",
  },
];

export default function ColorRenderer() {
  return (
    <Fragment>
      {colors.map((color) => (
        <Color key={color.hex} hex={color.hex} name={color.name} />
      ))}
    </Fragment>
  );
}

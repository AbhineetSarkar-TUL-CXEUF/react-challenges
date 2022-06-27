import React, { useContext, useState } from "react";
import ColorContext, { ColorContextProvider } from "../store/color-context";

function ColorPicker() {
  const colors = ["red", "blue", "yellow", "green", "black", "white", "purple"];
  const colorCtx = useContext(ColorContext);
  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map((color) => (
        <button
          key={color}
          style={{
            backgroundColor: color,
            display: "inline-block",
            width: "20px",
            height: "20px",
            margin: "2px 4px 10px",
          }}
          onClick={() => colorCtx.setColor(color)}
        />
      ))}
    </div>
  );
}

function Pixel() {
  const colorCtx = useContext(ColorContext);
  const [bgColor, setBackgroundColor] = useState("lightGrey");
  return (
    <div
      style={{
        height: "20px",
        width: "20px",
        backgroundColor: bgColor,
        margin: "1px",
      }}
      onClick={() => setBackgroundColor(colorCtx.color)}
    />
  );
}

function Pixels() {
  const pixels = [];
  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(10, 1fr)",
        width: "210px",
        margin: "0 auto",
      }}
    >
      {pixels}
    </div>
  );
}

export default function PixelArt() {
  return (
    <ColorContextProvider>
      <ColorPicker />
      <Pixels />
    </ColorContextProvider>
  );
}

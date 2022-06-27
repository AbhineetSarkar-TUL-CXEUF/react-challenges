import { useState, createContext } from "react";

const ColorContext = createContext();

export const ColorContextProvider = ({ children }) => {
  const [color, setColor] = useState("white");
  return (
    <ColorContext.Provider
      value={{
        color: color,
        setColor: (color) => {
          setColor(color);
        },
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export default ColorContext;

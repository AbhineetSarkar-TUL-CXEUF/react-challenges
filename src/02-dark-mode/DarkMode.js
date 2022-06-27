import { useState } from "react";
export default function DarkMode() {
  const [darkModeOn, setDarkModeOn] = useState(false);
  return (
    <div className={`page ${darkModeOn ? "dark-mode" : ""}`}>
      <button className="dark-mode-button" onClick={() => setDarkModeOn(true)}>
        Dark Mode
      </button>
      <button
        className="light-mode-button"
        onClick={() => setDarkModeOn(false)}
      >
        Light Mode
      </button>
    </div>
  );
}

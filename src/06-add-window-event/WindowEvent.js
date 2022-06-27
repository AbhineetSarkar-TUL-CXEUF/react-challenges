import { useEffect } from "react";
const myFunc = () => {
  alert("Double Clicked!");
};
export default function WindowEvent() {
  useEffect(() => {
    window.addEventListener("dblclick", myFunc);

    return () => {
      window.removeEventListener("dblclick", myFunc);
    };
  }, []);
  console.count("rcnt");
  return <h2>Window event active</h2>;
}

import { useEffect, useState } from "react";
export default function DogPics() {
  // API: https://dog.ceo/dog-api/
  const [url, setUrl] = useState("");
  const getDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setUrl(data.message);
        }
      });
  };
  useEffect(() => {
    getDog();
  }, []);
  return (
    <div className="dog-pics">
      <img src={url} alt="a Dog" style={{ height: "300px" }} />
      <button onClick={getDog}>🐶</button>
    </div>
  );
}

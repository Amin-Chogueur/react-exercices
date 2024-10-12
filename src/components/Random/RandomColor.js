import { useState } from "react";
import "./style.css";
function RandomColor() {
  const [colorType, setColorType] = useState("rgb");
  const [color, setColor] = useState();
  function setTypeColorToRgbColor() {
    setColorType("rgb");
    setColor("");
  }
  function setTypeColorToHexColor() {
    setColorType("hex");
    setColor("");
  }
  function manageRandomColor(num) {
    const randomNum = Math.floor(Math.random() * num);
    return randomNum;
  }
  function getRandomColor() {
    if (colorType === "rgb") {
      const r = manageRandomColor(255);
      const g = manageRandomColor(255);
      const b = manageRandomColor(255);
      const newColor = `rgb(${r},${g},${b})`;
      setColor(newColor);
    } else {
      const hexNum = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
      ];
      let randomHex = "#";
      for (let i = 0; i < 6; i++) {
        randomHex += hexNum[manageRandomColor(16)];
      }
      setColor(randomHex);
    }
  }
  return (
    <div className="random">
      <button onClick={() => getRandomColor()}>new color</button>
      <button onClick={setTypeColorToRgbColor}>rgb</button>
      <button onClick={setTypeColorToHexColor}>hex</button>
      <div className="result" style={{ backgroundColor: color }}>
        <p>{colorType === "rgb" ? "rgb" : "hex"}</p>
        <div>{color}</div>
      </div>
    </div>
  );
}

export default RandomColor;

/* */

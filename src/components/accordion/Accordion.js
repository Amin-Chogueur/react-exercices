import { data } from "./data";
import "./accordion.css";
import { useState } from "react";
function Accordion() {
  const num = data.length;
  const [mode, setMode] = useState("multy");
  const [showAnswer, setShowAnswer] = useState(Array(num).fill(false));
  function handleShowMultyAnswer(index) {
    const newArr = [...showAnswer];
    newArr[index] = !newArr[index];
    setShowAnswer(newArr);
  }
  function handleShowOneAnswer(index) {
    setShowAnswer(
      showAnswer.map((answer, i) =>
        i === index ? (answer === true ? false : true) : false
      )
    );
  }
  function handleMode() {
    setMode(mode === "multy" ? "single" : "multy");
  }
  return (
    <ul className="accordion">
      <button onClick={handleMode}>
        {mode === "multy" ? "single answer" : "multy answer"}
      </button>
      {data.map((item, index) => (
        <li key={item.id} className="acc-item">
          <h2>
            <span>{item.question}</span>{" "}
            <span
              onClick={
                mode === "multy"
                  ? () => handleShowMultyAnswer(index)
                  : () => handleShowOneAnswer(index)
              }
            >
              {showAnswer[index] === true ? "-" : "+"}
            </span>
          </h2>
          {showAnswer[index] && <p>{item.answer}</p>}
        </li>
      ))}
    </ul>
  );
}

export default Accordion;

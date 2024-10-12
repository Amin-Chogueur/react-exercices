import { FaStar } from "react-icons/fa";
import "./stars.css";
import { useState } from "react";
function Stars({ num }) {
  const numOfStars = Array(num).fill(null);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  function handleClick(i) {
    setRating(i);
  }
  function handleMouseEntre(i) {
    setHover(i);
  }
  function handleMouseLeave() {
    setHover(rating);
  }
  return (
    <div className="stars">
      {numOfStars.map((star, i) => {
        i += 1;
        return (
          <FaStar
            key={i}
            className={i <= hover ? "active star" : "star"}
            size={30}
            onClick={() => handleClick(i)}
            onMouseEnter={() => handleMouseEntre(i)}
            onMouseLeave={() => handleMouseLeave()}
          />
        );
      })}
    </div>
  );
}

export default Stars;

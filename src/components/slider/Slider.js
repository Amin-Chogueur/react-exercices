import "./style.css";
import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
function Slider() {
  const url = "https://picsum.photos/v2/list?page=1&limit=10";
  const [myData, setMyData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  async function fetchData(url) {
    try {
      setIsLoading(true);
      const responce = await fetch(url);
      if (!responce.ok) throw new Error();
      const data = await responce.json();
      setMyData(data);
      console.log(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(
    function () {
      fetchData(url);
    },
    [url]
  );
  if (isLoading) {
    return <div className="loading"> Loading...</div>;
  }
  if (error) {
    return <div className="loading"> {error}</div>;
  }
  function handleLeftClick() {
    if (currentSlide === 0) {
      setCurrentSlide(myData.length - 1);
    } else {
      setCurrentSlide((currentSlide) => currentSlide - 1);
    }
  }
  function handleRightClick() {
    if (currentSlide === myData.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((currentSlide) => currentSlide + 1);
    }
  }
  function handleClickCicle(i) {
    setCurrentSlide(i);
  }
  return (
    <div className="slider">
      <BsArrowLeftCircleFill className="arrow left" onClick={handleLeftClick} />
      {myData.map((item, i) => (
        <div key={item.id} className="images">
          <img
            src={item.download_url}
            alt={item.id}
            className={currentSlide === i ? "" : "hidden"}
          ></img>
        </div>
      ))}
      <BsArrowRightCircleFill
        className="arrow right"
        onClick={handleRightClick}
      />
      <div className="circls-container">
        {myData.map((_, i) => (
          <span
            className={currentSlide === i ? "circle active" : "circle"}
            onClick={() => handleClickCicle(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slider;

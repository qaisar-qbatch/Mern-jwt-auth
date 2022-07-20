import { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

const colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

const QuoteMaker = () => {
  const [quotes, setQuote] = useState(["Qaisar"]);
  const [count, setCount] = useState(0);
  const [randomColor, setRandomColor] = useState("#73A857");

  const handleClick = () => {
    setCount(count + 1);
    setRandomColor(colors[Math.floor(Math.random() * colors.length)]);
    console.log(randomColor, "R-Colorrrr");
  };
  useEffect(() => {
    console.log(count);
  }, [count]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      );
      const res = await data.json();
      setQuote(res.quotes);
    };
    fetchData();
    console.log(quotes);
  }, []);

  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: randomColor,
        color: randomColor,
        width: "100em",
        height: "100em",
      }}
    >
      <div className=" card rounded-3  position-absolute top-50 start-50 translate-middle  p-5 my-5">
        {/* Quote Text */}
        <h3>
          <i className="fa fa-quote-left"> </i>
          {quotes && quotes[count].quote}
        </h3>

        {/* Author Name */}
        <div className="d-flex justify-content-end mx-4">
          <p> {quotes && quotes[count].author}</p>
        </div>

        {/* Social Buttons */}
        <div className="d-flex flex-row  justify-content-lg-between ">
          <div className="">
            <button
              className=" btn btn-warning clr-white  mx-3"
              style={{ backgroundColor: randomColor, color: "white" }}
            >
              <i className="fa fa-twitter"></i>
            </button>

            <button
              className="btn btn-warning color:white"
              style={{ backgroundColor: randomColor, color: "white" }}
            >
              <i className="fa fa-tumblr"></i>
            </button>
          </div>
          {/* //NewQuote */}
          <div className="justify-content-end  mx-3">
            <button
              onClick={handleClick}
              className="btn btn-success"
              style={{ backgroundColor: randomColor, color: "white" }}
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuoteMaker;

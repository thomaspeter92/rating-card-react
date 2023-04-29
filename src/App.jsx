import { useState } from "react";
import StarIcon from "./assets/icon-star.svg";
import PhoneSVG from "./assets/phone.svg";

const nums = [1, 2, 3, 4, 5];

function App() {
  const [selectedNum, setSelectedNum] = useState(0);
  const [page, setPage] = useState(1);

  return (
    <div className="app">
      <div className="container">
        {page === 1 ? (
          <div className="page1">
            <img src={StarIcon} />
            <h1 className="sen1">How did we do?</h1>
            <p className="sen2">
              Please let us know we did with your support request. All feedback
              is appreciated to help us improve our offering!
            </p>
            {nums.map((num, i) => (
              <div
                onClick={() => {
                  setSelectedNum(num);
                }}
                className={`num ${selectedNum === num ? "selected" : null}`}
              >
                {num}
              </div>
            ))}
            <button
              onClick={function (e) {
                setTimeout(() => {
                  setPage(2);
                }, 3000);
              }}
              className="sub-btn"
            >
              SUBMIT
            </button>
          </div>
        ) : null}
        {page === 2 ? (
          <div className="page2">
            <img className="phone-icon" src={PhoneSVG} />
            <p className="select-num">You Selected {selectedNum} our of 5</p>
            <p className="thank">Thank you!</p>
            <p className="para">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don't hesitate to get in touch!
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;

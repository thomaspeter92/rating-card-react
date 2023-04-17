import { useState } from "react"
import StarIcon from './assets/icon-star.svg'
import PhoneSVG from './assets/phone.svg'


const nums = [1,2,3,4,5]

function App() {
  const [selectedNum, setSelectedNum] = useState(0)
  const [page, setPage] = useState(1)

  return (
    <div className="app">
      <div className="container">
        {page === 1 ? 
        <>
          <div className="iconContainer">
          <img src={StarIcon} alt="star icon" />
          </div>
          <p className="bigText">How did we do?</p>
          <p className="smallText">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          <div className="numBox">
          {nums.map((num,i) => (
            <div onClick={() => {setSelectedNum(num)}} className={`num ${selectedNum === num ? 'selected' : null}`}>{num}</div>
          ))
          }
          </div>
          <button onClick={() => setPage(2)}>SUBMIT</button>
        </>
       : 

        <div className="page2">
        <img src={PhoneSVG} />
        <div className="userSelected">
          <p>You Selected {selectedNum} our of 5</p>
        </div>
        <p className="bigText">Thank you!</p>
        <p className="smallText">  We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!</p>
       </div>
       }
       
      </div>
    </div>
  )
}

export default App

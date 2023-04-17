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
          <div className="page1">
              {nums.map((num,i) => (
                <div onClick={() => {setSelectedNum(num)}} className={`num ${selectedNum === num ? 'selected' : null}`}>{num}</div>
              ))
              }
          </div>
       : null }
       {page === 2 ?
        <div className="page2">
        
        </div>
        : null}
      </div>
    </div>
  )
}

export default App

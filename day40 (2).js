import "./index.css"
import React,{useState } from "react"
const File =()=> {
    const [num, setnum] = useState(0)
    const increase=()=>{
        setnum(num+1)
    }
    const decrease=()=>{
        setnum(num-1)
    }
    const reset=()=>{
      setnum(0)
    }
    return (
        <div>
            <h1>{num}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <div>
              <button className='reset' onClick={reset}>Reset</button>
            </div>
        </div>
        
    )
}
export default File
import React from 'react'
import {Link} from 'react-router-dom'
// import StopWatch from './stopwatch'
export default function Page2 () {
  return (
  <>
  {/* <StopWatch/> */}
  <div>
    <h1>This is page 2</h1>
    <Link to="/">Home</Link>
    </div>
  </>
  )
}
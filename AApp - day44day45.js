import './App.css';
import StopWatch from './page1';
import Page2 from "./page2";
import React, { useEffect, useRef, useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom'
// import {Page2} from './page2'
// import {navb}

function App() {
  const [timeSEC, setTimeSEC] = useState(0);
  const [timeMIN, setTimeMIN] = useState(0);
  const [timeHOUR, setTimeHOUR] = useState(0);
  const timeHandler = useRef(null);
  const navigate = useNavigate();
  
  const startTimer = () => {
    timeHandler.current = setInterval(() => {
      setTimeSEC(prevTime => {
        if (prevTime === 59) {
          setTimeMIN(prevMin => {
            if (prevMin === 59) {
              setTimeHOUR(prevHour => prevHour + 1);
              return 0;
            } else {
              return prevMin + 1;
            }
          });
          return 0;
        } else {
          return prevTime + 1;
        }
      });
    }, 1000);
  };

  const restartTimer = () => {
    clearInterval(timeHandler.current);
    setTimeSEC(0);
    setTimeMIN(0);
    setTimeHOUR(0);
    startTimer(); 
  };

  const pauseTimer = () => {
    clearInterval(timeHandler.current);
  };

  useEffect(() => {
    // Clean up interval when unmounting or navigating away
    return () => clearInterval(timeHandler.current);
  }, []);

  return (
    <>
      <h1>{timeHOUR}:{timeMIN}:{timeSEC}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={restartTimer} className="btn restart">Restart</button>
      <button onClick={pauseTimer} className="btn pause">Pause</button>
    <Routes>
      <Route path='/'element={<StopWatch/>}/>
      <Route path='/2ndpage' element={<Page2/>}/>
    </Routes>
    </>
  );
}
export default App;

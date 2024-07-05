import Header from './components/Header/Header';
import Section1 from './components/Section1/Section1';

import { useEffect, useState } from "react";
import axios from "axios";
import { Prices } from './types/Prices';
import PopUp from './components/PopUp/PopUp';

function App() {

  const [prices, setPrices] = useState<Prices[]>([])
  const [seconds, setSeconds] = useState(40)

  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0")
  const secondsString = String(seconds % 60).padStart(2, "0")
  let isFired = seconds

  useEffect(() => {
    axios.get<Prices[]>("https://t-pay.iqfit.app/subscribe/list-test").then((res) => {
      setPrices([...res.data]);
    });
  }, []);

  useEffect(() => {
    setInterval(() => {
      setSeconds((prev) => Math.max(prev - 1, 0))
    }, 1000)
  }, [])

  return (
    <main className="main">
      <PopUp prices={prices.slice(8, 12)} seconds={seconds}/>
      <Header minutes={minutesString} seconds={secondsString} isFired={isFired}/>
      <Section1 prices={prices} seconds={seconds}/>
    </main>
  );
}

export default App;

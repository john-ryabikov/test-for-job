import { Prices } from "../../types/Prices"
import PriceForm from "./PriceForm"
import PriceBlockSale from "./PriceBlockSale"
import { useEffect, useState } from "react"
import PriceBlock from "./PriceBlock"

interface SectionProps {
  prices: Prices[]
  seconds: number
}

const Section1 = ({ prices, seconds }:SectionProps) => {

  const [isEndless, setIsEndless] = useState(false)

  useEffect(() => {
    const isPopular = prices.some(el => el.isPopular === true)
    if (seconds === 0) {
      setTimeout(() => {
        setIsEndless(isPopular)
      }, 800)
    }
  }, [prices, seconds])

  return (
    <section className='main-block'>
      <div className="container">
        <h1 className="main-block__h">Выберите подходящий тарифный план
        </h1>
        <div className="main-block__cont">
          <img className="main-block__img" src="img/Section-1/main_img.png" alt=""/>
          <div className="main-block__prices">
              <div className="main-block__prices main-block__prices_window">
                {prices.length === 0 ? (
                <div className='loading'></div>
                ) : (
                  <>
                    {!isEndless && <PriceBlockSale prices={prices.slice(0, 4)} seconds={seconds}/>}
                    {isEndless && <PriceBlock prices={prices.slice(4, 8)}/>}
                  </>
                )}   
              </div>
            <p className='main-block__txt'>Следуя плану на 3 месяца, люди получают в 2 раза лучший результат, чем за 1 месяц</p>
            <PriceForm/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section1

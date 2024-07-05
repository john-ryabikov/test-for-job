import { useMediaQuery } from '../../hooks/MediaQuery/useMediaQuery';
import { Prices } from '../../types/Prices';
import { useState } from 'react';
import { motion } from "framer-motion"

interface PriceSaleProps {
  prices: Prices[]
  seconds?: number
}

const PriceBlockSale = ({ seconds, prices }: PriceSaleProps) => {

  const isMobile = useMediaQuery("(max-width: 767px)");

  const [activeIndex, setActiveIndex] = useState(0);

  const onClickSlide = (index: number) => {
    setActiveIndex(index)
}

  return (
    <motion.div className='main-block__price-row'
      initial={{y: 0, opacity: 1}}
      animate={{y: -50, opacity: 0}}
      viewport={{once: true}}
      transition={{ delay: seconds }}
    >
      {prices.map((price, i) => (
        <div
          key={i}
          onClick={() => {onClickSlide(i)}} 
          className={activeIndex === i ? 'price-card price-card_selected' : 'price-card'}
        >
          {price.price === 699 && <img className="price-card__sale-img" src={"img/Section-1/sale_30.svg"} alt=""/>}
          {price.price === 999 && <img className="price-card__sale-img" src={"img/Section-1/sale_40.svg"} alt=""/>}
          {price.price === 2990 && <img className="price-card__sale-img" src={"img/Section-1/sale_50.svg"} alt=""/>}
          {price.price === 5990 && <img className="price-card__sale-img" src={"img/Section-1/sale_70.svg"} alt=""/>}
          <div className={price.price === 5990 ? 'price-card__cont_row' : 'price-card__cont'}>
            <p className={price.price === 5990 ? 'price-card__title price-card__title_row' : 'price-card__title'}>{price.name}</p>
            <div className={price.price === 5990 ? 'price-card__cost-cont price-card__cost-cont_row' : 'price-card__cost-cont'}>
              <p className='price-card__cost'>{price.price}₽</p>
              <p className={price.price === 5990 ? 'price-card__prev-cost price-card__prev-cost_row' : 'price-card__prev-cost'}>
                {price.price === 699 && <span>999₽</span>}
                {price.price === 999 && <span>1699₽</span>}
                {price.price === 2990 && <span>5999₽</span>}
                {price.price === 5990 && <span>18 990₽</span>}
              </p>
            </div>
            {price.price === 699 && <p className='price-card__text'>Чтобы просто начать 👍🏻</p>}
            {price.price === 999 && <p className='price-card__text'>Привести тело впорядок 💪🏻</p>}
            {price.price === 2990 && <p className='price-card__text'>Изменить образ жизни 🔥</p>}
            {price.price === 5990 && <p className='price-card__text price-card__text_row'>
              {isMobile ? 'Всегда быть в форме ⭐️': 'Всегда быть в форме и поддерживать своё здоровье ⭐️'}
            </p>}
          </div>
        </div>  
      ))}
    </motion.div>
  )
}

export default PriceBlockSale

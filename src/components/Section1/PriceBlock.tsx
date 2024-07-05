import { useMediaQuery } from '../../hooks/MediaQuery/useMediaQuery';
import { Prices } from '../../types/Prices';
import { useState } from 'react';
import { motion } from "framer-motion"

interface PriceBlockProps {
  prices: Prices[]
}

const PriceBlock = ({ prices }: PriceBlockProps) => {

  const isMobile = useMediaQuery("(max-width: 767px)");

  const [activeIndex, setActiveIndex] = useState(0);

  const onClickSlide = (index: number) => {
    setActiveIndex(index)
}

  return (
    <motion.div className='main-block__price-row'
      initial={{y: 50, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      viewport={{once: true}}
      transition={{ delay: 0.2 }}
    >
      {prices.map((price, i) => (
        <div
          key={i}
          onClick={() => {onClickSlide(i)}} 
          className={activeIndex === i ? 'price-card price-card_selected' : 'price-card'}
        >
          <div className={price.price === 18990 ? 'price-card__cont_row' : 'price-card__cont'}>
            <p className={price.price === 18990 ? 'price-card__title price-card__title_row' : 'price-card__title'}>{price.name}</p>
            <div className={price.price === 18990 ? 'price-card__cost-cont price-card__cost-cont_row' : 'price-card__cost-cont'}>
              <p className={price.price === 18990 ? 'price-card__cost-2' : 'price-card__cost'}>
                {price.price === 18990 ? "18 990" : price.price}₽
            </p>
              <p className='price-card__prev-cost price-card__prev-cost_empty'></p>
            </div>
            {price.price === 999 && <p className='price-card__text'>Чтобы просто начать 👍🏻</p>}
            {price.price === 1690 && <p className='price-card__text'>Привести тело впорядок 💪🏻</p>}
            {price.price === 5990 && <p className='price-card__text'>Изменить образ жизни 🔥</p>}
            {price.price === 18990 && <p className='price-card__text price-card__text_row'>
              {isMobile ? 'Всегда быть в форме ⭐️': 'Всегда быть в форме и поддерживать своё здоровье ⭐️'}
            </p>}
          </div>
        </div>  
      ))}
    </motion.div>
  )
}

export default PriceBlock

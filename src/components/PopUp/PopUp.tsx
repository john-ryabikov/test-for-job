import { useEffect, useState } from "react"
import { Prices } from "../../types/Prices"

interface PopupProps {
    prices: Prices[]
    seconds: number
  }

const PopUp = ({ prices, seconds }: PopupProps) => {

    const [type, setType] = useState('1 месяц')
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        const isDiscount = prices.some(el => el.isDiscount === true)
        if (seconds === 0) {
            setTimeout(() => {
                setShowModal(isDiscount)
            }, 1800)
        }
    }, [seconds, prices])

    useEffect(() => {
        if (showModal) {
            document.querySelector("html")?.classList.add('overflow-lock');
          } else {
            document.querySelector("html")?.classList.remove('overflow-lock');
          }
      }, [showModal])

    return (
        <div className={showModal ? "popup popup_open" : "popup"}>
            <div className="popup__window">
                <span className="popup__label">горящее предложение</span>
                <button className="popup__close" onClick={() => {setShowModal(false)}}>
                    <img src="img/PopUp/close_icon.svg" alt="x"/>
                </button>
                <h2 className="popup__title">Не упусти свой <b>последний шанс</b></h2>
                <p className="popup__text-sale">
                    <span className="popup__text-sale_1">Мы знаем, как трудно начать.. <b>Поэтому!</b></span><br/>
                    <span className="popup__text-sale_2">Дарим скидку для <b>лёгкого старта 🏃‍♂️</b></span>
                </p>
                <form className="popup__form">
                    <p className="popup__form-txt">Посмотри, что мы для тебя приготовили 🔥</p>
                    <div className="popup__form-prices">
                        {prices.map((price) => (
                            <label className="popup__form-label" id="radio" key={price.id}>
                                <input 
                                    className="popup__form-input-radio" 
                                    type="radio" 
                                    name="radio"
                                    checked={price.name === type}
                                    onChange={() => {setType(price.name)}} 
                                />
                                <div className="popup__form-input">
                                    <img className="popup__form-input-img"src="img/Popup/checked_icon.svg" alt="O"/>
                                </div>
                                <div className="popup__form-price-cont">
                                    <p className="popup__price-days">{price.name}</p>
                                    <div className="popup__prev-price-name">
                                        {price.price === 599 && <img src="img/PopUp/old_price_999.svg" alt=""/>}
                                        {price.price === 799 && <img src="img/PopUp/old_price_1690.svg" alt=""/>}
                                        {price.price === 1690 && <img src="img/PopUp/old_price_5990.svg" alt=""/>}
                                    </div>
                                    <span className="popup__price-br"></span>
                                    <p className="popup__price-sale">
                                        <span className="popup__price-sale_cost">{price.price}₽</span>
                                        {price.price === 599 && <img className="popup__price-sale_img" src="img/Section-1/sale_40.svg" alt=""/>}
                                        {price.price === 799 && <img className="popup__price-sale_img" src="img/Section-1/sale_50.svg" alt=""/>}
                                        {price.price === 1690 && <img className="popup__price-sale_img" src="img/Section-1/sale_60.svg" alt=""/>}
                                    </p>
                                </div>
                            </label>
                        ))}
                    </div>
                    <button className="popup__form-btn" onClick={(e) => {e.preventDefault()}}>Начать тренироваться</button>
                </form>
            </div>
        </div>
    )
}

export default PopUp

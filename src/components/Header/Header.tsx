import { TimerProps } from '../../types/Timer'
import Timer from './Timer'

const Header = ({minutes, seconds, isFired}: TimerProps) => {
  return (
    <header className='header'>
        <div className='container'>
            <div className='header__cont'>
                <p className='header__title'>Скидка дейсвтует:</p>
                <Timer minutes={minutes} seconds={seconds} isFired={isFired}/>
            </div>
        </div>
    </header>
  )
}

export default Header


import { TimerProps } from "../../types/Timer"

const Timer = ({minutes, seconds, isFired}: TimerProps) => {

  const classTimer = (trigger: number): string => {
    if (trigger < 31 &&  trigger > 0) {
      return 'timer__count-num timer__count-num_red'
    } else if (trigger === 0) {
      return 'timer__count-num timer__count-num_stop'
    }
    return 'timer__count-num'
  }

  return (
    <div className='timer'>
        <p className='timer__count'>
            <span className={classTimer(isFired)}>{minutes}</span>
            <span className='timer__count-name'>минут</span>
        </p>
        {isFired === 0 ? <img src="img/Header/sub_icon_red.svg" alt=":"/> : <img src="img/Header/sub_icon.svg" alt=":"/>}
        <p className='timer__count'>
            <span className={classTimer(isFired)}>{seconds}</span>
            <span className='timer__count-name'>секунд</span>
        </p>
    </div>
  )
}

export default Timer

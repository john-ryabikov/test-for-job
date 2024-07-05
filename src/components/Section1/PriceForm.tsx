import { Controller, SubmitHandler, useForm } from 'react-hook-form'

interface CheckForm {
  checkbox: boolean
}

const PriceForm = () => {

  const {handleSubmit, control} = useForm<CheckForm>()

  const onSubmitForm: SubmitHandler<CheckForm> = data => {
    console.log(data)
  }

  return (
    <form className='price-form' onSubmit={handleSubmit(onSubmitForm)}>
      <div className='price-form__check'>
        <Controller
          control={control} 
          name='checkbox'
          render={({field}) => (
            <div className='price-form__checkbox' onClick={() => field.onChange(!field.value)}>
              {!field.value && <img src="img/Section-1/chek_icon.svg" alt="v"/>}
            </div>
          )}
        />
        <p className='price-form__checktext'>Я соглашаюсь с <b>Правилами сервиса</b> и условиями <b>Публичной оферты.</b></p>
      </div>
      <button className='price-form__btn'>Купить</button>
      <span className='price-form__txt'>Нажимая «Купить», Пользователь соглашается на автоматическое списание денежных средств по истечению купленного периода. Дальнейшие списания по тарифам участвующим в акции осуществляются по полной стоимости согласно оферте.</span>
    </form>
  )
}

export default PriceForm

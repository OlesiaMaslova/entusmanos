import React from 'react';
import './SubmitForm.css';

function SubmitForm(props) {

const [data, setData] = React.useState({})
const [isValid, setIsValid] = React.useState(true);

function submitOrder(event) {
 event.preventDefault();
 if(!event.target.checkValidity()) {
  setIsValid(false);
 }
 props.onSubmit(data);
 event.target.reset();
}

function getInputValue(event) {
  const { name, value} = event.target;
 setData({...data, 
  [name] :value});
 

}




  return (
    <div className="form-container">

   <form className='form' action="" encType="text/plain" onSubmit={submitOrder}>
   <label>
    <p className='form__input-title'>Su Nombre</p>
    <input className='form__input' type="text" name="name" placeholder='Como se llama?' onChange={getInputValue} required />
  </label>
  <label>
    <p className='form__input-title'>Nombre de la tarea</p>
    <input className='form__input' type="text" name="title" placeholder='por ej. corte del cesped' onChange={getInputValue} required />
  </label>
  <label>
   <p className='form__input-title'>Que ayuda necesita?</p>
    <textarea className='form__input  form__input_place_order'  type="text" name="order" placeholder='Aqui escribe detalles de la tarea' onChange={getInputValue} required />
  </label>
  <label>
    <p className='form__input-title'>Valor de servicio?</p>
    <input className='form__input'  type="number" name="price" placeholder='Renumeracion' onChange={getInputValue} required />
  </label>
  <label>
    <p className='form__input-title'>Su contacto?</p>
    <input className='form__input'  type="text" name="contact" placeholder='Su numero de tel' onChange={getInputValue} required />
  </label>
  <button className='form__btn' type="submit" disabled={!isValid}>Publicar</button>
</form>

    </div>
  );
}

export default SubmitForm;

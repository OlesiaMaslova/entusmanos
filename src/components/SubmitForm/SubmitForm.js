import React from 'react';
import './SubmitForm.css';

function SubmitForm() {
  return (
    <div className="form-container">

   <form className='form' action="" encType="text/plain">
   <label>
    <p className='form__input-title'>Su Nombre</p>
    <input className='form__input' type="text" name="name" placeholder='Como se llama?' required />
  </label>
  <label>
    <p className='form__input-title'>Nombre de la tarea</p>
    <input className='form__input' type="text" name="name" placeholder='por ej. corte del cesped' required />
  </label>
  <label>
   <p className='form__input-title'>Que ayuda necesita?</p>
    <textarea className='form__input  form__input_place_order'  type="text" name="order" placeholder='Aqui escribe detalles de la tarea' required />
  </label>
  <label>
    <p className='form__input-title'>Su contacto?</p>
    <input className='form__input'  type="text" name="contact" placeholder='Su numero de tel' required />
  </label>
  <button className='form__btn' type="submit">Publicar</button>
</form>

      




    </div>
  );
}

export default SubmitForm;

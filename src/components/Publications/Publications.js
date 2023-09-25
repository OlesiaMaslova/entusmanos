import React from 'react';
import './Publications.css';
import SubmitForm from '../SubmitForm/SubmitForm';

function Publications() {
  return (
    <div className="publications">

    <SubmitForm />

    <div className='publications__wrap'>
    <ul className='publucations__list'>
    <li className='publications__item'>
      <div className='publications__item-content'>
        <h2 className='publications__item-title'> Nombre de la tarea </h2>
        <p className='publications__item-text'>descripcion de la tarea aqui lalalalalalalallalalalalalalal </p>
        <p className='publications__item-author'>Autor de la tarea</p>
        <p className='publications__item-contact'>+1234564674</p>
      </div>
    </li>
    </ul>

    </div>
      
    </div>
  );
}

export default Publications;

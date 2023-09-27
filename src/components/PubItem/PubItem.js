import React from 'react';
import './PubItem.css';

function PubItem(props) {

function handleDelete(){
props.onDelete(props.dataItem);
}
  return (
    <div>
    <li className='publications__item'>
      <div className='publications__item-content'>
        <h2 className='publications__item-title'>{props.title}</h2>
        <p className='publications__item-text'>{props.order}</p>
        <p className='publications__item-author'>{props.name}</p>
        <p className='publications__item-contact'>{props.contact}</p>
      </div>
      <button className='publications__btn publications__delete-btn' onClick={handleDelete}></button>
      <div className='publications__price-block'><div className='publications__price-icon'></div><p className='publications__price-sub'>{props.price}</p></div>
    </li>
      
    </div>
  );
}


export default PubItem;

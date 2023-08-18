import React from 'react';
import './Footer.css';
import instaicon from '../../images/free-icon-instagram-2111463.png';
import teleicon from '../../images/free-icon-telegram-3670070.png';
import whatsicon from '../../images/free-icon-whatsapp-4494494.png';

function Footer() {
  return (
    <div className="footer">
       <div className='footer__logo'></div>
       <ul className='footer__list'>
        <li>О сервисе</li>
        <li>Контакты</li>
        <li>FAQ</li>
       </ul>
        <ul className='footer__contact'>
        <li className='footer__contact-item'>
        <a href="https://www.flaticon.com/ru/free-icons/-instagram" title="логотип instagram иконки"><img src={instaicon}/></a>

        </li>
        <li className='footer__contact-item'>
        <a href="https://www.flaticon.com/ru/free-icons/-instagram" title="логотип instagram иконки"><img src={teleicon}/></a>

        </li>
        <li className='footer__contact-item'>
        <a href="https://www.flaticon.com/ru/free-icons/-instagram" title="логотип instagram иконки"><img src={whatsicon}/></a>
  
        </li>

        </ul>

    </div>
  );
}

export default Footer;
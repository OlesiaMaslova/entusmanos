import React from 'react';
import './Footer.css';
import instaicon from '../../images/free-icon-instagram-2111463.png';
import teleicon from '../../images/free-icon-telegram-3670070.png';
import whatsicon from '../../images/free-icon-whatsapp-4494494.png';

function Footer() {
  return (
    <div className="footer">
        <div className='footer__container'>
        <div className='footer__wrap'>

<div className='footer__logo'></div>
<ul className='footer__list'>
<li>Sobre nuestro servicio</li>
<li>Contactos</li>
<li>FAQ</li>
</ul>   
</div>

<ul className='footer__contact'>
<li className='footer__contact-item'>
<a href="https://www.flaticon.com/ru/free-icons/-instagram" title="логотип instagram иконки"><img className='footer__icon' src={instaicon} alt='instagram icon'/></a>

</li>
<li className='footer__contact-item'>
<a href="https://www.flaticon.com/ru/free-icons/-instagram" title="логотип instagram иконки"><img className='footer__icon' src={teleicon} alt='telegram icon'/></a>

</li>
<li className='footer__contact-item'>
<a href="https://www.flaticon.com/ru/free-icons/-instagram" title="логотип instagram иконки"><img className='footer__icon' src={whatsicon} alt='whatsapp icon'/></a>

</li>

</ul>

        </div>
  <p className='footer__copyright'> &#169;2023 Olesia Maslova</p>
    </div>
  );
}

export default Footer;
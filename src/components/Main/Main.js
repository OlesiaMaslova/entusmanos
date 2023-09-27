import './Main.css'
import React from 'react';
import imgPosting from '../../images/IMG_20230817_095105_058.png';
import imgGetting from '../../images/IMG_20230817_095421_829.png';
import imgChoosing from '../../images/IMG_20230817_095526_018.png';
import Publications from '../Publications/Publications';


function Main() {
    return (
        <div className="main">

            <div className='main__intro'>
                <div className='main__intro-sideinfo'>
                    <p className='main__intro-sidetitle'>Mas de 200 000 participantes en cada ciudad de Chile</p>
                    <div className='main__intro-sidewrap'>
                        <div className='main__intro-sideicon delivery'></div>
                        <p className='main__intro-sidesubtitle'>Servicio de Delivery</p>
                        <div className='main__intro-sideicon hogar'></div>
                        <p className='main__intro-sidesubtitle'>Tareas de Hogar</p>
                        <div className='main__intro-sideicon desarollo'></div>
                        <p className='main__intro-sidesubtitle'>Desarollo de Software</p>
                        <div className='main__intro-sideicon design'></div>
                        <p className='main__intro-sidesubtitle'>Diseño</p>
                        <div className='main__intro-sideicon reparacion'></div>
                        <p className='main__intro-sidesubtitle'>Reparacion y Construccion</p>
                        <div className='main__intro-sideicon instalacion'></div>
                        <p className='main__intro-sidesubtitle'>Instalacion de Equipos</p>

                    </div>
                </div>
                <div className='main__intro-text'>
                    <div className='main__intro-container'> <h1 className='main__intro-title'>Dejanos liberarte de preocupaciones</h1>
                    <p className='main__intro-subtitle'>Ayudamos a encontrar una persona confiable para cualquier tarea.</p></div>
                    <div className='main__intro-hidden'>
                    <div className='main__intro-sideicon delivery hidden'></div>
                    <div className='main__intro-sideicon hogar hidden'></div>
                    <div className='main__intro-sideicon desarollo hidden'></div>
                    <div className='main__intro-sideicon design hidden'></div>
                    <div className='main__intro-sideicon reparacion hidden'></div>
                    <div className='main__intro-sideicon instalacion hidden'></div>
                    </div>
                </div>
                <div className='main__intro-img'></div>
            </div>
            <div className='main__how'>
                <h2 className='main__how-heading'>Como funciona este concepto</h2>
                <ul className='main__how-list'>
                    <li className='main__how-item'>
                        <div className='main__how-box'>
                            <p className='main__how-title'>Publica tu tarea</p>
                            <img className='main__how-img' src={imgPosting} alt='illustration'></img>

                        </div>
                    </li>
                    <li className='main__how-item'>
                        <div className='main__how-box'>
                            <p className='main__how-title'>Recibe las ofertas</p>
                            <img className='main__how-img' src={imgGetting} alt='illustration'></img>
                        </div>
                    </li>
                    <li className='main__how-item'>
                        <div className='main__how-box'>
                            <p className='main__how-title'>Elige tu aydante</p>
                            <img className='main__how-img' src={imgChoosing} alt='illustration'></img>

                        </div>
                    </li>
                </ul>
            </div>
            
           
            <Publications />
           
            
            <div className='main__feedback'>
                <h2 className='main__feedback-heading'>Que opinan nuestros usuarios</h2>
            <ul className='main__feedback-list'>
                <li className='main__feedback-li'>
                <div className='main__feedback-item'>
                <h2 className='main__feedback-name'>Lorem Ipsum</h2>
                <div className='main__feedback-pic'></div>
                <p className='main__feedback-text'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu es"</p>
            </div>
                </li>
                <li className='main__feedback-li'>
                <div className='main__feedback-item'>
                <h2 className='main__feedback-name'>Lorem Ipsum</h2>
                <div className='main__feedback-pic'></div>
                <p className='main__feedback-text'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu es"</p>
            </div>
                    </li>
                    <li className='main__feedback-li'>
                    <div className='main__feedback-item'>
                <h2 className='main__feedback-name'>Lorem Ipsum</h2>
                <div className='main__feedback-pic'></div>
                <p className='main__feedback-text'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu es"</p>
            </div>
                    </li>
                    <li className='main__feedback-li'>
                    <div className='main__feedback-item'>
                <h2 className='main__feedback-name'>Lorem Ipsum</h2>
                <div className='main__feedback-pic'></div>
                <p className='main__feedback-text'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu es"</p>
            </div>
                    </li>
                    <li className='main__feedback-li'>
                    <div className='main__feedback-item'>
                <h2 className='main__feedback-name'>Lorem Ipsum</h2>
                <div className='main__feedback-pic'></div>
                <p className='main__feedback-text'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu es"</p>
            </div>
                    </li>
                    <li className='main__feedback-li'>
                    <div className='main__feedback-item'>
                <h2 className='main__feedback-name'>Lorem Ipsum</h2>
                <div className='main__feedback-pic'></div>
                <p className='main__feedback-text'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu es"</p>
            </div>
                    </li>
                    <li className='main__feedback-li'>
                    <div className='main__feedback-item'>
                <h2 className='main__feedback-name'>Lorem Ipsum</h2>
                <div className='main__feedback-pic'></div>
                <p className='main__feedback-text'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu es"</p>
            </div>
                    </li>
                    <li className='main__feedback-li'>
                    <div className='main__feedback-item'>
                <h2 className='main__feedback-name'>Lorem Ipsum</h2>
                <div className='main__feedback-pic'></div>
                <p className='main__feedback-text'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu es"</p>
            </div>
                    </li>
                    <li className='main__feedback-li'>
                    <div className='main__feedback-item'>
                <h2 className='main__feedback-name'>Lorem Ipsum</h2>
                <div className='main__feedback-pic'></div>
                <p className='main__feedback-text'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu es"</p>
            </div>
                    </li>
                    <li className='main__feedback-li'>
                    <div className='main__feedback-item'>
                <h2 className='main__feedback-name'>Lorem Ipsum</h2>
                <div className='main__feedback-pic'></div>
                <p className='main__feedback-text'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu es"</p>
            </div>
                    </li>
                    <li className='main__feedback-li'>
                    <div className='main__feedback-item'>
                <h2 className='main__feedback-name'>Lorem Ipsum</h2>
                <div className='main__feedback-pic'></div>
                <p className='main__feedback-text'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu es"</p>
            </div>
                    </li>
                    <li className='main__feedback-li'>
                    <div className='main__feedback-item'>
                <h2 className='main__feedback-name'>Lorem Ipsum</h2>
                <div className='main__feedback-pic'></div>
                <p className='main__feedback-text'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu es"</p>
            </div>
                    </li>
                    <li className='main__feedback-li'>
                    <div className='main__feedback-item'>
                <h2 className='main__feedback-name'>Lorem Ipsum</h2>
                <div className='main__feedback-pic'></div>
                <p className='main__feedback-text'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu es"</p>
            </div>
                    </li>
            </ul>


            </div>
        </div>
    );
}

export default Main;

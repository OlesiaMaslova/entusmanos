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
                <div className='main__intro-text'>
                    <h1 className='main__intro-title'>Liberamos de preocupaciones</h1>
                    <p className='main__intro-subtitle'>Ayudamos a encontrar la mejor solucion</p>
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

import React from 'react'

export const Footer = () => {
  return (
    <>
        <footer className="footer">
            {/* <div className="container">
                <div className="row">
                    <div className="col col-100">
                        <div className="footer__content-img">
                            <img src="./img/Fondo 1Hora.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div> */}
        
        {/*  <div className="footer__logos">
                <div className="footer__img-logo">
                    <img src="./img/Logo-asinfy.svg" alt="" />
                </div>

                <div className="footer__img-logo">
                    <img src="./img/logo-usams-blanco.png" alt=""/>
                </div>
            </div> */}

            <div className='footer__info'>
                <div className='container'>
                    <div className='row'>
                        <div className='col col-33 col-mb-50 col-100-sm-mb'>
                            <div className='center-block'>
                                <img src='./img/logo-usams.png' />

                            </div>
                            <div className='footer__social-network'>
                                <div className='footer__cont-social-network'>
                                    <img src='./img/social-network/instagram.png' />
                                </div>
                                <div className='footer__cont-social-network'>
                                    <img src='./img/social-network/youtube.png' />
                                </div>
                                <div className='footer__cont-social-network'>
                                    <img src='./img/social-network/tiktok.png' />
                                </div>
                                <div className='footer__cont-social-network'>
                                    <img src='./img/social-network/wpp.png' />
                                </div>
                                <div className='footer__cont-social-network'>
                                    <img src='./img/social-network/telegram.png' />
                                </div>
                            </div>
                        </div>
                        <div className='col col-33 col-mb-50 col-100-sm-mb'>
                            <div className='footer__contact'>
                                <h3>CONTÁCTANOS</h3>
                                <ul>
                                    <li> <span>Atención al cliente:</span> +57 316 258 1402 </li>
                                    <li> <span>Correo:</span> @termox.co </li>
                                    <li> <span>Dirección:</span> CL. 35 #66 B 72, Vegas Del Parque, Itagüi, Antioquia </li>
                                </ul>
                            </div>

                        </div>
                        
                        <div className='col col-33 col-mb-50 col-100-sm-mb '>
                            <div>
                                <div className='footer__rights'>
                                    <h3>LEGAL</h3>
                                    <span>Política de Tratamiento de datos</span>
                                    <div className='footer__brands'>
                                        <img src='./img/Logo Industria y Comercio.svg' />
                                        <img src='./img/logo-asincode.png' />
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="footer__text">
                <span>Copyright &copy; {new Date().getFullYear()} Tecnosuper - USAMS. Desarrollado por <b>Asincode</b>.</span>
            </div>
        </footer>
        <div className='load load-display'> 
            <div className='logo-display'>
                <img src='./img/logo-usams.png'></img>
            </div>
            <div className='loader'></div>
        </div>
   
    
    </>
  )
}

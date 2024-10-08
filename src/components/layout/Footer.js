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
                                    <li><span>Atención al cliente:</span> Lunes a Viernes 8am - 6pm</li>
                                    <li><span>Correo:</span> usams@tecnosuper.com.co</li>
                                    <li><span>Dirección:</span> Km 3.6 Vía La Ceja - Rionegro, Mall Cantarrana Local 22</li>
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
                                        <a target='blank' href='https://asincode.co'><img src='./img/logo-asincode.png' /></a>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="footer__text">
                <span>Copyright &copy; {new Date().getFullYear()} Tecnosuper - USAMS. Desarrollado por <b><a target='blank' href='https://asincode.co'>Asincode.</a></b></span>
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

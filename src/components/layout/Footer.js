import React from 'react'

export const Footer = () => {
  return (
    <>
        <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col col-100">
                    <div className="footer__content-img">
                        <img src="./img/Fondo 1Hora.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="footer__logos">
            <div className="footer__img-logo">
                <img src="./img/Logo-asinfy.svg" alt="" />
            </div>

            <div className="footer__img-logo">
                <img src="./img/logo-usams-blanco.png" alt=""/>
            </div>
        </div>
        <div className="footer__text">
            <span>Copyright &copy; {new Date().getFullYear()} Tecnosuper - USAMS. Desarrollado por <b>Asinfy</b>.</span>
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

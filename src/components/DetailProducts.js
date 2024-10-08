import React from 'react'
import { formatNumber } from '../helpers/formatNumbers.js'
import { addProductCart } from '../helpers/addProductsCart.js';

export const DetailProducts = ({discountPurchase ,setTotalDiscount, productsCart, productDetail = null,  setProductsCart, setSubtotal, setTotal, setIva, isAuth}) => {

    const URL_BASE = "https://zoho.accsolutions.tech/API/v1/Productos_USAMS";    

    const closeProductDetail = () => {

        const cont_detail = document.querySelector('#detail-product');
        const trama = document.querySelector('.trama');

        cont_detail.classList.remove('show');
        trama.classList.remove('open-trama-styles');
        setTimeout( () => {
            cont_detail.classList.remove('open');

            trama.classList.remove('open-trama');
            
        }, 400);

    }

    //Agregar productos al carrito
    const addProduct = async(e,id) => {

        addProductCart(e, id, URL_BASE, setProductsCart, setTotal, setSubtotal, setIva, discountPurchase ,setTotalDiscount);
    } 
    
  return (
    <>
        <div className='detail' id='detail-product'>

            <div className="cart__header-img">
                <img src="./img/logo-usams-blanco.png" alt=""/>
            </div>

            <div className="cart__close-cart" id="close-cart" onClick={closeProductDetail}>
                <i className="fa-solid fa-xmark"></i>
            </div>

            <div className='container detail__container'>
             
                    <div className='row row-center'>
                        <div className='col col-50 col-mb-100 col-50-sm-mb'>
                            <div className="products__card-img">
                                    <img src={productDetail && productDetail.Imagen_publica.url} alt=""/>
                                </div>
                            </div>
                        <div className='col col-50 col-mb-100'>
                            <div className="products__card-description">
                                <span className="products__type">{productDetail && productDetail.GrupoDeProductos.Description}</span>
                                <h3 className="products__title">{productDetail && productDetail.Referencia}</h3>
                                <p className='products__description' dangerouslySetInnerHTML={productDetail && productDetail.Caracteristicas ? {__html: productDetail.Caracteristicas.replace(/-/g, `<li/>` )}: {__html: ""} }></p>
                                <div className="products__cont-price-cart">
                                    <div className="products__cont-price">
                                        {/* Cambiar para mas adelante el precio del producto */}
                                        {productDetail.Promosion !== null && productDetail.Promosion === "Si" && productDetail.PrecioComparacion !== 0 && productDetail.PrecioComparacion !== null ? (
                                            <>
                                                <span className="products__price">{ formatNumber(productDetail.PrecioComparacion, true)} COP</span>
                                                <span className="products__price-before">{formatNumber(isAuth ? productDetail.Precio_Mayorista : productDetail.Precio_detal, true)} COP</span>
                                            </>
                                        ): (
                                            <span className="products__price">{formatNumber(isAuth ? productDetail.Precio_Mayorista : productDetail.Precio_detal, true)} COP</span>
                                        )}
                                    </div>
                                    
                                </div>

                                <div className="products__options detail-product">
                                {/* <button className="btn btn-blue">Comprar</button> */}
                                    <div className="products__options-product detail-product" id={productDetail.ID} onClick={ productsCart !== null && productsCart.find(item => item.ID === productDetail.ID) ? null : (e) => addProduct(e,productDetail.ID)} >
                                    {productsCart !== null && productsCart.find(item => item.ID === productDetail.ID) ? (
                                    <>
                                        En el carrito <i class="fa-solid fa-check"></i>
                                    </>) : (
                                    <>
                                    <div className='load-add-cart display-none'>
                                            <div className='loader'></div>
                                        </div>
                                    <div className='center-block'>
                                        Agregar al carrito <img src="./img/cart-usams.png" alt="" /> 
                                    </div>
                                    
                                    </>
                                    ) }
                                        
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
        

    
    </>
  )
}

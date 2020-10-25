import React from 'react';
import './Home.css';
import Product from "./Product";

export default () => {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_2x._CB418727893_.jpg" alt=""/>
        
        <div className="home__row">
          <Product id="123" title='Mac Book Pro' price={2300} rating={5} image='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp13touch-space-select-202005_GEO_NL?wid=892&hei=820&&qlt=80&.v=1587459969982'/>
          <Product id="124" title='Mac Book Air' price={1100} rating={5} image='https://image.coolblue.nl/max/500x500/products/1406623'/>
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  )
}
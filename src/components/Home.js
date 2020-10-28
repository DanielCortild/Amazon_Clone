import React from 'react';
import Category from './Category';
import './Home.css';

export default () => {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_2x._CB418727893_.jpg" alt=""/>
        
        <div className="home__row">
          <Category title="Apple" image="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png"/>
          <Category title="Dell" image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/600px-Dell_logo_2016.svg.png"/>
          <Category title="Lenovo" image="https://img1.ibay.com.mv/is1/full/2020/08/item_3056951_719.png"/>
          <Category title="Acer" image="https://1000logos.net/wp-content/uploads/2019/07/Acer-logo-2011%E2%80%94present.jpg"/>
        </div>
        <div className="home__row">
          <Category title="Hp" image="https://i.pinimg.com/originals/32/90/d6/3290d68ee2ca14559cae8afe4538d97f.jpg"/>
          <Category title="Asus" image="https://dlcdnimgs.asus.com/websites/global/Sno/79183.jpg"/>
          <Category title="Huawei" image="https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo-2006%E2%80%932018.png"/>
          <Category title="Samsung" image="https://1000merken.com/wp-content/uploads/2020/04/Samsung-Logo.png"/>
        </div>
        <div className="home__row">
          <Category title="Nokia" image="https://cdn.freebiesupply.com/images/large/2x/nokia-logo-png-transparent.png"/>
          <Category title="Compaq" image="data:image/png;base64,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"/>
          <Category title="Intel" image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Intel_logo_%282006%29.svg/1005px-Intel_logo_%282006%29.svg.png"/>
          <Category title="Nvidea" image="https://upload.wikimedia.org/wikipedia/sco/thumb/2/21/Nvidia_logo.svg/1280px-Nvidia_logo.svg.png"/>
        </div>
      </div>
    </div>
  )
}
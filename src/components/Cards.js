import React from 'react';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>Latest from <span className="brand__name">ICEBEAR</span></h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src = {require('./images/imag4.jpg').default}
              text='Experience Snowboarding on top of the mountains'
              label='Snowboard'
              path='/products'
            />
            <CardItem
              src = {require('./images/imag3.jpg').default}
              text='For big and for small.'
              label='Kids'
              path='/products'
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
               src = {require('./images/imag1.jpg').default}
              text='Planning on get together with your friends on frozen waters?'
              label='Hockey'
              path='/products'
            />
            <CardItem
              src = {require('./images/imag2.jpg').default}
              text='Downhill skiing? We got you covered.'
              label='Downhill'
              path='/products'
            />
            <CardItem
               src = {require('./images/imag5.jpg').default}
              text='Ride through the mountains with the perfect equipment'
              label='Powder'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
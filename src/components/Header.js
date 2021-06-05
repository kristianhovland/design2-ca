import React from 'react'
import { Button } from './Button';




function Header() {
    return (
        <div className="header-container">
          <img src = {require('./images/logo.png').default} className="logo__big" alt="Brand Logo" />
            <h1>"Outside you" is always cool.</h1>
            <p>Don't let dreams be dreams.</p>
            <div className="header-btns">
            <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          OUR PRODUCTS
        </Button>
            </div>
        </div>
    )
}

export default Header

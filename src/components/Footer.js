import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the <span className="brand__name__footer">ICEBEAR</span> newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Products</h2>
            <Link to='/'>Placeholder</Link>
            <Link to='/'>Placeholder</Link>
            <Link to='/'>Placeholder</Link>
            <Link to='/'>Placeholder</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Placeholder</Link>
            <Link to='/'>Placeholder</Link>
            <Link to='/'>Placeholder</Link>
            <Link to='/'>Placeholder</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Sports</h2>
            <Link to='/'>Placeholder</Link>
            <Link to='/'>Placeholder</Link>
            <Link to='/'>Placeholder</Link>
            <Link to='/'>Placeholder</Link>
          </div>
          <div className='footer-link-items'>
            <h2>About us</h2>
            <Link to='/'>Placeholder</Link>
            <Link to='/'>Placeholder</Link>
            <Link to='/'>Placeholder</Link>
            <Link to='/'>Placeholder</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <small className='rights'>Kristian Hovland © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook' 
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
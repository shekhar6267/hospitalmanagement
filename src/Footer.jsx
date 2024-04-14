// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-body-tertiary text-center" style={{ minHeight: 'calc(100vh - 80px)', position: 'relative' }}>
      <div className="container p-4 pb-0">
        <section className="mb-4">
          {/* Social media buttons */}
          <a className="btn btn-floating m-1" style={{ backgroundColor: '#3b5998' }} href="#!" role="button">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a className="btn btn-floating m-1" style={{ backgroundColor: '#55acee' }} href="#!" role="button">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a className="btn btn-floating m-1" style={{ backgroundColor: '#dd4b39' }} href="#!" role="button">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a className="btn btn-floating m-1" style={{ backgroundColor: '#ac2bac' }} href="#!" role="button">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className="btn btn-floating m-1" style={{ backgroundColor: '#0082ca' }} href="#!" role="button">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a className="btn btn-floating m-1" style={{ backgroundColor: '#333333' }} href="#!" role="button">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </section>
      </div>
      {/* Footer content */}
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', position: 'absolute', bottom: 0, width: '100%' }}>
        © 2020 Copyright:
        <a className="text-body" href="https://mdbootstrap.com/">
          Your Website
        </a>
      </div>
    </footer>
  );
};

export default Footer;

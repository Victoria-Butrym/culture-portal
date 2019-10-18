import PropTypes from 'prop-types';
import React from 'react';
import githubIcon from '../../images/social/GitHub.png';
import logo from '../../images/logo.png';
import '../variables.css';
import './footer.css';


const Header = ({ footerTitle, githubLink }) => (
  <footer className="header footer">
    <div className="container header__container">
      <div className="title__wrapper">
        <img src={logo} alt="logo" className=" footer__img logo__footer" />
        <h3 className="title header__title footer__title">
          {footerTitle}
        </h3>
      </div>
      <a href={githubLink} target="_blank" rel="noopener noreferrer" className="social__link">
        <img src={githubIcon} alt="github" className="footer__img social__img" />
      </a>
    </div>
  </footer>
);

Header.propTypes = {
  footerTitle: PropTypes.string,
  githubLink: PropTypes.string,
};
Header.defaultProps = {
  footerTitle: '',
  githubLink: '',
};

export default Header;

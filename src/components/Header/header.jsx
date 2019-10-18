import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import '../variables.css';
import './Header.css';


const Header = ({ siteTitle, listTitle }) => (
  <header className="header">
    <div className="container header__container">
      <h3 className="title header__title">
        <Link to="/" className="link header__link">
          {siteTitle}
        </Link>
      </h3>
      <nav className="navigation">
        <Link to="/AuthorsPage/" className="link navigation__link">
          {listTitle}
        </Link>
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  listTitle: PropTypes.string,
};
Header.defaultProps = {
  siteTitle: '',
  listTitle: '',
};

export default Header;

import React from 'react';
import PropTypes from 'prop-types';
import './authorList.css';

const AuthorList = (props) => {
  const { children } = props;

  return (
    <ul className="authors__list">
      { children }
    </ul>
  );
};

AuthorList.propTypes = {
  children: PropTypes.node,
};
AuthorList.defaultProps = {
  children: '',
};

export default AuthorList;

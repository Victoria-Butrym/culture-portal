import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import './authorListItem.css';

class AuthorListItem extends Component {
  x = [];

  render() {
    const { author } = this.props;
    return (
      <li className="authorlist__item">
        <Link to={author.link}>{author.name}</Link>
      </li>
    );
  }
}

AuthorListItem.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
  }),
};
AuthorListItem.defaultProps = {
  author: '',
};

export default AuthorListItem;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuthorListItem from '../AuthorListItem/authorListItem';
import AuthorList from '../AuthorsList/authorList';
import './search.css';

class Search extends Component {
  state = {
    search: '',
  }

  updateSearch = (event) => {
    this.setState({
      search: event.target.value.substr(0, 20),
    });
  }

  renderItems() {
    const { search } = this.state;
    const { authors } = this.props;
    const filteredContacts = authors.filter(
      author => author.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        || author.city.toLowerCase().indexOf(search.toLowerCase()) !== -1,
    );
    return (
      filteredContacts.map(author => <AuthorListItem author={author} key={author.id} />)
    );
  }

  render() {
    const { search } = this.state;
    const items = this.renderItems();
    return (
      <div className="authorlist__container">
        <div className="search__wrapper">
          <input
            type="text"
            value={search}
            onChange={this.updateSearch}
            className="search"
          />
        </div>
        <div className="authorlist__wrapper">
          <AuthorList>
            { items }
          </AuthorList>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })),
};
Search.defaultProps = {
  authors: '',
};

export default Search;

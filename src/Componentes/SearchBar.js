import React from 'react';
import TypeProps from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <form>
        <label htmlFor="input-search">
          <input
            data-testid="query-input"
            type="text"
            name="search"
            onChange={ (e) => handleChange(e) }
            id="input-search"
            placeholder="Faça sua pesquisa!"
            value={ value }
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  handleChange: TypeProps.func.isRequired,
  value: TypeProps.string.isRequired,
};

export default SearchBar;

import PropTypes from 'prop-types';
import React from 'react';
/* import {
  MDBBtn,

} from 'mdb-react-ui-kit'; */
import './ProductCard.css';

class Categories extends React.Component {
  render() {
    const { category, handleClick, id } = this.props;
    const buttomCss = {
      flexGrow: '1',
    };
    return (
      <label htmlFor="category" id="label-category-btn">
        <button
          className="btn btn-primary mb-1"
          onClick={ (e) => handleClick(e) }
          data-testid="category"
          name="category"
          type="button"
          id={ id }
          value={ category }
          style={ buttomCss }
        >
          { category }
        </button>
      </label>
    );
  }
}

Categories.propTypes = {
  category: PropTypes.string,
}.isRequired;

export default Categories;

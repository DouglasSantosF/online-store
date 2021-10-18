import React from 'react';
import PropTypes from 'prop-types';

class BotoesDosProdutos extends React.Component {
  render() {
    const { NumberOfItems, onClickIncress, onClickDecress, funcRemover, id } = this.props;

    return (
      <div className="containerButtons">
        <button
          className="btn btn-danger remove"
          type="button"
          onClick={ () => funcRemover(id) }
        >
          X

        </button>
        <button
          className="btn btn-dark botoes blue"
          type="button"
          data-testid="product-increase-quantity"
          onClick={ () => onClickIncress() }
        >
          +

        </button>
        <div
          data-testid="shopping-cart-product-quantity"
          value={ NumberOfItems }
        >
          {NumberOfItems}

        </div>
        <button
          className="btn btn-dark blue"
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ () => onClickDecress() }
        >
          -

        </button>
      </div>
    );
  }
}

BotoesDosProdutos.propTypes = {
  id: PropTypes.string.isRequired,
  NumberOfItems: PropTypes.number.isRequired,
  onClickDecress: PropTypes.func.isRequired,
  onClickIncress: PropTypes.func.isRequired,
  funcRemover: PropTypes.func.isRequired,
};

export default BotoesDosProdutos;

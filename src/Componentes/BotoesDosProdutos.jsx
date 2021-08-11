import React from 'react';
import PropTypes from 'prop-types';

class BotoesDosProdutos extends React.Component {
  render() {
    const { NumberOfItems, onClickIncress, onClickDecress, funcRemover, id } = this.props;
    return (
      <div className="containerButtons">
        <button type="button" onClick={ () => funcRemover(id) }>X</button>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ () => onClickIncress() }
        >
          +

        </button>
        <div>{NumberOfItems}</div>
        <button
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
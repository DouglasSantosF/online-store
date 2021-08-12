import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ProductCard.css';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NumberOfItems: 1,
      cartEntries: true,
    };
  }

  onClickIncress = () => {
    this.setState((previusState) => ({ NumberOfItems: previusState.NumberOfItems + 1 }));
  }

  onClickDecress = () => {
    const { NumberOfItems } = this.state;
    if (NumberOfItems > 1) {
      this.setState((previusState) => (
        { NumberOfItems: previusState.NumberOfItems - 1 }));
    }
  }

  AddToCart = (product) => {
    const { title, price, thumbnail, id } = product;
    const { cartEntries } = this.state;
    const item = {
      title,
      price,
      thumbnail,
      id,
    };
    if (localStorage.getItem('items') === null && cartEntries === true) {
      localStorage.setItem('items', JSON.stringify([item]));
      this.setState({ cartEntries: false });
    } else if (cartEntries === true) {
      localStorage.setItem(
        'items',
        JSON.stringify([
          ...JSON.parse(localStorage.getItem('items')),
          item,
        ]),
      );
      this.setState({ cartEntries: false });
    }
  }

  render() {
    // console.log(<Route path="" />);
    // const { product: { title, price, thumbnail } } = this.props;
    const { product: { title, price, thumbnail, id }, product } = this.props;

    return (
      <div
        data-testid="product"
        style={ {
          maxWidth: '30%',
        } }
      >
        <h4 data-testid="shopping-cart-product-name">
          Nome Do Produto:
          {title}
        </h4>
        <h5>
          Preço do Produto
          {price}
        </h5>
        <img src={ thumbnail } alt={ `Imagem do produto${title}` } width="100px" />
        <button
          data-testid="product-add-to-cart"
          type="submit"
          id={ id }
          onClick={ () => this.AddToCart(product) }
        >
          Adicionar ao carrinho
        </button>

        <Link data-testid="product-detail-link" to={ `/${title}/details` }>
          Ver detalhes
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  // funcRemover: PropTypes.func.isRequired,
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;

import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import './ListProducts.css';

class ListProducts extends React.Component {
  constructor() {
    super();
    this.state = {
      // listProduct: [],
    };
    // this.AddToCart = this.AddToCart.bind(this);
  }

  render() {
    const { products, onClick } = this.props;

    return (
      <div className="titleP">

        <p>Produtos</p>

        <section
          className="listOfProducs"
        >
          {products
            .map((obj) => (
              <ProductCard
                className="produto"
                key={ obj.id }
                product={ obj }
                onClick={ onClick }
                AddToCart={ this.AddToCart }
              />
              // <ProductCard key={ obj.id } product={ obj } />
            ))}
        </section>
      </div>
    );
  }
}

ListProducts.propTypes = {
  onClick: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ListProducts;

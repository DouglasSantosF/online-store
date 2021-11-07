import React from 'react';
import PropTypes from 'prop-types';
import { FreteComponent, Valuetion, LinkParaCarrinho } from './index';
import './ProductDetails.css';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    const { location: { state: { title, thumbnail, price, domainId, shipping:
      { free_shipping: frete } } } } = props;
    this.state = {
      productTest: {
        title,
        thumbnail,
        price,
        domainId,
        shipping: { frete },
      },
      items: JSON.parse(localStorage.getItem('items')),
      quantidadeTotal: 0,
    };
  }

  componentDidMount() {
    this.previewItems();
  }

  previewItems = () => this.setState(({ items }) => ({
    items: JSON.parse(localStorage.getItem('items')),
    quantidadeTotal: items.length,
  }));

  render() {
    const { quantidadeTotal, productTest: { title, thumbnail, price, domainId, shipping:
      { free_shipping: frete } } } = this.state;
    return (
      <div className="countainerDetails">
        <LinkParaCarrinho view={ quantidadeTotal } />
        <div className="cardProduct">
          <h4
            data-testid="product-detail-name"
            className="nameDetails"
          >
            {title}
            nome
          </h4>
          <h4
            className="priceDetails"
          >
            {`R$ ${price}`}

          </h4>
          <FreteComponent frete={ frete } />
          <img alt="ImageProduct" className="imageDetails" src={ thumbnail } />

          <div>
            <h4 className="especDetails">
              { domainId }

            </h4>
          </div>
          <Valuetion />
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.number,
      domainId: PropTypes.string,
      shipping: PropTypes.shape({
        free_shipping: PropTypes.bool,
      }),
    }),
  }).isRequired,
};

export default ProductDetails;

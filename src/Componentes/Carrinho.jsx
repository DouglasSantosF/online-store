import React from 'react';
import { Link } from 'react-router-dom';
import ProductCartCard from './ProductCartCard';
import './Carrinho.css';
import imagem from './unnamed.gif';

class Carrinho extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listaDeProdutos: [],
    };
  }

  componentDidMount() {
    this.getStorageItems();
  }

  getStorageItems = () => {
    const localStorageItems = JSON.parse(localStorage.getItem('items'));

    if (localStorageItems !== null && localStorageItems !== []) {
      this.setState({ listaDeProdutos: [...localStorageItems] });
    }
  }

  remover = (id) => {
    const { listaDeProdutos } = this.state;
    const findCartItem = listaDeProdutos.find((elemento) => elemento.id === id);

    const localStorageItems = JSON.parse(localStorage.getItem('items'));
    const filtered = localStorageItems.filter((item) => item.id !== id);
    localStorage.setItem('items', JSON.stringify(filtered));

    const indexARetirar = listaDeProdutos
      .indexOf(findCartItem);
    listaDeProdutos.splice(indexARetirar, 1);
    this.setState({ listaDeProdutos });
  }

  render() {
    const { listaDeProdutos } = this.state;

    if (listaDeProdutos.length === 0) {
      return (
        <div className="countainer-empty-cart">
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          <img className="imagem-cart" src={ imagem } alt="carrinho-vazio" />
          <Link
            to="/"
            className="buttonBack"
          >
            Voltar
          </Link>
        </div>
      );
    }
    return (
      <div className="cardCart-Container">
        {listaDeProdutos.map((produto) => (
          <div key={ produto.id } className="containerItem">
            <ProductCartCard
              key={ produto.id }
              product={ produto }
              funcRemover={ this.remover }
            />
          </div>))}
      </div>
    );
  }
}

export default Carrinho;

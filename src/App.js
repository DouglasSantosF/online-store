import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import { SearchBar, Carrinho, LinkParaCarrinho,
  CategoriesContainer } from './Componentes/index';
import ProductDetails from './Componentes/ProductDetails';
import ListProducts from './Componentes/ListProducts';

class App extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.fetchQueryCategory = this.fetchQueryCategory.bind(this);

    if (!JSON
      .parse(localStorage.getItem('items'))) {
      localStorage
        .setItem('items', JSON.stringify([]));
    }

    this.state = {
      search: '',
      categories: [],
      categorySelected: [],
      items: JSON.parse(localStorage.getItem('items')),
      quantidadeTotal: 0,
    };
    this.fetch();
  }

  componentDidMount() {
    this.previewItems();
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: [target.value],
    });
  }

  handleClick({ target }) {
    const { id, value } = target;
    this.fetchQueryCategory(id, value);
  }

  previewItems = () => {
    this.setState({
      items: JSON.parse(localStorage.getItem('items')) });
    this.setState(({ items }) => ({
      quantidadeTotal: items.length,
    }));
  }

  esvaziarCarrinho = () => {
    this.setState({ items: [] });
    localStorage.removeItem('items');
    this.previewItems();
  }

  buttonClick(e) {
    e.preventDefault();
    const { search } = this.state;
    this.fetchQueryCategory('', search);
  }

  async fetch() {
    const promise = await getCategories();
    this.setState({ categories: Object.values(promise) });
  }

  async fetchQueryCategory(categoryID, query) {
    const promise = await getProductsFromCategoryAndQuery(categoryID, query);
    this.setState({ categorySelected: promise.results });
  }

  render() {
    // const titleCss = {
    //   // display: 'absolute',
    //   marginLeft: '200px',
    // };
    const { search, categories, categorySelected, quantidadeTotal } = this.state;
    return (
      <main>
        <BrowserRouter>
          <Switch>
            <Route path="/carrinho" component={ Carrinho } />
            <Route path="/:name/details" component={ ProductDetails } />
            <Route
              exact
              path="/"
              render={ () => (
                <div className="App">
                  <div className="search-cart p-4">
                    <p data-testid="home-initial-message">
                      Digite algum termo de pesquisa ou escolha uma categoria.
                    </p>
                    <SearchBar
                      handleChange={ this.handleChange }
                      value={ search }
                    />
                    <button
                      className="btn btn-info"
                      data-testid="query-button"
                      type="submit"
                      onClick={
                        (e) => this.buttonClick(e)
                      }
                    >
                      Search
                    </button>
                    <LinkParaCarrinho view={ quantidadeTotal } />
                  </div>
                  <span style={ { padding: '20px' } } />
                  <div className="row-content">
                    <CategoriesContainer
                      handleClick={ this.handleClick }
                      categories={ categories }
                    />

                    <ListProducts
                      onClick={ this.previewItems }
                      products={ categorySelected }
                    />
                  </div>
                </div>
              ) }
            />
            <Route exact path="*" render={ () => (<p>Not Found</p>) } />
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;

import StarsRating from 'stars-rating';
import React from 'react';
import { Link } from 'react-router-dom';

class Valuetion extends React.Component {
  constructor() {
    super();

    this.state = {
      starValue: 0,
    };
  }

  ratingChanged = (value) => {
    this.setState({
      starValue: value,
    });
  }

  render() {
    const { starValue } = this.state;

    return (
      <form>
        <StarsRating
          value={ starValue }
          count={ 5 }
          onChange={ (e) => this.ratingChanged(e) }
          size={ 24 }
          color2="#ffd700"
        />
        <label htmlFor="Email">
          <input type="email" id="Email" placeholder="digite seu e-mail" required />
        </label>

        <textarea
          type="text"
          id="Email"
          placeholder="Mensagem(opcional)"
          data-testid="product-detail-evaluation"
        />
        <br />
        <Link
          to="/"
        >
          <button type="submit">Comment</button>
        </Link>
      </form>
    );
  }
}

export default Valuetion;

import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import { getTotal } from '../reducer';
import { useHistory } from 'react-router-dom';

const Subtotal = () => {
  const [{cart}, _] = useStateValue();
  const history = useHistory();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={value => (
          <>
            <p>
              Subtotal ({cart?.length} items):
              <strong>{` ${value} `}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"€"}
      />
      <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal;
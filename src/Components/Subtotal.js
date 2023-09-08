import React from 'react'
import'./Subtotal.css';

import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';
import { useNavigate } from 'react-router-dom';
function Subtotal() {

  const navigate = useNavigate();
 
  const [{basket}]=useStateValue();
  return (
    <div  className='subtotal'>

<CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length}): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={()=>navigate("/payment")}>Proceed to checkout</button>
      
    </div>
  );
}

export default Subtotal

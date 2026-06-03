import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
  // Hardcoded items 
  const cartItems = (
    <ul className={classes['cart-items']}>
{[
{ id: 'c1', name: 'Sushi', amount: 2, price: 22.99 },
{ id: 'c2', name: 'Barbecue Burger', amount: 1, price: 12.99 }
      ].map((item) => (
        <li key={item.id} className={classes['cart-item-row']}>
          <div>
            <h2>{item.name}</h2>
            <div className={classes.summary}>
              <span className={classes.price}>${item.price.toFixed(2)}</span>
              <span className={classes.amount}>x {item.amount}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$58.97</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
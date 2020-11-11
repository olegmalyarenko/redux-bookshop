import React from 'react';
import { connect } from 'react-redux';

import './shopping-cart-table.scss';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {

  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
        <button 
          onClick={() => onIncrease()}
          className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>

        <button 
          onClick={() => onDecrease()}
          className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-plus-circle" />
        </button>

        <button 
          onClick={() => onDelete()}
          className="btn btn-outline-warning btn-sm float-right">
          <i className="fa fa-minus-circle" />
        </button>
        </td>
      </tr>  
      )
  };

  return (
    <div className="shop-cart-table">
      <h2>Your order</h2>
      <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Count</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              items.map(renderRow)
            }
          </tbody>

      </table>

      <div className="total">
          Total {total}$
      </div>
    </div>
  );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = ({ }) => {
  return {
    onIncrease: (id) => {
      console.log(`onIncrease ${id}`);
    },
    onDecrease: (id) => {
      console.log(`onDecrease ${id}`);
    },
    onDelete: (id) => {
      console.log(`onDelete ${id}`);
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
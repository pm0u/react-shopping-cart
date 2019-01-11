import React from 'react'
import CartItem from './CartItem'

const CartItems = (props) => {
  let cartItemsList = props.items.map((item, i) =>
  <React.Fragment key={item.id}>
  <CartItem item={item} />
  </React.Fragment>
  )
  return (
    <>
      <h1>Cart Items</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <div className="row">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
          </div>
        </li>
        {cartItemsList}
      </ul>
    </>
  )
}

export default CartItems

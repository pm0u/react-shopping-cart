import React, { Component } from 'react';
import './App.css';
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'
import CartItems from './CartItems'
import AddItem from './AddItem'
import Total from './Total'

class App extends Component {

  state = {
    products: [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ],
    cart: [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ],
    total: 3396
  }

  addItem = (item) => {
    if (!item.quantity) return
    const alreadyInCart = this.state.cart.findIndex(product => {
      return product.product.id === item.id
    })
    if (alreadyInCart > -1) {
      this.setState(prevState => {
        const cartObj = prevState.cart[alreadyInCart]
        return {
          cart: [
            ...prevState.cart.slice(0, alreadyInCart),
            { ...cartObj, quantity: cartObj.quantity + item.quantity },
            ...prevState.cart.slice(alreadyInCart + 1)
          ]
        }
      }, this.updateTotal)

    } else {
      const newItem = this.state.products.filter(product => product.id === item.id)[0]
      const newId = this.state.cart.length + 1
      const newQty = item.quantity
      const itemToAdd = { id: newId, product: newItem, quantity: newQty }
      this.setState(prevState => {
        return {
          cart: [
            ...prevState.cart,
            itemToAdd
          ]
        }
      }, this.updateTotal)
    }
  }

  updateTotal = () => {
    const newTotal = this.state.cart.reduce((total, product) => {
      total += product.product.priceInCents * product.quantity
      return total
    }, 0)
    this.setState(prevState => {
      return { total: newTotal }
    })
  }

  render() {
    return (
      <>
        <CartHeader />
          <main className='container'>
            <CartItems items={this.state.cart} />
            <Total total={this.state.total} />
            <AddItem products={this.state.products} addItem={this.addItem} />
          </main>
        <CartFooter copyright='2016'/>
      </>
    );
  }
}

export default App;

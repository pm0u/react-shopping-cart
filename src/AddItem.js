import React from 'react'


class AddItem extends React.Component {

    state = { products: this.props.products[0].id }

    onChangeQty = (e) => {
      e.persist()
      if (isNaN(parseInt(e.target.value))) {
      e.target.value = ''
    } else {
      this.setState(prevState => ({[e.target.id]:parseInt(e.target.value)}))
    }
    }

    onChangeProducts = (e) => {
      e.persist()
      console.log(e.target[e.target.selectedIndex])
      this.setState(prevState => ({[e.target.id]: parseInt(e.target[e.target.selectedIndex].id) }))
    }

    onSubmit = (e) => {
      e.preventDefault()
      const id = this.state.products
      const quantity = this.state.quantity
      this.props.addItem({ id, quantity })
    }

    itemList = this.props.products.map(product => {
      return (
        <option name='item' id={product.id} value={product.name} key={product.id}>{product.name} - {`$${(product.priceInCents/100).toFixed(2)}`}</option>
      )
    })

    render() {
      return (
      <form onSubmit={ this.onSubmit }>
      <label htmlFor='quantity'>Quantity</label><br />
      <input onChange={this.onChangeQty} id='quantity' type='text' className='form-control' /><br />
      <label htmlFor='products'>Products</label>
      <select onChange={this.onChangeProducts} defaultValue='Choose an item...' className='custom-select' id='products'>
      {this.itemList}
      </select>
      <input type='submit' value='Add Item' />
      </form>
    )}

}

export default AddItem

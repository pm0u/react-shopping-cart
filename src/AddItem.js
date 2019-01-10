import React from 'react'


const AddItem = (props) => {
    let itemList = props.products.map(product => {
      return (
        <option value={product.name.toLowerCase().replace(/\s/g,'')} key={product.id}>{product.name} - {product.priceInCents/100}</option>
      )
    })
    return (
      <>
      <label htmlFor='products'>Products</label>
      <select className='custom-select' id='products'>
      {itemList}
      </select>
      </>
    )

}

export default AddItem

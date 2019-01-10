import React from 'react'


const ListItems = (props) => {
        return (
          <div className='row'>
            {props.items.map(item =>
            <div className="col-md-8">{item.product}</div>
            <div className="col-md-2">{item.price}</div>
            <div className="col-md-2">{item.quantity}</div>
          )}
          </div>

        )
}

export default ListItems

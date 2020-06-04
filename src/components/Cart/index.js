import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'

import GridGenerator from '~/components/GridGenerator'

import {Link} from 'gatsby'

const Cart = () => {
  const {
    store: { checkout },
    
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const line_items = checkout.lineItems.map(line_item => {
    return <LineItem key={line_item.id.toString()} line_item={line_item} />
  })

  return (
    <div>
      {line_items.length
        ? line_items
        : <>Cart is Empty! Return <Link to="/">Home.</Link></>
      }
      <GridGenerator layout="halves">
        <>
          <h2>Subtotal</h2>
          <p>$ {checkout.subtotalPrice}</p><br/>
          <h2>Taxes</h2>
          <p>$ {checkout.totalTax}</p>
        </>
        <>
          <h2>Total</h2>
          <p>$ {checkout.totalPrice}</p>
          <br/>
          <button className="white-text crimson-back" onClick={handleCheckout} disabled={checkout.lineItems.length === 0}>Check out</button>
        </>
      </GridGenerator>
    </div>
  )
}

export default Cart

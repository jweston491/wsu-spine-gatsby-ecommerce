import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import GridGenerator from '~/components/GridGenerator'

const LineItem = props => {
  const { line_item } = props
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const variantImage = line_item.variant.image ? (
    <img
      src={line_item.variant.image.src}
      alt={`${line_item.title} product shot`}
      height="60px"
    />
  ) : null

  const selectedOptions = line_item.variant.selectedOptions
    ? line_item.variant.selectedOptions.map(
        option => `${option.name}: ${option.value} `
      )
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, line_item.id)
  }

  return (
    <GridGenerator layout="quarters" className="pad short">
      {variantImage}
      <p>
        {line_item.title}
        {`  `}
        {console.log("Info:")}
        {console.log(line_item.variant)}
        {line_item.variant.title === !'Default Title' ? line_item.variant.title : ''}
      </p>
      <>Quantity: {line_item.quantity}</>
      <button onClick={handleRemove}>Remove</button>
    </GridGenerator>
  )
}

export default LineItem

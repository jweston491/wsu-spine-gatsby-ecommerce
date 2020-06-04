import React, { useContext } from 'react'
import reduce from 'lodash/reduce'

import StoreContext from '~/context/StoreContext'

const useQuantity = () => {
	const { store: {checkout} } = useContext(StoreContext)
	const items = checkout ? checkout.lineItems : []
	const total = reduce(items, (acc, item) => acc + item.quantity, 0)
	return [total !== 0, total]
}

const CartStatus = () => {
    const [hasItems, quantity] = useQuantity()
    return (
        <>
            Cart <span>({hasItems && quantity ? quantity : '0' })</span>
        </>
    )
}

export default CartStatus
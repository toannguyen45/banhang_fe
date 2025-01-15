import OrderClient from '@/app/components/dashboard/OrderClient'
import React from 'react'

const OrderPage = () => {
    return (
       <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6'>
            <OrderClient/>
        </div>
       </div>
    )
}

export default OrderPage

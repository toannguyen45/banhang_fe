import OrderClient from '@/app/components/dashboard/OrderClient'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
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

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

const OrderPage = () => {
    return (
        <Card>
            <CardHeader className='px-7'>
                <CardTitle>Orders</CardTitle>
                <CardDescription>Recent orders from your store</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Customer</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead className='text-right'>Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <p className='font-medium'>John Doe</p>
                                <p className='hidden md:flex text-sm text-muted-foreground'>test@gmail.com</p>
                            </TableCell>
                            <TableCell>Sale</TableCell>
                            <TableCell>Successfull</TableCell>
                            <TableCell>2022-01-01</TableCell>
                            <TableCell className='text-right'>$100.00</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

export default OrderPage

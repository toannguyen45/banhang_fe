import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign, PartyPopper, ShoppingBag, User2 } from 'lucide-react'

const Dashboard= () => {
    return (
        <>
            <div className='grid  gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4'>
                <Card>
                    <CardHeader className='flex flex-row items-center justify-between pb-2'>
                        <CardTitle>
                            Total Revenue
                        </CardTitle>
                        <DollarSign className='h-4 w-4 text-green-600' />
                    </CardHeader>
                    <CardContent>
                        <p className='text-2xl font-bold'>1000000$</p>
                        <p className='text-xs text-muted-foreground'>Based on 100 Charges</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className='flex flex-row items-center justify-between pb-2'>
                        <CardTitle>
                            Total Sales
                        </CardTitle>
                        <ShoppingBag className='h-4 w-4 text-blue-600' />
                    </CardHeader>
                    <CardContent>
                        <p className='text-2xl font-bold'>1000000$</p>
                        <p className='text-xs text-muted-foreground'>Total sales on shoemarshal</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className='flex flex-row items-center justify-between pb-2'>
                        <CardTitle>
                            Total Products
                        </CardTitle>
                        <PartyPopper className='h-4 w-4 text-indigo-600' />
                    </CardHeader>
                    <CardContent>
                        <p className='text-2xl font-bold'>37</p>
                        <p className='text-xs text-muted-foreground'>Total Products</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className='flex flex-row items-center justify-between pb-2'>
                        <CardTitle>
                            Total Users
                        </CardTitle>
                        <User2 className='h-4 w-4 text-orange-600' />
                    </CardHeader>
                    <CardContent>
                        <p className='text-2xl font-bold'>37</p>
                        <p className='text-xs text-muted-foreground'>Total User sign up</p>
                    </CardContent>
                </Card>
            </div>

            <div className='grid gap-4 md:gp-8 lg:grid-cols-2 xl:grid-cols-3 mt-10'>
                <Card className='xl:col-span-2'>
                    <CardHeader>
                        <CardTitle>Transactions</CardTitle>
                        <CardDescription>
                            Recent transactions from your store
                        </CardDescription>
                    </CardHeader>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Recent sales</CardTitle>
                    </CardHeader>
                    <CardContent className='flex flex-col gap-8'>
                        <div className='flex items-center gap-4'>
                            <Avatar className='hidden sm:flex h-9 w-9'>
                                <AvatarFallback>JM</AvatarFallback>
                            </Avatar>
                            <div className='grid gap-1'>
                                <p className='text-sm font-medium'>Jan Marshal</p>
                                <p className='text-sm text-muted-foreground'>test@gmail.com</p>
                            </div>
                            <p className='ml-auto font-medium'>+$199990</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <Avatar className='hidden sm:flex h-9 w-9'>
                                <AvatarFallback>JM</AvatarFallback>
                            </Avatar>
                            <div className='grid gap-1'>
                                <p className='text-sm font-medium'>Jan Marshal</p>
                                <p className='text-sm text-muted-foreground'>test@gmail.com</p>
                            </div>
                            <p className='ml-auto font-medium'>+$199990</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <Avatar className='hidden sm:flex h-9 w-9'>
                                <AvatarFallback>JM</AvatarFallback>
                            </Avatar>
                            <div className='grid gap-1'>
                                <p className='text-sm font-medium'>Jan Marshal</p>
                                <p className='text-sm text-muted-foreground'>test@gmail.com</p>
                            </div>
                            <p className='ml-auto font-medium'>+$199990</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default Dashboard
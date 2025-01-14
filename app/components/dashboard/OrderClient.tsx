'use client'

import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

const OrderClient = () => {
    const router = useRouter()
    const params = useParams()
    return (
        <>
            <div className='flex items-center justify-between'>
                {/* <Heading
            title="Orders (0)"
            description="Quan li don hang"
            /> */}
                <Button onClick={()=> router.push(`orders/new`)}>
                    <PlusIcon className='mr-2 h-4 w-4' />
                    Tạo mới
                </Button>
            </div>
        </>
    )
}

export default OrderClient

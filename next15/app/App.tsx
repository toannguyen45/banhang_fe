'use client'

import { store } from '@/redux/store'
import React, { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

type Props = {
    children: ReactNode
}

const App: FC<Props> = ({ children }) => {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                {children}
            </Provider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>

    )
}

export default App

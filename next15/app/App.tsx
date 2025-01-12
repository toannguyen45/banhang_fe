'use client'

import { store } from '@/redux/store'
import React, { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'

type Props = {
    children: ReactNode
}

const App: FC<Props> = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default App

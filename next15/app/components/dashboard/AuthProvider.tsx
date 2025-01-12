'use client'

import React, { FC, ReactNode } from 'react'
import { SessionProvider } from "next-auth/react"

type Props = {
    children: ReactNode
}

const AuthProvider: FC<Props> = ({ children }) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default AuthProvider
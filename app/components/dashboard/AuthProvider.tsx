'use client'

import React, { FC, ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const AuthProvider: FC<Props> = ({ children }) => {
    return (
        <>
            {children}
        </>
    )
}

export default AuthProvider
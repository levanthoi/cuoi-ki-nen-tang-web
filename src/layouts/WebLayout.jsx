import React from 'react'
import Header from '../components/header'

const WebLayout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <main>
                {children}
            </main>
        </React.Fragment>
    )
}

export default WebLayout
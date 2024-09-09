import React from 'react'
import css from './Header.module.css'
import { SolanaConnect } from '../SolanaWalletProvider/SolanaConnect/SolanaConnect'

const Header = () => {
    return (
        <header className={css.header}>
            <SolanaConnect />
        </header>
    )
}

export default Header

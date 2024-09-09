import React from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import css from './SolanaConnect.module.css'

import {
    WalletDisconnectButton,
    WalletModalProvider,
    WalletMultiButton,
} from '@solana/wallet-adapter-react-ui'

import '@solana/wallet-adapter-react-ui/styles.css'

export const SolanaConnect = () => {
    return (
        <WalletModalProvider>
            <div className={css.buttonsWrapper}>
                <WalletMultiButton />
                <WalletDisconnectButton />
            </div>
        </WalletModalProvider>
    )
}

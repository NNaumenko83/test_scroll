import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SolanaWalletProvider } from './components/SolanaWalletProvider/SolanaWalletProvider.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <SolanaWalletProvider>
            <App />
        </SolanaWalletProvider>
    </StrictMode>,
)

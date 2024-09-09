import { useState } from 'react'

import MainComponent from './components/MainComponent/MainComponent'
import Section from './components/Section/Section'
import BigComponent from './components/BigComponent/BigComponent'
import SmallComponent from './components/SmallComponent/SmallComponent'
import Header from './components/Header/Header'
import { SolanaWalletProvider } from './components/SolanaWalletProvider/SolanaWalletProvider'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Header />
            <MainComponent>
                <BigComponent>
                    <SmallComponent />
                    <SmallComponent />
                    <SmallComponent />
                </BigComponent>
            </MainComponent>
            <Section />
            <Section />
            <Section />
            <Section />
        </>
    )
}

export default App

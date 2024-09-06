import React from 'react'
import css from './MainComponent.module.css'

const MainComponent = ({ children }) => {
    return <div className={css.mainComponent}>{children}</div>
}

export default MainComponent

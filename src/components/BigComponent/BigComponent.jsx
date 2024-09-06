import React from 'react'
import css from './BigComponent.module.css'

const BigComponents = ({ children }) => {
    return <div className={css.bigComponent}>{children}</div>
}

export default BigComponents

import React from 'react'

import styles from './CountryCard.module.css'

const CountryCard = ({ countryList }) => {
    return (
        <nav>
            {countryList.map(value => {
                return (
                    <span className={styles['list-item']}>
                        <button>
                            {value}
                        </button>
                    </span>
                )
            })}
        </nav>
    )
}

export default CountryCard
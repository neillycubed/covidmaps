import React, {useState, useEffect} from 'react'
import CountryList from './components/CountryList/CountryList'
import Footer from './components/Footer/Footer'
import Map from './components/Map/Map'

import styles from './App.module.css'
import logo from './assets/imgs/logo.png'

const App = () => {
    const [country, setCountry] = useState('');

    const handleClick = (e) => {
        setCountry(e.target.innerText);
    }

    useEffect(() => {
        setCountry('Global');
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles['header-corner']}></div>
                <img className={`${styles.title} ${styles.image}`} src={logo} alt='Covid Maps' />
                <h1 className={styles.title}>COVID MAPS</h1>
            </div>
            <div className={styles['content-container']}>
                <CountryList country={country} handleClick={handleClick} />
                <Map />
            </div>
            <Footer country={country} />
        </div>
    )
}

export default App

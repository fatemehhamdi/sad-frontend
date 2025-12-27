import React from 'react'
import RegisterForm from './components/RegisterForm'
import LostFoundBox from './components/LostFoundBox'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.leftPanel}>
        <RegisterForm />
      </div>
      <div className={styles.rightPanel}>
        <LostFoundBox />
      </div>
    </div>
  )
}

export default App

"use client"
import { Footer } from "./Components/Footer"
import { Logo } from "./Components/Logo"
import styles from "./index.module.css"


const page = () => {
  return (
    <div className={styles.app}>
    <Logo />
    <main className={styles.app} />
    <Footer />
    </div>
  )
}

export default page;
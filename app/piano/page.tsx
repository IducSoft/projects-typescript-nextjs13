"use client"
import { Footer } from "./Components/Footer"
import { Logo } from "./Components/Logo"
import { Main } from "./Components/Main/Main"
import styles from "./index.module.css"


const page = () => {
  return (
    <div className={styles.app}>
    <Logo />
    <main className={styles.app}>
      <Main/>
    </main>
    <Footer />
    </div>
  )
}

export default page;
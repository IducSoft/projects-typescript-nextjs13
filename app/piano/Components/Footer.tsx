import styles from "./Footer.module.css";

export const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer className={`${styles.footer} text-white `}>
            <a href="https://github.com/IducSoft">IducSoft</a>
            <br />
            {currentYear}
        </footer>
    )
}


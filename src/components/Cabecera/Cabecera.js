import { Link } from "react-router-dom"
import styles from "./Cabecera.module.css"
import logo from "./logo-alura.png"
import CabeceraLink from "../CabeceraLink/CabeceraLink"

function Cabecera() {
    return (
        <header className={styles.cabecera}>
            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="logoAlura" /> <span>Cinema</span>
                </section>
            </Link>
            <nav>
                <CabeceraLink url="./">
                    HOME
                </CabeceraLink>
                <CabeceraLink url="./Favoritos">
                    FAVORITOS
                </CabeceraLink>
            </nav>
        </header>
    )
}

export default Cabecera
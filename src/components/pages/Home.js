
import styles from "./Home.module.css"

function Home() {
    return(
        <section className={styles.sectionHome}>
            <div className={styles.sectionDiv}>
                <h1>BEM VINDO AO TOTVS</h1>
                <h2>O seu portal acadêmico</h2>
                <h3>(Apenas as notas, o financeiro, e o usuário são acessíveis )</h3>
            </div>
        </section>
    )
}

export default Home
import { FaUserAlt } from 'react-icons/fa';
import styles from './User.module.css'

function User() {
    return(
        <section className={styles.userSection}>
            <div className={styles.nomeDiv}>
                <h1>Nome Do Aluno</h1>
                
                <span>Matriculado</span>
            </div>
            <div className={styles.userMain}>
                <div>
                    <FaUserAlt/>

                </div>
                <ul>
                    <li>
                        <h3>Registro acadêmico</h3>
                        <span>XXXXXXXX</span>
                    </li>
                    <li>
                        <h3>Curso</h3>
                        <span>XXXXXXXX</span>
                    </li>
                    <li>
                        <h3>Habilitação</h3>
                        <span>XXXXXXXX</span>
                    </li>
                    <li>
                        <h3>Turno</h3>
                        <span>XXXXXXXX</span>
                    </li>

                </ul>
            </div>
        </section>
    )
}

export default User
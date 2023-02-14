import styles from './Notas.module.css'
import comemoracao from'../../img/comemoracao.png'
function Notas(){
    return(
        <section className={styles.sectionNotas}>
            <h1>Parabéns</h1>
            <h2>Você tirou 10 em todas as matérias</h2>
            <a href="https://pt.lovepik.com/images/png-1145027.html"><img src={comemoracao }/></a>
            <h3>(Sim, eu fiquei com preguiça de fazer a tabela das notas do semestre)</h3>
        </section>
    )
}

export default Notas
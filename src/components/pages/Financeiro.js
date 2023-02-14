import styles from './Financeiro.module.css'

function Financeiro( ) {
    return(
        <section className={styles.sectionFinanceiro}>
            <div className={styles.selectFinanceiroDiv}>
                <h1>Financeiro:</h1> 
                <select>
                    <option>
                        Todos
                    </option>
                </select>
            </div>
            <div className={styles.selectDiv}>
                <label>Serviços: </label>
                <select>
                    <option>
                        Todos
                    </option>
                </select>
            </div>
                <h2>CONEXAO UNIVERSITARIA - EDITAL 001/2022</h2>
            <div className={styles.ulDV}>
                <ul>
                    <li>Serviço: <span>SAQUAREMA - MENSALIDADE CAIXA ECONOMICA - GRADUACAO</span></li>
                    <li>Data início: <span>XX/XX/XXXX</span></li>    
                    <li>Contrato: <span>XXXXXX</span></li>    
                </ul>
                <ul>
                    <li>Desconto: <span>100%</span> </li>
                    <li>Data término: <span>XX/XX/XXXX</span></li>
                    <li>Data concessão: <span>XX/XX/XXXX</span> </li>
                </ul>
            </div>
        </section>
    )
}

export default Financeiro
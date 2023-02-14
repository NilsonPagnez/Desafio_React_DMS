import styles from './Navbar.module.css'
import LogoUv2 from'../../img/LogoUV2.png'
import Container from './Container'
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa';
import { CgNotes } from 'react-icons/cg';
import { MdOutlineAttachMoney } from 'react-icons/md';

function Navbar() {
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to="/"><img src={LogoUv2}/></Link>
                
                <ul>
                    <li>
                        <Link to="/Notas">
                        <CgNotes/>
                        <p>Notas</p>
                        </Link>
                    </li>
                    <li>
                        
                        <Link to="/financeiro">
                            <MdOutlineAttachMoney/>
                            <p>
                                Financeiro
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/User">
                            <FaUserCircle/>
                            <p>Nome </p>
                        </Link>
                    </li>
                </ul>
                
            </Container>
        </nav>
    )
}
export default Navbar
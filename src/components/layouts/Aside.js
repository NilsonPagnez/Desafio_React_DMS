import { Link } from 'react-router-dom'
import styles from './Aside.module.css'
import { SlMenu } from 'react-icons/sl';
import { FiMonitor } from 'react-icons/fi';
import { FiLink } from 'react-icons/fi';
import { AiOutlineCalendar } from 'react-icons/ai';
import { CgMenuGridR } from 'react-icons/cg';
import { BsClock } from 'react-icons/bs';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { MdOutlineSchool } from 'react-icons/md';

function Aside(props) {
    return(
        <aside className={styles.aside}>
            <ul className={styles.asideUl}>
                <li>
                    <Link to="/">
                        <SlMenu/>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <FiMonitor/>
                    </Link>
                </li>
                <li>
                    <Link to="/"> 
                        <FiLink/>
                    </Link>
                </li>
                <li>
                    <Link to="/"> 
                        <AiOutlineCalendar/>
                    </Link>
                </li>
                
                <li>
                    <Link to="/"> 
                        <CgMenuGridR/>
                    </Link>
                </li>
                
                <li>
                    <Link to="/"> 
                        <BsClock/>
                    </Link>
                </li>
                
                <li>
                    <Link to="/"> 
                        <AiOutlineUserAdd/>
                    </Link>
                </li>
                <li>
                    <Link to="/"> 
                        <MdOutlineSchool/>
                    </Link>
                </li>
                

            </ul>
            <>
                {props.children}
            </>
        </aside>
    )
}

export default Aside
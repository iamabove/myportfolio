import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import me from '../../assets/images/IMG_7306-modified.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
return (
    <>
         <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img style={{width:'5rem'}} src={me} alt="logo" />
            </Link>
            <h4 className='emmanuel' style={{textDecoration:'none', color:'white', margin:'0', fontSize:'1.2rem' }}>Emmanuel</h4>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color='#4d4d4d'/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className='about-link' to="/about">
                    <FontAwesomeIcon icon={faUser} color='#4d4d4d'/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className='contact-link' to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4d'/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a href="htt" target='blank' rel='nonrefere'>
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4d'/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/iamabove" target='blank' rel='nonrefere'>
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4d'/>
                    </a>
                </li>
                <li>
                    <a href="https://wa.me/+2349138067754" target='blank' rel='nonrefere'>
                        <FontAwesomeIcon icon={faWhatsapp} color='#4d4d4d'/>
                    </a>
                </li>
                <li>
                    <a href="htt" target='blank' rel='nonrefere'>
                        <FontAwesomeIcon icon={faTwitter} color='#4d4d4d'/>
                    </a>
                </li>
            </ul>
         </div>
    </>
)
}


export default Sidebar
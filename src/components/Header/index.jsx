import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <nav className='header-section'>
            <Link to="/" className='Link'>Acceuil</Link>
            <Link to="/About" className='Link'>About</Link>
        </nav>
    )
}

export default Header
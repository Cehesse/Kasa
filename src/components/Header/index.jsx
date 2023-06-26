//REACT
import { Link } from "react-router-dom";

//IMG
import Logo from '../../assets/img/logo.png'

//COMPONENTS
import Navbar from '../Navbar'

//FCT
export default function Header() {
	return (
		<header className='header-section'>
			<Link to="/"><img src={Logo} alt="Logo de KASA" /></Link>
			<Navbar />
		</header>
	)
}
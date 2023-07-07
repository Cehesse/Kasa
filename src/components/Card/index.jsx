//REACT
import { Link } from "react-router-dom"

//FCT
export default function Card({id, title, cover}) {

	return (
		<Link to={`/accomodation/${id}`} className="card">
			<img src={cover} alt={title} />
			<h2 className="card__title">{title}</h2>	
		</Link>
	)
}

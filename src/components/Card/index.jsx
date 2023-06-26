import { Link } from 'react-router-dom'

export default function Card({id, title, cover}) {

	return (
		<Link to={`/accomodation/${id}`} className="card-location">
			<img src={cover} alt={title} />
			<h2 className="card-location__title">{title}</h2>	
		</Link>
	)
}
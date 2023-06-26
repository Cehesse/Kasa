//FCT
export default function Card({ photo, title }) {
	return (
		<article className='card'>
			<img src={photo} alt='location' />
			<h2 className='card__title'>{title}</h2>
		</article>
	);
}
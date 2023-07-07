import arrowRight from '../../assets/img/arrowright.png'
import arrowLeft from '../../assets/img/arrowleft.png'
import { useState } from 'react'

export default function Carousel({slides}) {
	const [ indexCurrent, setIndexCurrent] = useState(0);
	const slidesLength = slides.length;
	
	const nextSlide = () => {setIndexCurrent(indexCurrent === slidesLength - 1 ? 0 : indexCurrent + 1)};
	const prevSlide = () => {setIndexCurrent(indexCurrent === 0 ? slidesLength - 1 : indexCurrent - 1)};

	return (
		<section className="carousel">
			{slidesLength > 1 && (
				<img
					src={arrowLeft}
					alt="Fleche gauche"
					onClick={prevSlide}
					className="carousel__arrow--left"
				/>
			)}
			{slidesLength > 1 && (
				<img
					src={arrowRight}
					alt="Fleche droite"
					onClick={nextSlide}
					className="carousel__arrow-right"
				/>
			)}
			{slides.map((slide, index) => (
				<div key={index} className="carousel__img">
					{index === indexCurrent && <img src={slide} alt="L'appartement" />}
					{index === indexCurrent && <p className="carousel__num">{indexCurrent + 1}/{slidesLength}</p>}
				</div>
			))}
		</section>
	);
};
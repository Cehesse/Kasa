//IMG
import Imgbanner from '../../assets/img/banner.png'

//FCT
export default function Banner() {
	return (
		<div className='banner-section'>
			<img className='banner-section__img' src={Imgbanner} alt='Logo de KASA' />
			<h1 className='banner-section__title'>Chez vous, partout et ailleurs</h1>
		</div>
	);
}
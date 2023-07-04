//REACT
import { useEffect, useState } from 'react';

//FCT
export default function Banner({title}) {

	const [aboutPage, setAboutPage] = useState(false);
	
	useEffect(() => {
		if(window.location.pathname === '/about'){setAboutPage(true)};
	  },[]);

	return (
		<div className={aboutPage ? 'banner-section--about' : 'banner-section--home'}>
			<h1 className={aboutPage ? 'banner-section--about__title' : 'banner-section--home__title'}>{title}</h1>
		</div>
	);
}
//REACT
import { useEffect, useState } from "react";

//FCT
export default function Banner({title}) {

	const [aboutPage, setAboutPage] = useState(false);
	
	useEffect(() => {
		if(window.location.pathname === "/about"){setAboutPage(true)};
	  },[]);

	return (
		<div className={aboutPage ? "banner-section banner-section--about" : "banner-section banner-section--home"}>
			<h1 className={"banner-section__title"}>{title}</h1>
		</div>
	);
}
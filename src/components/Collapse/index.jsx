//REACT
import { useState } from "react";

//IMG
import arrow from "../../assets/img/arrow.png";

//FCT
export default function Collapse({title, text}) {

	const [open, setOpen] = useState(false);

	return (
		<div className="collapse" >
            <h2 className="collapse__title"> {title}
                <img onClick={() => setOpen(!open)} className={open ? "collapse__arrow--down" : "collapse__arrow--up"} src={arrow} alt="Flèche d'ouverture" />
            </h2>
            <div className={open ? "collapse__text" : "collapse__text--hidden"}>
                {Array.isArray(text) ? text.map((item, index) => {return (<p className="collapse__text--item"key={index} >{item}</p>)}) : text}
            </div> 
        </div>
  	);
}
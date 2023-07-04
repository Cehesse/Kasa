import { useState } from 'react';
import arrow from '../../assets/img/arrow.png';

export default function Collapse({title, text}) {

	const [open, setOpen] = useState(false);

	return (
			<div className='collapse' >
                <h2 className='collapse__title'>
                    {title}
                    <img 
						onClick={() => setOpen(!open)}
                        className={open ? 'collapse__arrow--down' : 'collapse__arrow--up'} 
                        src={arrow} 
                        alt="Flèche d'ouverture" 
                    />
                </h2>
                <p className={open ? 'collapse__text' : 'collapse__text--hidden'}>
                    {Array.isArray(text) ? text.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) : text
                    }
                </p> 
            </div>
  	);
}
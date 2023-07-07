//REACT
import { useParams , Navigate } from "react-router-dom";

//DATAS
import datas from "../../datas/logements"

//COMPONENTS
import Carousel from "../../components/Carousel";
import Collapse from "../../components/Collapse";

//IMG
import greyStar from "../../assets/img/greystar.png";
import redStar from "../../assets/img/redstar.png";

function Accomodation() {

  let idAccomodation= useParams().Number;
  const data = datas.find(data => data.id === idAccomodation);
  if (data === undefined) {return(<Navigate to="/Erreur" /> )};

  return (
    <div className="pages">
      <main className="accomodation">
        <Carousel slides={data.pictures} />
        <div className="accomodation__description">
          <div className="accomodation__description__info">
          <h1 className="accomodation__description__title">{data.title}</h1>
          <p className="accomodation__description__location">{data.location}</p>
        </div>
        <div className="accomodation__description__host"> 
          <p className="accomodation__description__host__name">{data.host.name}</p>
          <img src={data.host.picture} alt="Portrait du propiétaire" />
        </div>
        <div className="accomodation__description__tags">
            {data.tags.map((tag, index) => {
              return (<button key={index}>{tag}</button>)
              })}
        </div>
        <div className="accomodation__description__stars">
						{[...Array(5)].map((star, index) => {
								return (
									<img key={index} src={index < data.rating ? redStar : greyStar} alt="star" />
								)
							})}
            </div>
          <div className="accomodation__description__collapse--description">
            <Collapse title={"Description"} text={data.description} />
          </div>
          <div className="accomodation__description__collapse--equipement">
            <Collapse title={"Equipement"} text={data.equipments} />
          </div>
        </div>
      </main> 
    </div>
  )
}

  export default Accomodation
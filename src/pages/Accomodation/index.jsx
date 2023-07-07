import datas from '../../datas/logements'
import Carousel from "../../components/Carousel";
import { useParams } from "react-router-dom";

function Accomodation() {

  let idAccomodation= useParams().Number;
  const data = datas.find(data => data.id === idAccomodation);
  let imageSlider= data.pictures;

  return (
    <div className='pages'>
      <main className='accomodation'>
      <Carousel slides={imageSlider} />
      </main> 
    </div>
  )
}

  export default Accomodation
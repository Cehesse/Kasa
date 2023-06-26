import { Link } from 'react-router-dom'
import Banner from '../../components/Banner'

function Home() {
    return (
      <div className='pages'>
        <Banner />
      <div className='cards'>
        <div className='card_location'>
        <Link className='card_location__title'to="/Accomodation/1">Logement</Link>
        </div>
        <div className='card_location'>
        <Link to='/Accomodation/2'>Logement 2</Link>
        </div>
      </div>
        
      </div>
    )
  }

  export default Home
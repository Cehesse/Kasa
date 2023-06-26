import { Link } from 'react-router-dom'
import Banner from '../../components/Banner'

function Home() {
    return (
      <div className='page'>
        <Banner />
        <Link to="/Accomodation/1">Logement</Link>
      </div>
    )
  }

  export default Home
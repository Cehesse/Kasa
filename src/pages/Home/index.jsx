import { Link } from 'react-router-dom'

function Home() {
    return (
      <div>
        <h1> Page d'accueil 🏠</h1>
        <div>
        <Link to="/Accomodation/1">Logement</Link>
        </div>
      </div>
    )
  }

  export default Home
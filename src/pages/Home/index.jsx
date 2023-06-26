//import { Link } from 'react-router-dom'
import Banner from '../../components/Banner'
import Card from '../../components/Card'

/* const reponse = await fetch("../datas/logements.json");
const logement = reponse.json();
console.log(logement); */

import datas from '../../datas/logements'

function Home() {
    return (
      <div className='pages'>
        <Banner />
      <div className='cards'>
      {datas.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
      </div> 
      </div>
    )
  }

  export default Home
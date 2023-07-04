import Banner from '../../components/Banner'
import Card from '../../components/Card'
import datas from '../../datas/logements'

function Home() {
    return (
      <div className='pages'>
      <Banner title={"Chez vous, partout et ailleurs"}/>
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
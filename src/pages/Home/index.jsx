import Banner from '../../components/Banner'
import Card from '../../components/Card'
import datas from '../../datas/logements'

function Home() {
    return (
      <div className='pages'>
      <Banner title={"Chez vous, partout et ailleurs"}/>
      <main className='cards'>
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
      </main> 
      </div>
    )
  }

  export default Home
import Banner from '../../components/Banner'
//import datas from '../../datas/logements'

function Home() {
    return (
      <div className='pages'>
        <Banner />
{/*       <div className='cards'>
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
      </div>  */}
      </div>
    )
  }

  export default Home
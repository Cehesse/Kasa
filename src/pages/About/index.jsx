import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse';
import datasAbout from '../../datas/about'

function About() {
    return (
      <div className='pages'>
        <Banner />
        <main className='collapses'>
				{datasAbout.map(data => {
					return (
            <Collapse
						  key={data.id}
							title={data.aboutTitle} 
              text={data.aboutText} 
            />
					)
        })}
			</main>
      </div>
    )
  }

  export default About
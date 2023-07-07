//COMPONENTS
import Banner from "../../components/Banner"
import Collapse from "../../components/Collapse";

//DATAS
import datasAbout from "../../datas/about"

//FCT
function About() {
    return (
      <div className="pages">
        <Banner />
        <main className="collapses">
				{datasAbout.map(data => { return ( <Collapse key={data.id} title={data.aboutTitle} text={data.aboutText} />)})}
			</main>
      </div>
    )
  }

  export default About
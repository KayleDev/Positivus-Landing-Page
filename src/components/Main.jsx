// Components
import Button from './Button.jsx'
import CompanyLogos from './CompanyLogos.jsx'
// Others
import illustration from '../assets/illustration.svg'
import "./Main.css"

const Main = () => {
  return (
    <main>
        <div className="Main_Container">
            <div className="Main-Right-Side">
                <h1>Navigating the digital landscape for success</h1>
                
                <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
            
                <Button value={"Book a consultation"}/>
            </div>

            <div className="Main-Left-Side">
                <img src={illustration} className='Illustration_Image' alt="Ilustração de um megafone" />
            </div>
        </div>

        <CompanyLogos/>

        <div className='Service_Types'>
            <h2 className='Services'>Services</h2>

            <p className='Services_Text'>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
        </div>
    </main>
  )
}

export default Main
import './CompanyLogo.css'

// Companies Logo
import CompanyLogo from '../assets/CompanyLogos/Company logo.svg'
import CompanyLogo2 from '../assets/CompanyLogos/Company logo-1.svg'
import CompanyLogo3 from '../assets/CompanyLogos/Company logo-2.svg'
import CompanyLogo4 from '../assets/CompanyLogos/Company logo-3.svg'
import CompanyLogo5 from '../assets/CompanyLogos/Company logo-4.svg'
import CompanyLogo6 from '../assets/CompanyLogos/Company logo-5.svg'

const CompanyLogos = () => {
  return (
    <div className='Company_Container'>
        <img src={CompanyLogo} alt="Logo da Amazon" />
        <img src={CompanyLogo2} alt="Logo da Dribbble" />
        <img src={CompanyLogo3} alt="Logo da HubSpot" />
        <img src={CompanyLogo4} alt="Logo da Notion" />
        <img src={CompanyLogo5} alt="Logo da Netflix" />
        <img src={CompanyLogo6} alt="Logo da Zoom" />
    </div>
  )
}

export default CompanyLogos
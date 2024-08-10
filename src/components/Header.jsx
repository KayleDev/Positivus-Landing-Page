// CSS
import './Header.css'
// Imagem
import Logo from '../assets/Logo.svg'

const Header = () => {
  return (
    <header>
        <div className='Header_Container'> 
            <img src={Logo} alt="Logo Positivus" className='Positivus_Logo' />

            <div className='Header_Side'>
                <ul className='Header_List'>
                    <li>About us</li>
                    <li>Services</li>
                    <li>Use Cases</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                </ul>
                <input type="button" value='Request a quote' className='Header_Button'/>
            </div>
        </div>
    </header>
  )
}

export default Header
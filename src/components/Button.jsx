import './Button.css'

// eslint-disable-next-line react/prop-types
const Button = ({value}) => {
  return (
    <input className="Common_Button" type="button" value={value}/>
  )
}

export default Button
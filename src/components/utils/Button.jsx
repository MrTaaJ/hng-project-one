const Button = ({type, isDisabled, icon}) => {
  return (
    <button className="btn" type={type} disabled={isDisabled}>
        {icon}
    </button>
  )
}

export default Button

Button.defaultProps = {
    type: 'button',
    id: 'btn',
    isDisabled: false,
}
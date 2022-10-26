const Button = ({icon, type, isDisabled}) => {
  return (
    <button className="btn" type={type} disabled={isDisabled}>
        {icon}
    </button>
  )
}

export default Button

Button.defaultProps = {
    type: 'button',
    isDisabled: false,
}
const Button = ({type, isDisabled, icon, device}) => {
  return (
    <button className={`btn btn-${device}`} type={type} disabled={isDisabled}>
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
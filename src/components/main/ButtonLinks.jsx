import Button from "../utils/Button"

const ButtonLinks = ({btnDetail, type, isDisabled,}) => {
  return (
    <button className="link-btn" type={type} id={btnDetail.id} disabled={isDisabled}>
        <a class="button" href={btnDetail.link}>{btnDetail.text}</a>
    </button>
  )
}

export default ButtonLinks

Button.defaultProps = {
  type: 'button',
  id: 'btn',
  isDisabled: false,
}
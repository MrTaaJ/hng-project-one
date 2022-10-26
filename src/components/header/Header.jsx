import Button from '../utils/Button'
import profileImg from './img/hng-profile-img.png'
import { AiOutlineEllipsis } from "react-icons/ai";
import './header.css'

const Header = () => {
  return (
    <header>
        <nav> <Button icon={<AiOutlineEllipsis size={30}/>}/> </nav>
        <div className='profile'>
            <img src={profileImg} alt="profile_img" />
            <div className="title">Annete Black</div>
        </div>
    </header>
  )
}

export default Header
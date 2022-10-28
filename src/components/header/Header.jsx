import Button from '../utils/Button'
import { BiCamera } from "react-icons/bi";
import { AiOutlineEllipsis } from "react-icons/ai";
import { BsReply } from "react-icons/bs";
import './header.css'

const Header = () => {
  return (
    <header>
        <nav>
          <div className="desktop-btn">
            <Button icon={<BsReply size={20}/>} device='desktop'/>
            <div className="hover-msg">Share Link</div>
          </div>          
          <Button icon={<AiOutlineEllipsis size={30}/>} device='mobile'/>
        </nav>
        <div className='profile'>
            <div className='profile-container' id='profile__img'>
              <div className='change-profile'>< BiCamera size={25} /></div>
            </div>
            <div className="title">Saheed Tajudeen</div>
        </div>
    </header>
  )
}

export default Header
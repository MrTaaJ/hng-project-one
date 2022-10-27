import Button from '../utils/Button'
import { BiCamera } from "react-icons/bi";
import { AiOutlineEllipsis } from "react-icons/ai";
import './header.css'

const Header = () => {
  return (
    <header>
        <nav>
          {/* <div className="hover-msg">Share Link</div> */}
          <Button icon={<AiOutlineEllipsis size={30}/>}/>
        </nav>
        <div className='profile'>
            <div className='profile-container' id='profile_img'>
              <div className='change-profile'>< BiCamera size={25} /></div>
            </div>
            <div className="title">Saheed Tajudeen</div>
        </div>
    </header>
  )
}

export default Header
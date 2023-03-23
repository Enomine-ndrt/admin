
import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import {useContext} from 'react';
import { DarkModeContext } from '../../context/darkModeContext';


const Navbar = () => {
  const {dispatch} = useContext(DarkModeContext);

  return (
    <div className='navbar'>
       <div className='wrapper'>
          <div className='search'>
            <input type='text' placeholder='search...'/>
            <SearchOutlinedIcon />
          </div>
          <div className='items'>
              <div className='item'>
                <LanguageOutlinedIcon  className='icon'/>
                English
              </div>
              <div className='item'>
                <DarkModeOutlinedIcon className='icon'  onClick={()=>dispatch({type:"TOGGLE"})}/>
              </div>
              <div className='item'>
               <FullscreenExitOutlinedIcon className='icon'/>
              </div>
              <div className='item'>
                <NotificationsNoneOutlinedIcon className='icon'/>
                <div className='counter'>1</div>
              </div>
              <div className='item'>
                <ChatBubbleOutlineOutlinedIcon className='icon'/>
                <div className='counter'>2</div>
              </div>
              <div className='item'>
                  <ListOutlinedIcon className='icon'/>
              </div>
              <div className='item'>
                 <img src="https://images.pexels.com/photos/8072243/pexels-photo-8072243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='avatar'/>
              </div>
          </div>
       </div>
    </div>
  )
}

export default Navbar;

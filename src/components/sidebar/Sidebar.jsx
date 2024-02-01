import React from 'react'
import {Link} from 'react-router-dom'
import './sidebar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h1>Tasks</h1>
      <div className="links">
        <Link to={`welcome`} className='sidebar-item'>
          <HomeOutlinedIcon />
          Welcome
        </Link>

        <Link to={`tasks`} className='sidebar-item'>
          <TaskOutlinedIcon />
          Tasks
        </Link>

        <Link to={`profile`} className='sidebar-item'>
          <AccountBoxOutlinedIcon />
          Profile
        </Link>
        
      </div>
      
    </div>
  )
}

export default Sidebar
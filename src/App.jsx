import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Welcome from './components/welcome/Welcome';
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div className='main'>
        <Sidebar />
        <Routes>
            <Route path="welcome" element={<Welcome />} />
            {/* <Route path="tasks" element={<Tasks />} />
            <Route path="profile" element={<Profile />} /> */}
        </Routes>
    </div>
    )
}

export default App
import React, { createContext, useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Welcome from './components/welcome/Welcome';
import Tasks from './components/tasks/Tasks';
import {Routes, Route} from 'react-router-dom'
import supabase from './api/api';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
            <div className='main'>
                <Sidebar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                <Routes>
                    <Route path="welcome" element={<Welcome isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
                    <Route path="tasks" element={<Tasks />} />
                    {/* <Route path="profile" element={<Profile />} /> */}
                </Routes>
            </div>
    )
}

export default App
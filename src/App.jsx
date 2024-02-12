import React, { createContext, useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Welcome from './components/welcome/Welcome';
import Tasks from './components/tasks/Tasks';
import Profile from './components/profile/Profile';
import {Routes, Route} from 'react-router-dom'
import {supabase} from './api/api';
import { useEffect } from 'react';

const App = () => {
    const [session, setSession] = useState();

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })
  
      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })
    }, [])
        
    return (
      <div className='main'>
          { session ? 
          <>
            <Sidebar session={session} />
            <Routes>
              <Route path="/" element={<Tasks session={session} />} />
              <Route path="tasks" element={<Tasks session={session} />} />
              <Route path="profile" element={<Profile session={session} />} />
            </Routes>
          </>
          : <Welcome />}
          
      </div>
    )
}

export default App
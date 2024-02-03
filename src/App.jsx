import React, { createContext, useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Welcome from './components/welcome/Welcome';
import Tasks from './components/tasks/Tasks';
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
                <Sidebar session={session} />
                { session ? 
                <Routes>
                    <Route path="welcome" element={<Welcome session={session}/>} />
                    <Route path="tasks" element={<Tasks session={session} />} />
                    {/* <Route path="profile" element={<Profile />} /> */}
                </Routes>
                : <Welcome session={session}/>}
                
            </div>
    )
}

export default App
import React from 'react'
import {supabase} from "../../api/api"
import { useState } from 'react';
import { useEffect } from 'react';
import './profile.css'

const Profile = (props) => {
    const session = props.session;
    const [tasks, setTasks] = useState();

    async function getTasksCompleted() {
        const {data, error} = await supabase.from('tasks').select()
        .eq('user_id', session.user.id)
        .eq('is_done', true)

        setTasks(data)
    }

    useEffect(() => {
        getTasksCompleted();
    }, [])

    return (
        <div>
            <h2>Profile</h2>
            <div className="container">
                <div className="email">
                    <div className='label'>Email</div>
                    <p>{ session.user.email }</p>
                </div>
                <div className="join-date">
                    <div className='label'>Joined us on </div>
                    <p>{ session.user.created_at.substring(0, 10) }</p>
                </div>
                <div className="tasks-done">
                    <div className='label'>Tasks done: </div>
                    { tasks && <div>{tasks.length}</div>}   
                </div>
            </div>
        </div>
    )
}

export default Profile
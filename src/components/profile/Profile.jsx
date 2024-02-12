import React from 'react'
import {supabase} from "../../api/api"
import { useState } from 'react';
import { useEffect } from 'react';

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
                <img src="" alt="" />
                <p>{ session.user.email }</p>
                <p>{ session.user.created_at }</p>
                { tasks && 
                <p>tasks done: {tasks.length}</p>}
            </div>
        </div>
    )
}

export default Profile
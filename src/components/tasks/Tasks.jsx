import React, { useState } from 'react'
import { useEffect } from 'react';
import { supabase } from '../../api/api';
import './tasks.css'

const Tasks = (props) => {
  const [tasks, setTasks] = useState();
  const [creatingNewTask, setCreatingNewTask] = useState(false);

  const handleNewTaskClick = () => {
    setCreatingNewTask(prev => !prev)
  }

  async function getTasks() {
    const { data, error } = 
    await supabase.from('tasks').select()
      .eq('user_id', props.session.user.id)
    setTasks(prev => data)
  }

  const handleFormClick = (event) => {
    event.preventDefault();
    const form = event.target;
    console.log(form.title.value)

    supabase
      .from('tasks')
      .insert({
        title: form.title.value,
        description: form.description.value,
        user_id: props.session.user.id,
        category: form.category.value,
        category_color: form.category.category_color,
      })
      .then(({ error }) => console.log(error))
      .then(handleNewTaskClick())
      .then(getTasks())
  }

  async function handleDeleteClick(event) {
    const id = event.target.id;
    const { error } = 
    await supabase
      .from('tasks')
      .delete()
      .eq('id', id)
    getTasks();
  }

  useEffect( () => {
    getTasks();
  }, [])

  return (
    <div className='tasks-content'>
      <div>
        <button className='new-task-btn' onClick={handleNewTaskClick}>New task</button>
        {creatingNewTask &&
        <form className="new-task-form" onSubmit={handleFormClick}>
          <label htmlFor="title">
            Title
            <input type="text" name='title' id='title' required/>
          </label>
          <label htmlFor="title">
            Description
            <input type="text" name='description' id='description' />
          </label>
          <label htmlFor="title">
            Category
            <input type="text" name='category' id='category'/>
          </label>
          <button type="submit" >Create new task</button>
        </form> }
      </div>
      <div className='tasks-list'>
        { tasks &&
        tasks.map( task => 
            <div key={task.id} className='task'>
              <h4>{task.title}</h4>
              <button onClick={handleDeleteClick} id={task.id}>Delete</button>
              <p>{task.description}</p>
              <div>{task.category}</div>
              <div>{task.doneBefore}</div>
            </div>
        )}
      </div>
    </div>
  )
}

export default Tasks

/* 
1. New task button - shows form to create a new task
2. List of tasks in reverse order of creation 
*/
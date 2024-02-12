import React, { useState } from 'react'
import { useEffect } from 'react';
import { supabase } from '../../api/api';
import './tasks.css'
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';


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
      .eq('is_done', false)
    setTasks(prev => data)
  }

  const handleFormClick = (event) => {
    event.preventDefault();
    const form = event.target;

    console.log(form.categoryColor.value)

    supabase
      .from('tasks')
      .insert({
        title: form.title.value,
        description: form.description.value,
        user_id: props.session.user.id,
        category: form.category.value,
        category_color: form.categoryColor.value,
      })
      .then(({ error }) => console.log(error))
      .then(handleNewTaskClick())
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
  }, [creatingNewTask])

  async function handleDoneClick(event) {
    const id = event.target.id;

    console.log(event.target.id)

    const { error } = await supabase
      .from('tasks')
      .update({ is_done: true })
      .eq('id', id)

    getTasks();

  }

  return (
    <div className='tasks-content'>
      <div className='new-task'>
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
          <label htmlFor="categoryColor">
            Category Color
            <input type="color" name="categoryColor" id="categoryColor" />
          </label>
          <button type="submit" >Create new task</button>
        </form> }
      </div>
      <div className='tasks-list'>
        { tasks &&
        tasks.map( task => 
            <div key={task.id} className='task'>
              <h4>{task.title}</h4>
              <div className='task-buttons'>
                <button>
                  <DoneOutlinedIcon id={task.id} onClick={handleDoneClick} />
                </button>
                <button>
                  <DeleteOutlinedIcon taskid={task.id} onClick={handleDeleteClick}/>
                </button>
              </div>
              <p>{task.description}</p>
              
              <div style={{background: task.category_color}} className="category">
                {task.category}
              </div>
              
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
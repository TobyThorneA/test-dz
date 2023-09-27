import { useDispatch } from 'react-redux';
import './createTask.scss'
import  { useState } from 'react';
import { createTask } from '../../store/reducer/tasks-list';
import { useNavigate } from 'react-router-dom';

const renderTask = (taskText: string, id = new Date().getTime()) => {
  return (
    {
      task: taskText,
      id: id,
      done:false,
    }
  )
}

const CreateTask = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [taskContent, setTaskContent] = useState('')

  return (
    <div className="wrapper">
      <form action="" className='wrapper__form'>
        <textarea 
          className='wrapper__textarea' 
          value={taskContent}
          onChange={(e) => {
            e.preventDefault()
            setTaskContent(e.target.value)
          }}
        ></textarea>
        <button 
          className='wrapper__button'
          onClick={(e) => {
            e.preventDefault()
            console.log(taskContent)
            dispatch(createTask(renderTask(taskContent)))
            setTaskContent('')
            navigate('/')
          }}
        >Создать задачу!</button>
      </form>
    </div>
  )
}

export default CreateTask
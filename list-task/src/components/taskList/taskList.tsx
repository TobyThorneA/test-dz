import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { doneTask, removeTask } from '../../store/reducer/tasks-list'
import './taskList.scss'

const TaskList = () =>  {

  const select = useAppSelector(state => state.tasksListName.taskData )
  // const doneTaskCurrent = useAppSelector(state => state.tasksListName.doneTask)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  console.log(select)
  const selectLength = () => {
    if(select.length === 0){
      return (
        <div>НЕТ ЗАДАЧ НА ТЕКУЩИЙ МОМЕНТ</div>
      )
    }
  }
  
  

  return (
    <section className='wrapper'>
      <div className='wrapper__tasks'>
        <button onClick={() => navigate('/create-task') }>доавить задачу</button>
        <ul className='ul'>
          {selectLength()}
          {select.map(it => {
            return (
                <li 
                  className={`wrapper__list-item${it.done?'--done': ''}`}
                  key={it.id}>
                  {it.task}
                  <div className='wrapper__buttons'>
                    <button
                      className='wrapper__button-task'
                      onClick={() => dispatch(doneTask(it.id))}
                    > выполнена</button>
                    <button
                      className='wrapper__button-task'  
                      onClick={() => dispatch(removeTask(it.id))}
                    >удалить
                    </button>
                  </div>
                </li>
            )
          })}
        </ul>
        
      </div>
    </section>
  )
}

export default TaskList
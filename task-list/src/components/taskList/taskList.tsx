// import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import './taskList.scss'

const TaskList = () =>  {

  // const select = useAppSelector(state => state)
  // const dispatch = useAppDispatch()
  // console.log(select)
  return (
    <section className='wrapper'>
      <div className='wrapper__tasks'>
        <ul>
          <li>задача</li>
        </ul>
      </div>
    </section>
  )
}

export default TaskList
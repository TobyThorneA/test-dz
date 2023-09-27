import { Routes, Route } from 'react-router-dom';
import TaskList from '../taskList/taskList';
import CreateTask from '../createTask/createTask';

const App = () =>  {
  return (
    
    <div className="App">
      <Routes>
        <Route path={'/'} Component={TaskList}/>
        <Route path={'/create-task'} Component={CreateTask}/>
      </Routes>
    </div>
  );
}

export default App;

import { PayloadAction, createSlice,  } from "@reduxjs/toolkit";
import { RootState } from "../store";
// import { RootState } from "../store";

interface TaskPayload {
  task: string;
  id: number;
  done: boolean
}

const initialState = {
  taskData: [
    {
      task: 'Задача1',
      id: 0,
      done: false
    },
    {
      task: 'Задача2',
      id: 1,
      done: false
    }
  ],
  doneTask: false
}

export const tasksListState = createSlice({
  name: 'taskListState',
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<TaskPayload>) => {
      state.taskData.push(action.payload)
    },
    removeTask: (state, action : PayloadAction<number>) => {
      
      state.taskData = state.taskData.filter((it) => {
        return it.id !== action.payload
      })
    },
    doneTask : (state, action: PayloadAction<number>) => {
      const task = state.taskData.find(t => t.id === action.payload)
      if(task){
        task.done = !task.done
      }
    }
  }
})

export const { createTask, removeTask, doneTask } = tasksListState.actions


export const selectCount = (state: RootState) => state.tasksListName

export default tasksListState.reducer

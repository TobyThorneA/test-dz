import { createSlice } from "@reduxjs/toolkit";
// import { RootState } from "../store";


const initialState = {
  taskData: [
    {
      task: 'Задача1',
      id: 0,
    },
    {
      task: 'Задача2',
      id: 1,
    }
  ]
}

export const tasksListState = createSlice({
  name: 'taskListState',
  initialState,
  reducers: {
    createTask: (state, action) => {
      console.log(state)
    }
  }
})

export const { createTask } = tasksListState.actions


// export const selectCount = (state: RootState) => state.tasksListName

export default tasksListState.reducer

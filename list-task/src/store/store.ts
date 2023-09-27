import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { tasksListState } from './reducer/tasks-list'

const rootReducer = combineReducers({
  tasksListName: tasksListState.reducer
})

const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store

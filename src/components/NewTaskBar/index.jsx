import { TaskInput, TaskButton, StyledTaskBar } from './styles'
import { useState } from 'react'

export const NewTaskBar = ({ setTasks }) => {
  const [newTask, setNewTask] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setTasks(prev => {
      return [
        ...prev,
        { text: newTask, completed: false }
      ]
    })
  }

  const handleChange = (e) => {
    const value = e.target.value
    setNewTask(value)
  }
  return (
    <StyledTaskBar onSubmit={handleSubmit}>
      <TaskInput type='text' placeholder='add details' onChange={handleChange} />
      <TaskButton>Add</TaskButton>
    </StyledTaskBar>
  )
}

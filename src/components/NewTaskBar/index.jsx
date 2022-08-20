import { TaskInput, TaskButton, StyledTaskBar } from './styles'
import { useState } from 'react'

export const NewTaskBar = ({ createTask }) => {
  const [newTask, setNewTask] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    createTask(newTask)

    const input = e.target.firstChild
    input.value = ''
    setNewTask('')
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

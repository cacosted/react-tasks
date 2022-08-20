import { useState } from 'react'

export const useTasks = (initial = []) => {
  const [tasks, setTasks] = useState(initial)

  const createTask = (newTask) => {
    if (newTask.trim()) {
      const updatedTasks = [
        ...tasks,
        { text: newTask, completed: false }
      ]
      setTasks(updatedTasks)
    }
  }
  const completeTask = ({ target }) => {
    const currentId = target.parentElement.id

    const updatedTasks = tasks.map(task => {
      if (task.text === currentId) return { ...task, completed: !task.completed }
      return task
    })
    setTasks(updatedTasks)
  }

  const deleteTask = ({ target }) => {
    const currentId = target.id
    const updatedTasks = tasks.filter(task => task.text !== currentId)
    setTasks(updatedTasks)
  }

  const deleteAllTasks = () => {
    const updatedTasks = tasks.filter(task => !task.completed)
    setTasks(updatedTasks)
  }
  return {
    tasks,
    createTask,
    completeTask,
    deleteTask,
    deleteAllTasks
  }
}

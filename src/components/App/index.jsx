import { useState } from 'react'
import { TaskFilters } from '../TaskFilters'
import { NewTaskBar } from '../NewTaskBar'
import { Task } from '../Task'
import { TaskList } from '../Tasklist'
import { Title, Container } from './styles'

const initialTaskList = [
  { text: 'I can add a new task', completed: false },
  { text: 'I can complete a task', completed: true },
  { text: 'I can toggle between tabs', completed: false }
]

export const App = () => {
  const [tasks, setTasks] = useState(initialTaskList)
  const [activeTab, setActiveTab] = useState('All')
  const completeTask = ({ target }) => {
    const currentId = target.parentElement.id

    const updatedTask = tasks.map(task => {
      if (task.text === currentId) return { ...task, completed: !task.completed }
      return task
    })
    setTasks(updatedTask)
  }
  return (
    <Container>
      <Title>#Todo</Title>
      <TaskFilters activeTab={activeTab} setActiveTab={setActiveTab} />
      <NewTaskBar setTasks={setTasks} />
      <TaskList>
        {
          tasks.map((task, id) => (
            <Task key={id} text={task.text} completed={task.completed} completeTask={completeTask} />
          ))
        }
      </TaskList>
    </Container>
  )
}

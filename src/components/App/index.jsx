import { useState } from 'react'
import { TaskFilters } from '../TaskFilters'
import { NewTaskBar } from '../NewTaskBar'
import { TaskList } from '../Tasklist'
import { Title, Container } from './styles'
import { useTasks } from '../../hooks/useTasks'

const initialTaskList = [
  { text: 'I can add a new task', completed: false },
  { text: 'I can complete a task', completed: true },
  { text: 'I can toggle between tabs', completed: false }
]

export const App = () => {
  const [activeTab, setActiveTab] = useState('All')
  const { tasks, createTask, completeTask, deleteTask, deleteAllTasks } = useTasks(initialTaskList)
  return (
    <Container>
      <Title>#Todo</Title>
      <TaskFilters activeTab={activeTab} setActiveTab={setActiveTab} />
      <NewTaskBar createTask={createTask} />
      <TaskList
        completeTask={completeTask}
        deleteTask={deleteTask}
        deleteAllTasks={deleteAllTasks}
        activeTab={activeTab}
        tasks={tasks}
      />
    </Container>
  )
}

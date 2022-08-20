import { useState } from 'react'
import { TaskFilters } from '../TaskFilters'
import { NewTaskBar } from '../NewTaskBar'
import { TaskList } from '../Tasklist'
import { Title, Container } from './styles'
import { useTasks } from '../../hooks/useTasks'

export const App = () => {
  const [activeTab, setActiveTab] = useState('All')
  const { tasks, createTask, completeTask, deleteTask, deleteAllTasks } = useTasks()
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

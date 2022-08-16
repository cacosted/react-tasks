import { useState } from 'react'
import styled from 'styled-components'
import { TaskFilters } from './components/TaskFilters'
import { NewTaskBar } from './components/NewTaskBar'
import { Task } from './components/Task'
import { TaskList } from './components/Tasklist'
import { font, weight } from './styles/styleConfig'

const Title = styled.h1`
  text-align: center;
  font-family: ${font.accent};
  font-weight: ${weight.bold};
`
const Container = styled.main`
  margin-block-start: 2em;
  max-width: 600px;
  margin-inline: auto;
`

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

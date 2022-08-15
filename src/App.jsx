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
  { text: 'Do coding challenge', completed: false },
  { text: 'Do coding challenge', completed: true },
  { text: 'Do coding challenge', completed: false }
]

export const App = () => {
  const [taskList, setTaskList] = useState(initialTaskList)
  const [activeTab, setActiveTab] = useState('All')

  return (
    <Container>
      <Title>#Todo</Title>
      <TaskFilters activeTab={activeTab} setActiveTab={setActiveTab} />
      <NewTaskBar setTaskList={setTaskList} />
      <TaskList>
        {
          taskList.map((task, id) => (
            <Task key={id} text={task.text} completed={task.completed} />
          ))
        }
      </TaskList>
    </Container>
  )
}

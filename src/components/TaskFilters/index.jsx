import { TaskBar, TaskTab } from './styles'

export const TaskFilters = ({ activeTab, setActiveTab }) => {
  const handleClick = ({ target }) => {
    const tabName = target.id
    setActiveTab(tabName)
  }
  return (
    <TaskBar>
      <TaskTab id='All' active={activeTab === 'All'} onClick={handleClick}>All</TaskTab>
      <TaskTab id='Active' active={activeTab === 'Active'} onClick={handleClick}>Active</TaskTab>
      <TaskTab id='Completed' active={activeTab === 'Completed'} onClick={handleClick}>Completed</TaskTab>
    </TaskBar>
  )
}

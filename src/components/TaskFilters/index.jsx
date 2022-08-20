import { TaskBar, TaskTab } from './styles'

const tabs = {
  all: 'All',
  active: 'Active',
  completed: 'Completed'
}

export const TaskFilters = ({ activeTab, setActiveTab }) => {
  const handleClick = (tabName) => {
    setActiveTab(tabName)
  }

  return (
    <TaskBar>
      <TaskTab active={activeTab === tabs.all} onClick={() => handleClick(tabs.all)}>All</TaskTab>
      <TaskTab active={activeTab === tabs.active} onClick={() => handleClick(tabs.active)}>Active</TaskTab>
      <TaskTab active={activeTab === tabs.completed} onClick={() => handleClick(tabs.completed)}>Completed</TaskTab>
    </TaskBar>
  )
}

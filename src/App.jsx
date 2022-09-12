import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  return (
    <div className='bg-zinc-900 h-screen'>
      <div className='container  mx-auto p-10'>
      <TaskForm></TaskForm>
      <TaskList ></TaskList>
      </div>
    </div>
  )
}

export default App
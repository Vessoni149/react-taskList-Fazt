import {useContext} from 'react';
import {TaskContext} from '../Context/TaskContext';

function TaskCard({ task }) {
  const {deleteTask} = useContext(TaskContext);
  return (
        <div className='bg-gray-800 text-white p-4 rounded-md'>
            <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
            <p className='text-gray-250 text-sm'>{task.description}</p>
            <button className='bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400' onClick={()=>{deleteTask(task.id)}}         //aca hay que pasarle como parametro a la funcion deteleTask el id de la tarjeta que queremos eliminar, pero no podemos ponerlo fuera de la funcion flecha. Primero hay qeu ejecutar una funcion que luego ejecute el deleteTask. Esto es para que la función solo se ejecutte una vez se de clik. Si estuviera así: onClick={deleteTask(task.id)}, se ejecutaria al renderizar el componente
            >Eliminar tarea</button>
        </div>
  )
}
export default TaskCard;

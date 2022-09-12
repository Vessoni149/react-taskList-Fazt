import { createContext } from "react";
import { useState, useEffect } from "react";
import {tasks as data} from '../tasks';               //el 'as' se usa para darle un alias. Sirve para cuando hay constantes con el mismo nombre.

//Las funciones deleteTask y createTask estaban creadas en App. Si la quiero usar en un componente hijo de otro componente tenía que pasarla primero al padre y despues al hijo para que éste la pueda usar, como pasa por ej con la funcion deleteTask en TaskCard. Para evitar esto se suele crear un componente padre que contenga app que se llama contexto. Y desde cada componente hijo (no importa su nivel) puede aceder a ese contexto. De esa forma  todos los componentes pueden compartir el "estado". Ahora pase las funciones y el estado (useState) a este archivo para que puedan acceder todos los componetntes.
//props tiene una propiedad especial que es children, que indica que dentro van a ir componentes hijos.


export const TaskContext = createContext()              //react tiene esta funcion que retorna un contexto que se llama provider pero se le suele cambiar el nombre para identificar cada contexto (puede haber varios). Acá se llamara TextContext
export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);

    function createTask(task){
        setTasks([...tasks,{
          title: task.title,
          id: tasks.length,
          description: task.description
        }])             //esto copia el arreglo de tareas (1er parametro) y le añade una tarea(segundo parametro)
      };
    function deleteTask(taskId){
      setTasks(tasks.filter(task => task.id !==taskId))
      //filter quita un elemento del array, generando un nuevo array. Filter tiene como parametro una funcion flecha con un parametro que representa cada elemento del array, en este caso 'task'. Y por cada recorrido va a comparar cada elemento del arrai (su id en este caso) con una condicion. Si la condicion se cumple para el elemento, éste se añade al nuevo array, si no se cumple lo filtra. En definitiva arma un nuevo array con los elementos que cumplan la condicion.
      //la funcion deleteTask recibe como parametro taskId que si vemos en el componente TaskCard, va a ser task.id.
    }

    //usamos useEffect porque al cargar este componente, las tasks no existen. Entonces dejamos el arrai de useState vacio, y cuando carga el componente agregamos las tareas
    useEffect(()=>{
        setTasks(data)              //data viene a ser el archivo tasks pero con un alias.
    }, []);

  return (
    
    <TaskContext.Provider value={{
        tasks, 
        deleteTask, 
        createTask}}>                             
        {props.children}
    </TaskContext.Provider>
    
 //lo que haremos es englobar al componente App en este contexto, para que todos los elementos sean parte del context y puedan acceder a los estados.
  )
}

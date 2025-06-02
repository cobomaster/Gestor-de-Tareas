import { useState } from 'react';
import FormularioTarea from './Formulario';

const ListaTarea = () => {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    const tareaConId = {
      ...tarea,
      id: crypto.randomUUID(),
    };
    setTareas((prevTareas) => [...prevTareas, tareaConId]);
  };

  const eliminarTarea = (id) => {
    setTareas((prevTareas) => prevTareas.filter((tarea) => tarea.id !== id));
  };

  return (
    <div className='lista'>
      <FormularioTarea agregarTarea={agregarTarea} />

      <div className='tareas'>
        <h2 className='Titulo'>Lista de Tareas</h2>

        {tareas.length === 0 ? (
          <p className='sinTarea'>No hay tareas pendientes</p>
        ) : (
          <ul>
            {tareas.map((tarea) => (
              <li key={tarea.id} className='tarea'>
                <div className='tarea-info'>
                  <p className='tarea-nombre'>{tarea.nombre}</p>
                  <p className='tarea-categoria'>{tarea.categoria}</p>
                </div>
                <button
                  onClick={() => eliminarTarea(tarea.id)}
                  className='btnEliminar'
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ListaTarea;

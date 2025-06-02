import { useState } from 'react';
import FormularioTarea from './Formulario';

const ListaTarea = () => {
    const [ tareas, setTareas ] = useState([]);

    const agregarTarea = (tarea) => {
        setTareas((prev) => [...prev, tarea]);
    };

    return (
        <div className='lista'>
           <FormularioTarea agregarTarea={agregarTarea} />

           <div className='tareas'>
            <h2 className='Titulo'> Lista de Tareas </h2>
            
            {tareas.length === 0 ? (
                <p className='sinTarea'> No hay tareas pendientes </p>
            ) : (
                <ul className='ul'>
                    {tareas.map((tarea) => (
                       <li key={tarea.id} className='li'>
                            <div>
                            <span className='span'>{tarea.nombre}</span>
                            <span className='span'> {tarea.categoria} </span>
                            </div>
                        <span className='span'> {tarea.fecha} </span>
                        <span className='span'> {tarea.hora} </span>
                        <span className='span'> {tarea.descripcion} </span>
                        <span className='span'> {tarea.prioridad} </span>
                        <span className='span'> {tarea.estado} </span>
                        <span className='span'> {tarea.usuario} </span>
                        </li>
                    ))}
                </ul>
            )}
              </div>
        </div>
    );
};
export default ListaTarea;

                            
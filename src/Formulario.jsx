import { useState } from 'react';

const FormularioTarea = ({ agregarTarea, TareaEditar, actualizarTarea }) => {
  const [formulario, setFormulario] = useState({
    nombre: TareaEditar ? TareaEditar.nombre : '',
    categoria: TareaEditar ? TareaEditar.categoria : '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formulario.nombre.trim()) {
      setError('El nombre de la tarea es obligatorio');
      return;
    }

    if (!formulario.categoria) {
      setError('La categoría es obligatoria');
      return;
    }

    if (TareaEditar) {
      actualizarTarea({
        ...TareaEditar,
        nombre: formulario.nombre.trim(),
        categoria: formulario.categoria,
      });
    } else {
      agregarTarea({
        id: crypto.randomUUID(), // Genera un ID único
        nombre: formulario.nombre.trim(),
        categoria: formulario.categoria,
      });
    }

    setFormulario({
      nombre: '',
      categoria: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <h2 className="Titulo">{TareaEditar ? 'Editar Tarea' : 'Agregar Tarea'}</h2>
      {error && <p className="error">{error}</p>}

      <label className="label" htmlFor="nombre">
        Nombre de la Tarea
      </label>
      <span className="span">(Obligatorio)</span>
      <input
        type="text"
        name="nombre"
        value={formulario.nombre}
        onChange={handleChange}
        className="nombre"
      />
        <br/>
        <br/>
      <label className="label" htmlFor="categoria">
        Categoría
      </label>
      <select
        name="categoria"
        value={formulario.categoria}
        onChange={handleChange}
        className="categoria"
      >
        <option value="">Selecciona una categoría</option>
        <option value="trabajo">Trabajo</option>
        <option value="estudio">Estudio</option>
        <option value="hogar">Hogar</option>
        <option value="otro">Otro</option>
      </select>

        <br/>
        <br/>
        
      <button type="submit" className="btn">
        {TareaEditar ? 'Actualizar Tarea' : 'Agregar Tarea'}
      </button>
    </form>
  );
};

export default FormularioTarea;

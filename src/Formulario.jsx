import { useState } from 'react';

const FormularioTarea = ({ agregarTarea }) => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    categoria: '', // Lo agrego para que el select funcione correctamente
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formulario.nombre) {
      alert('Por favor, completa los campos');
      return;
    }

    const nuevaTarea = {
      id: Date.now(),
      nombre: formulario.nombre,
      categoria: formulario.categoria || 'sin categoría',
      fecha: '',         // valores vacíos que podrías pedir después
      hora: '',
      descripcion: '',
      prioridad: '',
      estado: '',
      usuario: '',
    };

    agregarTarea(nuevaTarea);

    // Reiniciar el formulario
    setFormulario({
      nombre: '',
      categoria: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <h2 className="Titulo">Agregar Tarea</h2>

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

      <button type="submit" className="btn">
        Agregar Tarea
      </button>
    </form>
  );
};

export default FormularioTarea;
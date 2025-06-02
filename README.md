Historia 2: Crear un gestor de tareas básico

1) Estructura principal del proyecto
-- Se creó App.jsx, Formulario.jsx y Lista.jsx con división lógica de responsabilidades.

2) Componente FormularioTarea
-- Se desarrolló un formulario controlado con useState.
-- Se agregaron campos nombre y categoria.
-- Se validó el campo obligatoriamente nombre.
-- Se generó un id único con Date.now() para cada tarea.

3) Componente ListaTarea
-- Se implementó el estado global de tareas con UseState
-- Se agregó lógica para recibir nuevas tareas desde el formulario
-- Se renderizó condicionalmente una lista de tareas o un mensaje de "no hay tareas".
-- Se mostraron los campos de cada tarea (nombre, categoria, etc)

4) Correcciones y limpieza
-- Se evitó el renderizado duplicado del formulario
-- Se renombraron props para mantener consistencia (AgregarTarea -> agregarTarea)
-- Se agregaron valores por defecto para los campos no ingresados.
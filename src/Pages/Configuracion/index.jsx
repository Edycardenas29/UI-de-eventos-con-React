// Archivo: src/pages/Configuracion.jsx

import React, { useState } from 'react';
import Layout from '../../Components/Layout';

const Configuracion = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [notificaciones, setNotificaciones] = useState(false); // Estado para manejar las notificaciones

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setNotificaciones(checked);
    } else {
      if (name === 'nombre') {
        setNombre(value);
      } else if (name === 'correo') {
        setCorreo(value);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para guardar la configuración del usuario
    console.log('Configuración guardada:', { nombre, correo, notificaciones });
  };

  return (
    <Layout>
      <section className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-4">Configuración de Usuario</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-sm font-bold mb-2">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={nombre}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="correo" className="block text-sm font-bold mb-2">Correo Electrónico:</label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={correo}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="notificaciones" className="flex items-center">
              <input
                type="checkbox"
                id="notificaciones"
                name="notificaciones"
                checked={notificaciones}
                onChange={handleInputChange}
                className="mr-2"
              />
              Recibir Notificaciones
            </label>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Guardar Configuración</button>
        </form>
      </section>
    </Layout>
  );
};

export default Configuracion;

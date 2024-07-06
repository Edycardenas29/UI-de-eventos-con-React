// Archivo: src/pages/Invitaciones.jsx

import React, { useState } from 'react';
import Layout from '../../Components/Layout';

const Invitaciones = () => {
  const [invitaciones, setInvitaciones] = useState([
    { id: 1, evento: 'Boda de Verano', descripcion: 'Celebra el amor con nuestra boda temática de verano.' },
    { id: 2, evento: 'Fiesta de Cumpleaños', descripcion: '¡Celebra un año más de vida con amigos y familia!' },
    { id: 3, evento: 'Conferencia de Innovación', descripcion: 'Descubre las últimas tendencias en tecnología e innovación.' },
    // Agrega más invitaciones según sea necesario
  ]);

  const [invitacion, setInvitacion] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
    eventId: null, // Agregamos un campo para el ID del evento seleccionado
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInvitacion({ ...invitacion, [name]: value });
  };

  const handleEnviarInvitacion = (evento) => {
    setInvitacion({
      ...invitacion,
      eventId: evento.id, // Asignamos el ID del evento seleccionado
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Invitación enviada:', invitacion);
    // Aquí puedes agregar lógica adicional para enviar la invitación a tu backend
    // Limpia el formulario después de enviar la invitación
    setInvitacion({
      nombre: '',
      correo: '',
      mensaje: '',
      eventId: null,
    });
  };

  return (
    <Layout>
      <section className="text-center my-8">
        <h1 className="text-3xl font-bold">Invitaciones</h1>
        <p className="text-lg mt-4">Envía invitaciones personalizadas para tus eventos.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {invitaciones.map((invitacionItem) => (
          <div key={invitacionItem.id} className="bg-white rounded-lg overflow-hidden shadow-md p-4">
            <h3 className="text-xl font-bold mb-2">{invitacionItem.evento}</h3>
            <p className="text-gray-600">{invitacionItem.descripcion}</p>
            {/* El botón debe llamar a handleEnviarInvitacion con el evento correspondiente */}
            <button
              onClick={() => handleEnviarInvitacion(invitacionItem)}
              className="block mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Enviar Invitación
            </button>
          </div>
        ))}
      </section>

      {/* Formulario de invitación */}
      {invitacion.eventId && (
        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Formulario de Invitación</h2>
          <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="nombre" className="block text-sm font-bold mb-2">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={invitacion.nombre}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="correo" className="block text-sm font-bold mb-2">Correo Electrónico:</label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={invitacion.correo}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="mensaje" className="block text-sm font-bold mb-2">Mensaje:</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={invitacion.mensaje}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
                required
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Enviar Invitación</button>
          </form>
        </section>
      )}
    </Layout>
  );
};

export default Invitaciones

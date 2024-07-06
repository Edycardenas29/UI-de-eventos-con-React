// Archivo: src/pages/Calendario.jsx

import React, { useState } from 'react';
import Layout from '../../Components/Layout';

const Calendario = () => {
  // Arreglo de fechas reservadas (solo como ejemplo, podrías manejar esto desde una base de datos o API)
  const [fechasReservadas, setFechasReservadas] = useState([
    { id: 1, fecha: '2024-07-15', reservadoPor: 'Usuario A' },
    { id: 2, fecha: '2024-07-20', reservadoPor: 'Usuario B' },
  ]);

  // Estado para el formulario de reserva
  const [reserva, setReserva] = useState({
    name: '',
    date: '',
    place: '',
    numberOfPeople: 1,
  });

  // Manejador de cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReserva({ ...reserva, [name]: value });
  };

  // Manejador para enviar la reserva
  const handleSubmit = (e) => {
    e.preventDefault();
    const isDateReserved = fechasReservadas.some(fecha => fecha.fecha === reserva.date);
    if (isDateReserved) {
      alert('La fecha seleccionada ya está reservada. Por favor, elija otra fecha.');
      return;
    }

    // Aquí podrías agregar la lógica para enviar la reserva a tu backend o realizar alguna acción
    console.log('Reserva enviada:', reserva);
    
    // Actualizar las fechas reservadas
    setFechasReservadas([
      ...fechasReservadas,
      { id: fechasReservadas.length + 1, fecha: reserva.date, reservadoPor: reserva.name }
    ]);

    // Resetear el formulario después de enviar la reserva
    setReserva({
      name: '',
      date: '',
      place: '',
      numberOfPeople: 1,
    });
  };

  return (
    <Layout>
      <section className="text-center my-8">
        <h1 className="text-3xl font-bold">Calendario de Reservas</h1>
        <p className="text-lg mt-4">Consulta las fechas disponibles y realiza una reserva.</p>
      </section>

      {/* Listado de fechas reservadas */}
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Fechas Reservadas</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {fechasReservadas.map((fecha) => (
            <li key={fecha.id} className="bg-white rounded-lg overflow-hidden shadow-md p-4">
              <p className="text-lg font-bold mb-2">{fecha.fecha}</p>
              <p className="text-gray-600">Reservado por: {fecha.reservadoPor}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Formulario de reserva */}
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Reservar Fecha</h2>
        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-2">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={reserva.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-bold mb-2">Fecha:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={reserva.date}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="place" className="block text-sm font-bold mb-2">Lugar:</label>
            <input
              type="text"
              id="place"
              name="place"
              value={reserva.place}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="numberOfPeople" className="block text-sm font-bold mb-2">Número de Asistentes:</label>
            <input
              type="number"
              id="numberOfPeople"
              name="numberOfPeople"
              value={reserva.numberOfPeople}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              min="1"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Enviar Reserva</button>
        </form>
      </section>
    </Layout>
  );
};

export default Calendario;

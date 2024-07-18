import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import Layout from '../../Components/Layout';

const Calendario = () => {
  const initialReservations = [
    { id: uuidv4(), fecha: '2024-07-15', reservadoPor: 'Usuario A', lugar: 'Lugar A', numberOfPeople: 5, nombreEvento: 'Evento A' },
    { id: uuidv4(), fecha: '2024-07-20', reservadoPor: 'Usuario B', lugar: 'Lugar B', numberOfPeople: 3, nombreEvento: 'Evento B' },
  ];

  const [fechasReservadas, setFechasReservadas] = useState(() => {
    const savedReservas = JSON.parse(localStorage.getItem('fechasReservadas'));
    return savedReservas ? savedReservas : initialReservations;
  });

  const [reserva, setReserva] = useState({
    id: null,
    nombreEvento: '',
    reservadoPor: '',
    fecha: '',
    lugar: '',
    numberOfPeople: 1,
  });

  const [modoEdicion, setModoEdicion] = useState(false);

  useEffect(() => {
    localStorage.setItem('fechasReservadas', JSON.stringify(fechasReservadas));
  }, [fechasReservadas]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReserva((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modoEdicion) {
      const reservasActualizadas = fechasReservadas.map((item) =>
        item.id === reserva.id ? { ...item, nombreEvento: reserva.nombreEvento, reservadoPor: reserva.reservadoPor, fecha: reserva.fecha, lugar: reserva.lugar, numberOfPeople: reserva.numberOfPeople } : item
      );
      setFechasReservadas(reservasActualizadas);
      setModoEdicion(false);
    } else {
      const isDateReserved = fechasReservadas.some((fecha) => fecha.fecha === reserva.fecha);
      if (isDateReserved) {
        alert('La fecha seleccionada ya está reservada. Por favor, elija otra fecha.');
        return;
      }
      setFechasReservadas([
        ...fechasReservadas,
        { ...reserva, id: uuidv4() } // Generamos un ID único para cada nueva reserva
      ]);
    }

    setReserva({
      id: null,
      nombreEvento: '',
      reservadoPor: '',
      fecha: '',
      lugar: '',
      numberOfPeople: 1,
    });
  };

  const editarReserva = (id) => {
    const reservaEditar = fechasReservadas.find((item) => item.id === id);
    setReserva({ ...reservaEditar });
    setModoEdicion(true);
  };

  const cancelarEdicion = () => {
    setModoEdicion(false);
    setReserva({
      id: null,
      nombreEvento: '',
      reservadoPor: '',
      fecha: '',
      lugar: '',
      numberOfPeople: 1,
    });
  };

  const eliminarReserva = (id) => {
    const reservasFiltradas = fechasReservadas.filter((item) => item.id !== id);
    setFechasReservadas(reservasFiltradas);
  };

  const handleEditarClick = (id) => {
    editarReserva(id);
  };

  return (
    <Layout>
      <section className="text-center my-8">
        <h1 className="text-3xl font-bold">Calendario de Reservas</h1>
        <p className="text-lg mt-4">Consulta las fechas disponibles y realiza una reserva.</p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Fechas Reservadas</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {fechasReservadas.map((fecha) => (
            <li key={fecha.id} className="bg-white rounded-lg overflow-hidden shadow-md p-4 cursor-pointer"
                onClick={() => handleEditarClick(fecha.id)}>
              <p className="text-lg font-bold mb-2">{fecha.fecha}</p>
              <p className="text-gray-600">Evento: {fecha.nombreEvento}</p>
              <p className="text-gray-600">Reservado por: {fecha.reservadoPor}</p>
              <p className="text-gray-600">Lugar: {fecha.lugar}</p>
              <p className="text-gray-600">Número de Asistentes: {fecha.numberOfPeople}</p>
              <div className="flex mt-2">
                <button
                  onClick={(e) => { e.stopPropagation(); editarReserva(fecha.id); }}
                  className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                >
                  Editar
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); eliminarReserva(fecha.id); }}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">{modoEdicion ? 'Editar Reserva' : 'Reservar Fecha'}</h2>
        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
          {modoEdicion && (
            <div className="mb-4">
              <label htmlFor="id" className="block text-sm font-bold mb-2">ID:</label>
              <input
                type="text"
                id="id"
                name="id"
                value={reserva.id}
                readOnly
                className="w-full p-2 border border-gray-300 rounded bg-gray-200"
              />
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="nombreEvento" className="block text-sm font-bold mb-2">Nombre del Evento:</label>
            <input
              type="text"
              id="nombreEvento"
              name="nombreEvento"
              value={reserva.nombreEvento}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="reservadoPor" className="block text-sm font-bold mb-2">Reservado por:</label>
            <input
              type="text"
              id="reservadoPor"
              name="reservadoPor"
              value={reserva.reservadoPor}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fecha" className="block text-sm font-bold mb-2">Fecha:</label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              value={reserva.fecha}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lugar" className="block text-sm font-bold mb-2">Lugar:</label>
            <input
              type="text"
              id="lugar"
              name="lugar"
              value={reserva.lugar}
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
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">{modoEdicion ? 'Guardar Cambios' : 'Enviar Reserva'}</button>
          {modoEdicion && (
            <button
              type="button"
              onClick={cancelarEdicion}
              className="ml-2 bg-gray-500 text-white p-2 rounded"
            >
              Cancelar Edición
            </button>
          )}
        </form>
      </section>
    </Layout>
  );
};

export default Calendario;

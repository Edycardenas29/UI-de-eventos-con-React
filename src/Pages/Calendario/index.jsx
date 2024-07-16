import React, { useState } from 'react';
import Layout from '../../Components/Layout';

const Calendario = () => {
  const [fechasReservadas, setFechasReservadas] = useState([
    { id: 1, fecha: '2024-07-15', reservadoPor: 'Usuario A', lugar: 'Lugar A', numberOfPeople: 5 },
    { id: 2, fecha: '2024-07-20', reservadoPor: 'Usuario B', lugar: 'Lugar B', numberOfPeople: 3 },
  ]);

  const [reserva, setReserva] = useState({
    id: null,
    name: '',
    date: '',
    place: '',
    numberOfPeople: 1,
  });

  const [modoEdicion, setModoEdicion] = useState(false);

  const handleInputChange = (e, id) => {
    const { name, value } = e.target;
    const reservasActualizadas = fechasReservadas.map((item) =>
      item.id === id ? { ...item, [name]: value } : item
    );
    setFechasReservadas(reservasActualizadas);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modoEdicion) {
      // Modo de edición: Actualizar la reserva existente
      const reservasActualizadas = fechasReservadas.map((item) =>
        item.id === reserva.id ? { ...item, ...reserva } : item
      );
      setFechasReservadas(reservasActualizadas);
      setModoEdicion(false);
    } else {
      // Modo de creación: Agregar una nueva reserva
      const isDateReserved = fechasReservadas.some((fecha) => fecha.fecha === reserva.date);
      if (isDateReserved) {
        alert('La fecha seleccionada ya está reservada. Por favor, elija otra fecha.');
        return;
      }
      setFechasReservadas([
        ...fechasReservadas,
        { id: fechasReservadas.length + 1, ...reserva }
      ]);
    }

    // Resetear el formulario después de enviar la reserva
    setReserva({
      id: null,
      name: '',
      date: '',
      place: '',
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
      name: '',
      date: '',
      place: '',
      numberOfPeople: 1,
    });
  };

  const eliminarReserva = (id) => {
    const reservasFiltradas = fechasReservadas.filter((item) => item.id !== id);
    setFechasReservadas(reservasFiltradas);
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
              {modoEdicion && reserva.id === fecha.id ? (
                <>
                  <div className="mb-4">
                    <label htmlFor={`name-${fecha.id}`} className="block text-sm font-bold mb-2">Nombre:</label>
                    <input
                      type="text"
                      id={`name-${fecha.id}`}
                      name="name"
                      value={reserva.name}
                      onChange={(e) => handleInputChange(e, fecha.id)}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor={`date-${fecha.id}`} className="block text-sm font-bold mb-2">Fecha:</label>
                    <input
                      type="date"
                      id={`date-${fecha.id}`}
                      name="date"
                      value={reserva.date}
                      onChange={(e) => handleInputChange(e, fecha.id)}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor={`place-${fecha.id}`} className="block text-sm font-bold mb-2">Lugar:</label>
                    <input
                      type="text"
                      id={`place-${fecha.id}`}
                      name="place"
                      value={reserva.place}
                      onChange={(e) => handleInputChange(e, fecha.id)}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor={`numberOfPeople-${fecha.id}`} className="block text-sm font-bold mb-2">Número de Asistentes:</label>
                    <input
                      type="number"
                      id={`numberOfPeople-${fecha.id}`}
                      name="numberOfPeople"
                      value={reserva.numberOfPeople}
                      onChange={(e) => handleInputChange(e, fecha.id)}
                      className="w-full p-2 border border-gray-300 rounded"
                      min="1"
                      required
                    />
                  </div>
                  <button
                    onClick={() => handleSubmit(fecha.id)}
                    className="bg-blue-500 text-white p-2 rounded"
                  >
                    Guardar Cambios
                  </button>
                  <button
                    onClick={cancelarEdicion}
                    className="ml-2 bg-gray-500 text-white p-2 rounded"
                  >
                    Cancelar Edición
                  </button>
                </>
              ) : (
                <>
                  <p className="text-lg font-bold mb-2">{fecha.fecha}</p>
                  <p className="text-gray-600">Reservado por: {fecha.reservadoPor}</p>
                  <p className="text-gray-600">Lugar: {fecha.lugar}</p>
                  <p className="text-gray-600">Número de Asistentes: {fecha.numberOfPeople}</p>
                  <div className="flex mt-2">
                    <button
                      onClick={() => editarReserva(fecha.id)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => eliminarReserva(fecha.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Eliminar
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Formulario de reserva */}
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">{modoEdicion ? 'Editar Reserva' : 'Reservar Fecha'}</h2>
        {!modoEdicion && (
          <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-bold mb-2">Nombre:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={reserva.name}
                onChange={(e) => setReserva({ ...reserva, name: e.target.value })}
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
                onChange={(e) => setReserva({ ...reserva, date: e.target.value })}
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
                onChange={(e) => setReserva({ ...reserva, place: e.target.value })}
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
                onChange={(e) => setReserva({ ...reserva, numberOfPeople: parseInt(e.target.value) })}
                className="w-full p-2 border border-gray-300 rounded"
                min="1"
                required
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">{modoEdicion ? 'Guardar Cambios' : 'Enviar Reserva'}</button>
          </form>
        )}
      </section>
    </Layout>
  );
};

export default Calendario;


// Archivo: src/pages/Eventos.jsx

import React, { useState } from 'react';
import Layout from '../../Components/Layout';

const Eventos = () => {
  const [reserva, setReserva] = useState({
    id: '',
    name: '',
    date: '',
    place: '',
    numberOfPeople: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReserva({ ...reserva, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar la reserva a tu backend o realizar alguna acción
    console.log('Reserva enviada:', reserva);
    // Puedes resetear el formulario después de enviar la reserva
    setReserva({
      id: '',
      name: '',
      date: '',
      place: '',
      numberOfPeople: 1,
    });
  };

  const eventos = [
    {
      id: 1,
      titulo: 'Boda de Verano',
      descripcion: 'Celebra el amor con nuestra boda temática de verano.',
      fecha: '15 de agosto de 2024',
      lugar: 'Jardines del Hotel Magnolia',
      imagen: 'https://images.pexels.com/photos/13924590/pexels-photo-13924590.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },
    {
      id: 2,
      titulo: 'Conferencia de Innovación',
      descripcion: 'Descubre las últimas tendencias en tecnología e innovación.',
      fecha: '25 de septiembre de 2024',
      lugar: 'Centro de Convenciones Metropolis',
      imagen: 'https://media.istockphoto.com/id/1214717311/es/foto/ingenieros-reunidos-en-el-laboratorio-de-investigaci%C3%B3n-tecnol%C3%B3gica-ingenieros-cient%C3%ADficos-y.webp?b=1&s=170667a&w=0&k=20&c=htVWQK35FJ3LcHYAeezv-kmZKc09L2MORhACw3JutOM=',
    },
    // Agrega más eventos según sea necesario
  ];

  return (
    <Layout>
      <section className="text-center my-8">
        <h1 className="text-3xl font-bold">Próximos Eventos</h1>
        <p className="text-lg mt-4">Explora nuestros próximos eventos y regístrate hoy mismo.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {eventos.map((evento) => (
          <div key={evento.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img className="w-full h-48 object-cover" src={evento.imagen} alt={evento.titulo} />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{evento.titulo}</h3>
              <p className="text-gray-600">{`Fecha: ${evento.fecha} | Lugar: ${evento.lugar}`}</p>
              <p className="mt-2">{evento.descripcion}</p>
              {/* Botón o enlace para mostrar el formulario de reserva */}
              <button
                onClick={() => setReserva({ ...reserva, id: evento.id, date: evento.fecha, place: evento.lugar })}
                className="block mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Reservar
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Formulario de reserva */}
      {reserva.id && (
        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Formulario de Reserva</h2>
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
              <label htmlFor="date" className="block text-sm font-bold mb-2">Fecha del Evento:</label>
              <input
                type="text"  // Cambia el tipo de input según el formato de fecha que necesites
                id="date"
                name="date"
                value={reserva.date}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="place" className="block text-sm font-bold mb-2">Lugar del Evento:</label>
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
      )}
    </Layout>
  );
};

export default Eventos

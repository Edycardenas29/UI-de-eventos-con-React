import React, { useState } from 'react';
import Layout from '../../Components/Layout';

const Eventos = () => {
  const [eventos, setEventos] = useState([
    {
      id: 1,
      titulo: 'Boda de Verano',
      descripcion: 'Celebra el amor con nuestra boda temática de verano.',
      fecha: '15 de agosto de 2024',
      lugar: 'Jardines del Hotel Magnolia',
      imagen: 'https://images.pexels.com/photos/13924590/pexels-photo-13924590.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      numberOfPeople: 50,
    },
    {
      id: 2,
      titulo: 'Conferencia de Innovación',
      descripcion: 'Descubre las últimas tendencias en tecnología e innovación.',
      fecha: '25 de septiembre de 2024',
      lugar: 'Centro de Convenciones Metropolis',
      imagen: 'https://media.istockphoto.com/id/1214717311/es/foto/ingenieros-reunidos-en-el-laboratorio-de-investigaci%C3%B3n-tecnol%C3%B3gica-ingenieros-cient%C3%ADficos-y.webp?b=1&s=170667a&w=0&k=20&c=htVWQK35FJ3LcHYAeezv-kmZKc09L2MORhACw3JutOM=',
      numberOfPeople: 30,
    },
    // Agrega más eventos según sea necesario
  ]);

  const [reserva, setReserva] = useState({
    name: '',
    numberOfPeople: 1,
  });

  const [nuevoEvento, setNuevoEvento] = useState({
    titulo: '',
    descripcion: '',
    fecha: '',
    lugar: '',
    imagen: '',
    numberOfPeople: 1,
  });

  const [eventoSeleccionado, setEventoSeleccionado] = useState(null);

  const handleInputChange = (e, setState, state) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleFileChange = (e, setState, state) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setState({ ...state, imagen: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitReserva = (e) => {
    e.preventDefault();
    if (reserva.numberOfPeople > 0) {
      console.log('Reserva enviada:', reserva);
      setReserva({ name: '', numberOfPeople: 1 });
    } else {
      alert('La cantidad de participantes debe ser mayor a cero.');
    }
  };

  const handleSubmitNuevoEvento = (e) => {
    e.preventDefault();
    if (nuevoEvento.numberOfPeople > 0) {
      const newEventos = [
        ...eventos,
        { ...nuevoEvento, id: eventos.length + 1 },
      ];
      setEventos(newEventos);
      setNuevoEvento({
        titulo: '',
        descripcion: '',
        fecha: '',
        lugar: '',
        imagen: '',
        numberOfPeople: 1,
      });
    } else {
      alert('La cantidad de participantes debe ser mayor a cero.');
    }
  };

  const handleDelete = (id) => {
    const updatedEventos = eventos.filter((evento) => evento.id !== id);
    setEventos(updatedEventos);
  };

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
                onClick={() => setEventoSeleccionado(evento)}
                className="block mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Reservar
              </button>
              {/* Botón para eliminar la reserva */}
              <button
                onClick={() => handleDelete(evento.id)}
                className="block mt-2 text-red-500 hover:text-red-700"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Formulario de reserva para el evento seleccionado */}
      {eventoSeleccionado && (
        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Reservar {eventoSeleccionado.titulo}</h2>
          <form className="max-w-lg mx-auto" onSubmit={handleSubmitReserva}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-bold mb-2">Nombre:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={reserva.name}
                onChange={(e) => handleInputChange(e, setReserva, reserva)}
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
                onChange={(e) => handleInputChange(e, setReserva, reserva)}
                className="w-full p-2 border border-gray-300 rounded"
                min="1"
                required
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Enviar Reserva</button>
          </form>
        </section>
      )}

      {/* Formulario para crear un nuevo evento */}
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Crear Nuevo Evento</h2>
        <form className="max-w-lg mx-auto" onSubmit={handleSubmitNuevoEvento}>
          <div className="mb-4">
            <label htmlFor="titulo" className="block text-sm font-bold mb-2">Título del Evento:</label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              value={nuevoEvento.titulo}
              onChange={(e) => handleInputChange(e, setNuevoEvento, nuevoEvento)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="descripcion" className="block text-sm font-bold mb-2">Descripción del Evento:</label>
            <textarea
              id="descripcion"
              name="descripcion"
              value={nuevoEvento.descripcion}
              onChange={(e) => handleInputChange(e, setNuevoEvento, nuevoEvento)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="fecha" className="block text-sm font-bold mb-2">Fecha del Evento:</label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              value={nuevoEvento.fecha}
              onChange={(e) => handleInputChange(e, setNuevoEvento, nuevoEvento)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lugar" className="block text-sm font-bold mb-2">Lugar del Evento:</label>
            <input
              type="text"
              id="lugar"
              name="lugar"
              value={nuevoEvento.lugar}
              onChange={(e) => handleInputChange(e, setNuevoEvento, nuevoEvento)}
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
              value={nuevoEvento.numberOfPeople}
              onChange={(e) => handleInputChange(e, setNuevoEvento, nuevoEvento)}
              className="w-full p-2 border border-gray-300 rounded"
              min="1"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="imagen" className="block text-sm font-bold mb-2">Imagen del Evento:</label>
            <input
              type="file"
              id="imagen"
              name="imagen"
              onChange={(e) => handleFileChange(e, setNuevoEvento, nuevoEvento)}
              className="w-full p-2 border border-gray-300 rounded"
              accept=".jpg, .jpeg, .png"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Crear Evento</button>
        </form>
      </section>
    </Layout>
  );
};

export default Eventos;

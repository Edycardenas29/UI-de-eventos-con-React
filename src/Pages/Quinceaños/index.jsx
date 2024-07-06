// Archivo: src/pages/QuinceAnos.jsx
import Layout from '../../Components/Layout';

const Quinceaños = () => {
  return (
    <Layout>
      <section className="text-center my-8">
        <h1 className="text-3xl font-bold">Fiestas de Quince Años</h1>
        <p className="text-lg mt-4">Hacemos que tu celebración sea inolvidable.</p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Galería de Imágenes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <img src="https://images.pexels.com/photos/16450996/pexels-photo-16450996/free-photo-of-fiesta-partido-adolescente-celebracion.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Quinceañera 1" className="w-full h-48 object-cover" />
          <img src="https://images.pexels.com/photos/16420026/pexels-photo-16420026/free-photo-of-fiesta-partido-lujo-feliz.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Quinceañera 2" className="w-full h-48 object-cover" />
          <img src="https://images.pexels.com/photos/17931369/pexels-photo-17931369/free-photo-of-fiesta-partido-bailando-adolescente.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Quinceañera 3" className="w-full h-48 object-cover" />
          {/* Agrega más imágenes según sea necesario */}
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Nuestros Servicios</h2>
        <ul className="list-disc list-inside">
          <li>Planificación de fiestas</li>
          <li>Catering</li>
          <li>Decoración</li>
          <li>Fotografía y videografía</li>
          <li>Música y entretenimiento</li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Testimonios</h2>
        <blockquote className="border-l-4 border-gray-500 pl-4 italic">
          "Fue una noche mágica, todo salió perfecto. Gracias por hacer de mis quince años un día inolvidable." - Sofia
        </blockquote>
        {/* Agrega más testimonios según sea necesario */}
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Contáctanos</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-2">Nombre:</label>
            <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold mb-2">Correo Electrónico:</label>
            <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-bold mb-2">Mensaje:</label>
            <textarea id="message" className="w-full p-2 border border-gray-300 rounded" rows="4"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Enviar</button>
        </form>
      </section>
    </Layout>
  );
};

export default Quinceaños

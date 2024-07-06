import Layout from '../../Components/Layout';

const Bodas = () => {
  return (
    <Layout>
    <section className="text-center my-8">
      <h1 className="text-3xl font-bold">Bodas</h1>
      <p className="text-lg mt-4">Hacemos que tu día especial sea inolvidable.</p>
    </section>

    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Galería de Imágenes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <img src="https://media.istockphoto.com/id/1933373573/es/foto/bride-and-groom-in-wedding-ceremony-on-the-beach.webp?b=1&s=170667a&w=0&k=20&c=d3jK37LAQFi3GlLT7tv7gXpvDbr2wrDOX4fDGMbnzfo=" alt="Boda 1" className="w-full h-48 object-cover" />
        <img src="https://media.istockphoto.com/id/1473067943/es/foto/los-reci%C3%A9n-casados-cortan-y-prueban-felizmente-el-pastel-de-bodas.webp?b=1&s=170667a&w=0&k=20&c=onunmMLuKHvb7ETvQH65aId-3htsB54TmxJ7bfLeSgM=" alt="Boda 2" className="w-full h-48 object-cover" />
        <img src="https://images.unsplash.com/photo-1595407753234-0882f1e77954?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" alt="Boda 3" className="w-full h-48 object-cover" />
        {/* Agrega más imágenes según sea necesario */}
      </div>
    </section>

    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Nuestros Servicios</h2>
      <ul className="list-disc list-inside">
        <li>Planificación de bodas</li>
        <li>Catering</li>
        <li>Decoración</li>
        <li>Fotografía y videografía</li>
        <li>Música y entretenimiento</li>
      </ul>
    </section>

    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Testimonios</h2>
      <blockquote className="border-l-4 border-gray-500 pl-4 italic">
        "La mejor experiencia de nuestras vidas, todo fue perfecto. Gracias a todo el equipo de EventEase por su increíble trabajo." - María y Juan
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

export default Bodas

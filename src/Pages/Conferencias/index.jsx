// Archivo: src/pages/Conferencias.jsx

import React from 'react';
import Layout from '../../Components/Layout';

const Conferencias = () => {
  return (
    <Layout>
      <section className="text-center my-8">
        <h1 className="text-3xl font-bold">Conferencias</h1>
        <p className="text-lg mt-4">Explora nuestros eventos educativos y de networking.</p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Próximas Conferencias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img className="w-full h-48 object-cover" src="https://media.istockphoto.com/id/1857041411/es/foto/orador-p%C3%BAblico-feliz-dando-un-discurso-frente-a-la-multitud-en-el-centro-de-convenciones.webp?b=1&s=170667a&w=0&k=20&c=TgvbV6vLueDTX_Y6dWXGCRt6RRPisOCNp-d3yFbg3Ig=" alt="Conferencia 1" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Derecho social</h3>
              <p className="text-gray-600">Fecha: 10 de agosto de 2024 | Lugar: Sala de Conferencias A</p>
              <p className="mt-2">Únete a nuestra conferencia sobre derecho social, donde exploraremos las dinámicas legales que impactan en el bienestar laboral y los derechos sociales. Desde la protección del empleo hasta las reformas legislativas, este evento ofrece un espacio crucial para discutir y entender el futuro del derecho laboral en nuestra sociedad.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img className="w-full h-48 object-cover" src="https://media.istockphoto.com/id/1499670337/es/foto/audiencia-diversa-escuchando-atentamente-el-animado-panel-de-discusi%C3%B3n-en-la-conferencia.webp?b=1&s=170667a&w=0&k=20&c=iFGDMDCjRtSri8FpiO5T4avGpgpXIibwcZMSFqi7p0w=" alt="Conferencia 2" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Cumbre tecnologica</h3>
              <p className="text-gray-600">Fecha: 15 de septiembre de 2024 | Lugar: Sala de Conferencias B</p>
              <p className="mt-2">Sumérgete en el futuro digital en nuestra cumbre tecnológica, donde líderes innovadores y visionarios se reúnen para explorar las últimas tendencias y desarrollos en tecnología. Desde inteligencia artificial hasta blockchain, esta cumbre ofrece insights y networking invaluable para impulsar tu organización hacia adelante en la era digital.</p>
            </div>
          </div>

          {/* Agrega más conferencias según sea necesario */}
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Registro</h2>
        <p className="text-lg">Regístrate para nuestras próximas conferencias:</p>
        <form className="max-w-lg mx-auto mt-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-2">Nombre:</label>
            <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold mb-2">Correo Electrónico:</label>
            <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Registrarse</button>
        </form>
      </section>
    </Layout>
  );
};

export default Conferencias

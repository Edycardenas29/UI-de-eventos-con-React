// Archivo: src/pages/Grados.jsx

import React from 'react';
import Layout from '../../Components/Layout';

const Grados = () => {
  return (
    <Layout>
      <section className="text-center my-8">
        <h1 className="text-3xl font-bold">Grados</h1>
        <p className="text-lg mt-4">Celebra tu graduación con nosotros.</p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Galería de Imágenes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <img src="https://images.unsplash.com/photo-1577036421869-7c8d388d2123?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmllc3RhcyUyMGRlJTIwZ3JhZG98ZW58MHx8MHx8fDA%3D" alt="Graduación 1" className="w-full h-48 object-cover" />
          <img src="https://media.istockphoto.com/id/993363920/es/foto/muchedumbre-que-anima-en-un-concierto.webp?s=170667a&w=0&k=20&c=bsdY_JVM90FqeBV6KAefTJqkR9grjkBk__bFC0Tu2_o=" alt="Graduación 2" className="w-full h-48 object-cover" />
          <img src="https://media.istockphoto.com/id/1566847299/es/foto/graduada-asi%C3%A1tica-sonriendo-y-sosteniendo-un-certificado-de-diploma-en-el-campus-universitario.webp?b=1&s=170667a&w=0&k=20&c=qgnsM1kgQfnUFIvbs2qt98x6vOlC7ai2nAeuPkoVRRU=" alt="Graduación 3" className="w-full h-48 object-cover" />
          {/* Agrega más imágenes según sea necesario */}
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Nuestros Servicios</h2>
        <ul className="list-disc list-inside">
          <li>Organización de eventos de graduación</li>
          <li>Catering personalizado</li>
          <li>Decoración temática</li>
          <li>Fotografía y videografía profesional</li>
          <li>Entretenimiento y música en vivo</li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Testimonios</h2>
        <blockquote className="border-l-4 border-gray-500 pl-4 italic">
          "Gracias por hacer de nuestra graduación un momento especial y lleno de recuerdos maravillosos." - Juan
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

export default Grados

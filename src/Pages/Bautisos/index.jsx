
import React from 'react';
import Layout from '../../Components/Layout';


const Bautizos = () => {
    return (
      <Layout>
        <section className="text-center my-8">
          <h1 className="text-3xl font-bold">Bautisos</h1>
          <p className="text-lg mt-4">Celebramos bautisos inolvidables.</p>
        </section>
  
        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Galería de Imágenes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <img src="https://media.istockphoto.com/id/1295384598/es/foto/sacerdote-vertiendo-agua-bendita-en-la-pila-bautismal-momentos-antes-de-que-un-ni%C3%B1o-reciba-el.webp?b=1&s=170667a&w=0&k=20&c=KHv-6wFIm91NC3ner-bXHA8X6WXj9ybGxJXf9_6lNpA=" alt="Bautizo 1" className="w-full h-48 object-cover" />
            <img src="https://media.istockphoto.com/id/172165207/es/foto/bautizo.webp?b=1&s=170667a&w=0&k=20&c=u7TpEE4ZvI7EO1_-oEtDjVbK278O7yzsWzAoqA_gse0=" alt="Bautizo 2" className="w-full h-48 object-cover" />
            <img src="https://media.istockphoto.com/id/1389451121/es/foto/pastel-sobre-un-fondo-azul-dorado-globos-marrones-para-la-fiesta-de-cumplea%C3%B1os-baby-shower.jpg?s=612x612&w=0&k=20&c=5ZlBCTPaeWf9FYb6-xyyVzTngDmBoaIRu81bIBm5V7M=" alt="Bautizo 3" className="w-full h-48 object-cover" />
            {/* Agrega más imágenes según sea necesario */}
          </div>
        </section>
  
        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Nuestros Servicios</h2>
          <ul className="list-disc list-inside">
            <li>Planificación de bautisos</li>
            <li>Catering</li>
            <li>Decoración</li>
            <li>Fotografía y videografía</li>
            <li>Música y entretenimiento</li>
          </ul>
        </section>
  
        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Testimonios</h2>
          <blockquote className="border-l-4 border-gray-500 pl-4 italic">
            "El bautiso de nuestro bebé fue perfecto gracias al equipo de EventEase. Todo salió increíblemente bien." - Ana y Carlos
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
  
  export default Bautizos
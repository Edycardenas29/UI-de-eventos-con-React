import React from 'react';
import Layout from '../../Components/Layout';
import Card from '../../Components/Card';

function Home() {
    return (
        <Layout>
            <div className='text-center text-2xl font-bold my-8'>Bienvenidos a EventEase</div>
            
            {/* Sección de Servicios Destacados */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <Card
                    serviceName='Bodas'
                    serviceType='Banquete'
                    price='300'
                    imageUrl='https://images.pexels.com/photos/6479590/pexels-photo-6479590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                />
                <Card
                    serviceName='Bautizos'
                    serviceType='Decoración'
                    price='250'
                    imageUrl='https://media.istockphoto.com/id/1718222300/es/foto/arco-con-oso-silla-de-madera-de-mimbre-tarta-de-moda-para-bautizo-de-celebraci%C3%B3n-deliciosa.jpg?s=2048x2048&w=is&k=20&c=eco3-R-f7G1X4mROsrmc2CrtCvWuWArxK68XFtNuqMA='
                />
                <Card
                    serviceName='Fiestas de Quince Años'
                    serviceType='Entretenimiento'
                    price='400'
                    imageUrl='https://images.pexels.com/photos/2872752/pexels-photo-2872752.jpeg?auto=compress&cs=tinysrgb&w=600'
                />
            </div>

            {/* Slider de Imágenes */}
            {/* Aquí podrías implementar un slider de imágenes usando una librería como react-slick o swiper */}

            {/* Testimonios de Clientes */}
            <div className='my-8'>
                <h2 className='text-3xl font-bold text-center mb-4'>Testimonios de Clientes</h2>
                <div className='flex justify-center items-center'>
                    <div className='max-w-lg w-full bg-white p-4 rounded-lg shadow-lg'>
                        <p className='text-lg italic'>"¡Nuestra boda fue perfecta gracias a EventEase! Altamente recomendados."</p>
                        <p className='mt-4 text-right font-semibold'>- Cliente Satisfecho</p>
                    </div>
                </div>
            </div>

            {/* Formulario de Contacto o Cotización */}
            <div className='my-8'>
                <h2 className='text-3xl font-bold text-center mb-4'>Solicita una Cotización</h2>
                <div className='max-w-md mx-auto'>
                    <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2'>Nombre</label>
                            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='Nombre' />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2'>Correo Electrónico</label>
                            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='email' placeholder='Correo Electrónico' />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2'>Mensaje</label>
                            <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Escribe tu mensaje...' rows='4'></textarea>
                        </div>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button'>
                            Enviar
                        </button>
                    </form>
                </div>
            </div>

            {/* Enlaces Rápidos */}
            <div className='flex justify-center my-8'>
                <a href='/servicios' className='text-blue-500 mx-4 hover:underline'>Ver todos los servicios</a>
                <a href='/contacto' className='text-blue-500 mx-4 hover:underline'>Contacto</a>
                <a href='/perfil' className='text-blue-500 mx-4 hover:underline'>Mi Perfil</a>
            </div>
        </Layout>
    );
}

export default Home;

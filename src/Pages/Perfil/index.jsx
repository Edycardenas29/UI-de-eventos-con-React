// Archivo: src/pages/Profile.jsx

import React, { useState } from 'react';
import Layout from '../../Components/Layout';

const Profile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar los datos a tu backend
    console.log('Datos del perfil:', formData);
    // Puedes resetear el formulario después de enviar los datos
    setFormData({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <Layout>
      <section className="text-center my-8">
        <h1 className="text-3xl font-bold">Perfil</h1>
        <p className="text-lg mt-4">Administra tu perfil y configuración.</p>
      </section>

      <section className="max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-2">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold mb-2">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-bold mb-2">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Actualizar Perfil</button>
        </form>
      </section>
    </Layout>
  );
};

export default Profile;

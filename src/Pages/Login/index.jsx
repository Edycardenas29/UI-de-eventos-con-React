// Archivo: src/pages/Login.jsx

import React, { useState } from 'react';
import Layout from '../../Components/Layout';

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',  // Solo para registro
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister && formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    console.log(isRegister ? 'Registro' : 'Inicio de Sesión', formData);
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <Layout>
      <section className="text-center my-8">
        <h1 className="text-3xl font-bold">{isRegister ? 'Registro' : 'Inicio de Sesión'}</h1>
      </section>

      <section className="max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
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
          {isRegister && (
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-bold mb-2">Confirmar Contraseña:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          )}
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            {isRegister ? 'Registrar' : 'Iniciar Sesión'}
          </button>
          <button
            type="button"
            onClick={() => setIsRegister(!isRegister)}
            className="mt-4 text-blue-500"
          >
            {isRegister ? 'Ya tienes una cuenta? Inicia Sesión' : 'No tienes una cuenta? Regístrate'}
          </button>
        </form>
      </section>
    </Layout>
  );
};

export default Login;

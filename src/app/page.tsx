"use client";
import ingreso from './img/OIG1.jpeg';
import registro from './img/OIG1 (1).jpeg';
import Image from 'next/image';
import useToggleForm from './hook/ToggleForm';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isSignIn, toggleForm] = useToggleForm();

  const handleSignIn = (event:any) => {
    event.preventDefault();
    // Add sign-in logic here
  };

  const handleSignUp = (event:any) => {
    event.preventDefault();
    // Add sign-up logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white rounded-lg shadow-lg flex">
        <div className="p-8 w-96">
          <h2 className="text-3xl font-bold mb-4">
            {isSignIn ? 'Login' : 'Register'}
          </h2>
          <p className="mb-4 text-center justify-center">
            {isSignIn
              ? <h1 className='text-2xl font-bold text-gray-500 mb-4'>
                Inciar sesión
              </h1>
              : <h1 className='text-2xl font-bold text-gray-500 mb-4'>
                Registrarse
                </h1>}
          </p>
          <form onSubmit={isSignIn ? handleSignIn : handleSignUp}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Correo
              </label>
              <input 
                type="email" 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full px-3 py-2 border rounded-lg" 
                required 
              />
            </div>
            {!isSignIn && (
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700">Username</label>
                <input 
                  type="text" 
                  id="username" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  className="w-full px-3 py-2 border rounded-lg" 
                  required 
                />
              </div>
            )}
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700">
                Contraseña
              </label>
              <input 
                type="password" 
                id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="w-full px-3 py-2 border rounded-lg" 
                required 
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">
              {isSignIn ? 'Login' : 'Register'}
            </button>
          </form>
          {isSignIn ? (
            <>  
              <div className="mt-4 text-center">
                <a href="#" className="text-blue-500">Forget password?</a>
              </div>
              <div className="mt-4 text-center">
                <span className='text-blue-500'>Si no tienes una cuenta...</span>
                <button onClick={toggleForm} className="ml-2 text-blue-500">Register</button>
              </div>
            </>
          ) : (
            <div className="mt-4 text-center">
              <span className='text-blue-500'>¿Ya tienes una cuenta?</span>
              <button onClick={toggleForm} className="ml-2 text-blue-500">Inciar sesión</button>
            </div>
          )}
        </div>
        <div className="relative w-96">
          {isSignIn ? (
            <Image 
              src={ingreso}
              alt="Orange slices with ice" 
              layout="fill" 
              objectFit="cover" 
              className="rounded-r-lg w-96"
            />
          ) : (
            <Image 
              src={registro}
              alt="Another image" 
              layout="fill" 
              objectFit="cover" 
              className="rounded-r-lg"
            />
          )}
        </div>
      </div>
    </div>
  );
}


"use client";
import { useState } from 'react';

export default function Home() {
  const [isSignIn, setIsSignIn] = useState(true);
 console.log()
  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6">
      <div>
        <h1 className="mt-2 text-center text-3xl leading-3">
          {isSignIn ? 'Iniciar Sesión' : 'Crear Cuenta'}
        </h1>
      </div>
      <div className="bg-slate-700 mt-4 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-black py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {isSignIn ? (
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-white text-sm font-medium mb-2">Email</label>
                <input type="email" name="email" id="email" className="bg-black border-2 border-gray-600 rounded w-full py-2 px-3 text-white" />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-white text-sm font-medium mb-2">Password</label>
                <input type="password" name="password" id="password" className="bg-black border-2 border-gray-600 rounded w-full py-2 px-3 text-white" />
              </div>
              <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded w-full">Sign In</button>
              <div className="flex justify-end mt-5">
                <button type="button" onClick={toggleForm} className="relative h-12 w-40 overflow-hidden border border-blue-500 text-blue-500 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:duration-300 hover:text-white hover:shadow-blue-500 hover:before:h-64 hover:before:-translate-y-32">
                  Crea una cuenta
                </button>
              </div>
            </form>
          ) : (
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-white text-sm font-medium mb-2">Email</label>
                <input type="email" name="email" id="email" className="bg-black border-2 border-gray-600 rounded w-full py-2 px-3 text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="username" className="block text-white text-sm font-medium mb-2">Username</label>
                <input type="text" name="username" id="username" className="bg-black border-2 border-gray-600 rounded w-full py-2 px-3 text-white" />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-white text-sm font-medium mb-2">Password</label>
                <input type="password" name="password" id="password" className="bg-black border-2 border-gray-600 rounded w-full py-2 px-3 text-white" />
              </div>
              <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded w-full">Crear Cuenta</button>
              <div className="flex justify-end mt-5">
                <button type="button" onClick={toggleForm} className="relative h-12 w-40 overflow-hidden border border-blue-500 text-blue-500 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:duration-300 hover:text-white hover:shadow-blue-500 hover:before:h-64 hover:before:-translate-y-32">
                  Iniciar Sesión
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}



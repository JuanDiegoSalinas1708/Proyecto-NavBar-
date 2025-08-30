import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-indigo-600 text-white p-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo */}
        <h1 className="text-xl font-bold">Mi App</h1>

        {/* Menú en pantallas grandes */}
        <ul className="hidden md:flex gap-x-6">
          <li>
            <a href="#inicio" className="hover:underline">
              Inicio
            </a>
          </li>
          <li>
            <a href="#servicios" className="hover:underline">
              Servicios
            </a>
          </li>
          <li>
            <a href="#contacto" className="hover:underline">
              Contacto
            </a>
          </li>
        </ul>

        {/* Botón hamburguesa en móvil */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {open && (
        <ul className="flex flex-col mt-4 gap-y-2 md:hidden">
          <li>
            <a href="#inicio" className="hover:text-gray-200">
              Inicio
            </a>
          </li>
          <li>
            <a href="#servicios" className="hover:text-gray-200">
              Servicios
            </a>
          </li>
          <li>
            <a href="#contacto" className="hover:text-gray-200">
              Contacto
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

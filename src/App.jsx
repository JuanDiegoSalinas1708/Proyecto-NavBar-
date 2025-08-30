import Navbar from "./navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <h2 className="text-2xl font-semibold">Contenido de la App</h2>
        <p>Bienvenido a mi aplicación 🚀</p>
      </main>
    </div>
  );
}

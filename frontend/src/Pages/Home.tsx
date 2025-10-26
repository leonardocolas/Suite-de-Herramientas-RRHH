import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Bienvenido a la aplicación
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Conectada con Django DRF
      </p>
      <Link
        to="/dashboard"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Ir al Dashboard
      </Link>
    </div>
  );
}
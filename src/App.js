import './App.css';
import Map from './components/Map';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">
        Mapa Interactivo con <span className="text-pink-500">Lazy Loading</span>
      </h1>
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6">
        <Map />
      </div>
      <footer className="mt-10 text-sm text-gray-500">
        © 2025 Tu Proyecto - React Simple Maps & REST Countries
      </footer>
    </div>
  );
}

export default App;

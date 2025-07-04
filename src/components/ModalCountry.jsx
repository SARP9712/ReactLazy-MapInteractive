import React from "react";
import { useCountry } from "../hooks/useCountry";

export default function CountryModal({ countryName, onClose }) {
  const { country, loading, error } = useCountry(countryName);

  if (!countryName) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl w-96 max-w-full p-8 relative ring-2 ring-indigo-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-indigo-600 text-3xl font-extrabold transition-colors"
          aria-label="Cerrar modal"
        >
          ×
        </button>

        {loading ? (
          <p className="text-center text-gray-500 text-lg animate-pulse">Cargando...</p>
        ) : error ? (
          <p className="text-center text-red-600 font-semibold">{error}</p>
        ) : (
          country && (
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-extrabold text-indigo-700">{country.name.common}</h2>
              <img
                src={country.flags.svg}
                alt={`Bandera de ${country.name.common}`}
                className="w-40 h-auto mx-auto rounded-lg border-4 border-indigo-200 shadow-md"
              />
              <div className="text-left space-y-2 mt-4 text-gray-700 font-medium">
                <p><span className="font-semibold text-indigo-600">Capital:</span> {country.capital?.[0] || "N/A"}</p>
                <p><span className="font-semibold text-indigo-600">Región:</span> {country.region}</p>
                <p><span className="font-semibold text-indigo-600">Subregión:</span> {country.subregion}</p>
                <p><span className="font-semibold text-indigo-600">Población:</span> {country.population.toLocaleString()}</p>
                <p><span className="font-semibold text-indigo-600">Área:</span> {country.area.toLocaleString()} km²</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

import React, { useState, Suspense, lazy } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const CountryModal = lazy(() => import("./ModalCountry")); // Lazy loading del modal

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function MapChart() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleClick = (geo) => {
    const countryName = geo.properties.name;
    console.log("País seleccionado:", countryName);
    setSelectedCountry(countryName);
  };

  const handleClose = () => {
    setSelectedCountry(null);
  };

  return (
    <div className="relative">
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => handleClick(geo)}
                style={{
                  default: { fill: "#D6D6DA", outline: "none" },
                  hover: { fill: "#F53", outline: "none", cursor: "pointer" },
                  pressed: { fill: "#E42", outline: "none" },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>

      {selectedCountry && (
        <Suspense
          fallback={
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
              <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg">
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-blue-600 font-medium">Cargando país...</p>
              </div>
            </div>
          }
        >
          <CountryModal countryName={selectedCountry} onClose={handleClose} />
        </Suspense>
      )}
    </div>
  );
}

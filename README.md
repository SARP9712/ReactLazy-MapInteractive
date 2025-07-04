# Mapa Interactivo con Lazy Loading en React

Este proyecto es una aplicación React que muestra un mapa interactivo del mundo donde puedes hacer clic en cualquier país para ver detalles específicos en un modal. El modal carga la información del país de forma **lazy loading** (carga diferida) para optimizar el rendimiento y mostrar habilidades en React y consumo de APIs externas.

---

## Características

- Mapa mundial interactivo usando la librería [`react-simple-maps`](https://www.react-simple-maps.io/).
- Datos de países obtenidos mediante la API pública [REST Countries v3](https://restcountries.com/).
- Modal con detalles del país usando React Lazy y Suspense para carga diferida.
- Estilizado moderno y responsivo con Tailwind CSS.
- Indicadores de carga y manejo de errores en la interfaz.
- Diseño accesible y limpio.

---

## Tecnologías usadas

- React (Hooks, Suspense, Lazy loading)
- Tailwind CSS para estilos
- react-simple-maps para el mapa SVG interactivo
- REST Countries API para datos de países

---

## Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/tu-usuario/mapa-interactivo-lazyloading.git
cd mapa-interactivo-lazyloading


## Uso

- Haz clic en cualquier país del mapa para abrir el modal con sus datos.
- El modal se carga de forma diferida para optimizar el rendimiento.
- Puedes cerrar el modal haciendo clic en la "×" en la esquina superior derecha.

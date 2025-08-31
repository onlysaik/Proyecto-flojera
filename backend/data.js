// backend/data.js

// Mock database en memoria
const data = {
  user: {
    id: 1,
    name: "Invitado",
    avatar: "https://i.pravatar.cc/150?img=3", // avatar de ejemplo
    puntos: 0
  },
  logros: [
    { id: 1, titulo: "Primer juego", descripcion: "Completaste tu primer juego 🎉" }
  ]
};

module.exports = data;

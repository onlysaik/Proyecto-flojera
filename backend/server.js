const express = require("express");
const path = require("path");
const data = require("./data");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));

// =======================
//   API: User
// =======================
app.get("/api/user", (req, res) => {
  res.json(data.user);
});

app.post("/api/user", (req, res) => {
  const { name, avatar, puntos } = req.body;
  if (name) data.user.name = name;
  if (avatar) data.user.avatar = avatar;
  if (puntos !== undefined) data.user.puntos = puntos;
  res.json({ success: true, user: data.user });
});

// =======================
//   API: Logros
// =======================
app.get("/api/logros", (req, res) => {
  res.json(data.logros);
});

app.post("/api/logros", (req, res) => {
  const { titulo, descripcion } = req.body;
  if (!titulo) {
    return res.status(400).json({ error: "El logro necesita un título" });
  }

  const nuevoLogro = {
    id: data.logros.length + 1,
    titulo,
    descripcion: descripcion || ""
  };
  data.logros.push(nuevoLogro);
  res.json({ success: true, logro: nuevoLogro });
});

// =======================
// Servir Frontend
// =======================
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.listen(PORT, () => {
  console.log(`Backend corriendo en http://localhost:${PORT}`);
});

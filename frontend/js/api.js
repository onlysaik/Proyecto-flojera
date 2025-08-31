// frontend/js/api.js

// Funciones de utilidad para interactuar con el backend

export async function getUser() {
  const res = await fetch("/api/user");
  return res.json();
}

export async function updateUser(data) {
  const res = await fetch("/api/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function getLogros() {
  const res = await fetch("/api/logros");
  return res.json();
}

export async function addLogro(titulo, descripcion = "") {
  const res = await fetch("/api/logros", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ titulo, descripcion })
  });
  return res.json();
}

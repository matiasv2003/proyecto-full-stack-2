// Validar nombre
export function validarNombre(nombre) {
  if (!nombre.trim()) {
    return "El nombre es obligatorio.";
  }
  return null;
}

// Validar email
export function validarEmail(email) {
  if (!email.trim()) {
    return "El correo electrónico es obligatorio.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.(com|cl|net)$/;

  if (!emailRegex.test(email)) {
    return "El correo debe contener @ y terminar en .com, .cl o .net";
  }

  return null;
}

// Validar contraseña
export function validarPassword(password) {
  if (password.length < 8) {
    return "La contraseña debe tener al menos 8 caracteres.";
  }
  return null;
}

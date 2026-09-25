function calcularDescuento(precio, porcentaje) {
  if (porcentaje < 0 || porcentaje > 100) return "Porcentaje inválido";
  return precio - (precio * (porcentaje / 100));
}

function validarPassword(password) {
  return password.length >= 8 && /\d/.test(password);
}

function celsiusAFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function esMayorDeEdad(edad) {
  return edad >= 18;
}

function generarNombreCompleto(nombre, apellido) {
  return `${nombre} ${apellido}`;
}

module.exports = {
  calcularDescuento,
  validarPassword,
  celsiusAFahrenheit,
  esMayorDeEdad,
  generarNombreCompleto
};

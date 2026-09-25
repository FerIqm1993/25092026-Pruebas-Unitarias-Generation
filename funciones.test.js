const {
  calcularDescuento,
  validarPassword,
  celsiusAFahrenheit,
  esMayorDeEdad,
  generarNombreCompleto
} = require('./funciones');

describe('Pruebas para funciones.js', () => {
  test('calcularDescuento devuelve precio final con descuento', () => {
    expect(calcularDescuento(1000, 20)).toBe(800);
    expect(calcularDescuento(500, 10)).toBe(450);
  });

  test('calcularDescuento maneja porcentajes inválidos', () => {
    expect(calcularDescuento(300, 120)).toBe("Porcentaje inválido");
    expect(calcularDescuento(100, -5)).toBe("Porcentaje inválido");
  });

  test('validarPassword valida correctamente contraseñas', () => {
    expect(validarPassword("abc12345")).toBe(true);
    expect(validarPassword("abcdef")).toBe(false);
    expect(validarPassword("12345678")).toBe(true);
    expect(validarPassword("abc123")).toBe(false);
  });

  test('celsiusAFahrenheit convierte correctamente', () => {
    expect(celsiusAFahrenheit(0)).toBe(32);
    expect(celsiusAFahrenheit(25)).toBe(77);
    expect(celsiusAFahrenheit(-10)).toBe(14);
  });

  test('esMayorDeEdad determina si es mayor correctamente', () => {
    expect(esMayorDeEdad(18)).toBe(true);
    expect(esMayorDeEdad(25)).toBe(true);
    expect(esMayorDeEdad(16)).toBe(false);
  });

  test('generarNombreCompleto concatena nombre y apellido', () => {
    expect(generarNombreCompleto("Ana", "Martínez")).toBe("Ana Martínez");
    expect(generarNombreCompleto("Luis", "Ramírez")).toBe("Luis Ramírez");
  });
});

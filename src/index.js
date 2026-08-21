function sumar(a, b) {
  return a + b;
}

if (require.main === module) {
  console.log(`Resultado: ${sumar(2, 3)}`);
}

module.exports = { sumar };

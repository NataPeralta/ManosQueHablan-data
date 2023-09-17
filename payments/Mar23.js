const Mar23 = 







function unirArrays(valores, comprobante) {
  const resultado = [];

  for (let i = 0; i < valores.length; i++) {
    const valor = valores[i];
    const comp = comprobante[i];

    for (const key in valor) {
      if (key !== "name" && valor[key] != null && valor[key] !== "") {
        const concept = key;
        const amount = typeof valor[key] === "number" ? valor[key] : parseFloat(valor[key]);

        // Extract the payday based on the "fecha_{concept}" format
        const paydayKey = `fecha_${concept}`;
        const payday = comp[paydayKey] ? comp[paydayKey].trim() : "";

        const receipt = typeof comp[key] === "number" ? comp[key].toString() : "";

        resultado.push({
          name: valor.name,
          concept,
          amount: typeof amount === "number" ? amount : parseFloat(amount),
          payday,
          receipt,
        });
      }
    }
  }

  return resultado;
}

console.log(unirArrays(valores, comprobantes));


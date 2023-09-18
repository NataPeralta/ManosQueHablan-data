const payments = []


/*
async function createPaymentRecords(records) {
  try {
    for (const recordData of records) {
      const response = await fetch("http://127.0.0.1:8090/api/collections/payments/records", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recordData),
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log(`Registro creado con ID: ${responseData.id}`);
      } else {
        console.error("Error al crear registro:", response.statusText);
      }
    }
    console.log("Registros creados exitosamente");
  } catch (error) {
    console.error("Error al crear registros:", error);
  }
}
createPaymentRecords(payments);
*/



function unirArrays(valores, comprobante) {
  const resultado = [];

  for (let i = 0; i < valores.length; i++) {
    const valor = valores[i];
    const comp = comprobante[i];

    for (const key in valor) {
      if (key !== "name" && valor[key] != null && valor[key] !== "") {
        const concept = key;
        const amount = typeof valor[key] === "number" ? valor[key] : parseFloat(valor[key]);
        const payday = typeof comp[key] === "number" ? "" : typeof comp[key] === "string" ? comp[key].match(/\d{2}\/\d{2}\/\d{2}/) : "";
        const receipt = typeof comp[key] === "number" ? comp[key].toString() : "";

        resultado.push({
          name: valor.name,
          concept,
          amount: typeof amount === "number" ? amount : parseFloat(amount),
          payday: payday ? payday[0] : "",
          receipt,
        });
      }
    }
  }

  return resultado;
}

const resultado = unirArrays(valores, comprobantes);
console.log(resultado);
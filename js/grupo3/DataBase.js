// Hacer la solicitud al endpoint
let url = 'http://localhost:8000/getAlldata';
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Manipular los datos y mostrarlos en la tabla
    const maquinasTable = document.getElementById('maquinasTable').getElementsByTagName('tbody')[0];

    // Iterar sobre cada máquina en el JSON
    Object.keys(data).forEach(maquina => {
      data[maquina].forEach(registro => {
        // Crear una fila en la tabla para cada registro
        const row = maquinasTable.insertRow();
        
        // Insertar los datos en las celdas
        Object.values(registro).forEach(valor => {
          const cell = row.insertCell();
          cell.textContent = valor;
        });
      });
    });
  })
  .catch(error => console.error('Error:', error));

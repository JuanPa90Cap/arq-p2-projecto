
let url = 'http://localhost:8000/getAlldata';
fetch(url)
  .then(response => response.json())
  .then(data => {
    
    const maquinasTable = document.getElementById('maquinasTable').getElementsByTagName('tbody')[0];

    
    Object.keys(data).forEach(maquina => {
      data[maquina].forEach(registro => {
      
        const row = maquinasTable.insertRow();
        
       
        Object.values(registro).forEach(valor => {
          const cell = row.insertCell();
          cell.textContent = valor;
        });
      });
    });
  })
  .catch(error => console.error('Error:', error));

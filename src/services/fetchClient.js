

export async function getClient(id){

    const response = await fetch(`http://10.10.0.25:9696/api/Cliente/filtrados/${id}`)
    
    if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }
  const data = await response.json();
  console.log (data);
   // return data.find(client => client.codigoCliente === id);
  return data[data.length-1];
  //return data.find(client => client.munDocumento === id);
}
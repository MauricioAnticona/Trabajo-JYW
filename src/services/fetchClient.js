// export async function getClient(id) {
// 	const response = await fetch(`http://10.10.0.25:9696/api/Cliente/filtrados/${id}`);

// 	if (!response.ok) {
// 		throw new Error('La solicitud no fue exitosa');
// 	}

// 	return await response.json();
// }

// export async function getAverageBuys(numDocumento) {
//   const response = await fetch(`http://10.10.0.25:9696/api/Cliente/PromedioCompra/${numDocumento}`);

//   if (!response.ok) {
//     throw new Error('La solicitud no fue exitosa');
//   }

//   return await response.json();
// }

// export async function getAverageItems(numDocumento) {
//   const response = await fetch(`http://10.10.0.25:9696/api/Cliente/PromedioItems/${numDocumento}`);

//   if (!response.ok) {
//     throw new Error('La solicitud no fue exitosa');
//   }

//   return await response.json();
// }

// export async function getAverageFrequency(numDocumento) {
//   const response = await fetch(`http://10.10.0.25:9696/api/Cliente/PromedioFrecuencia/${numDocumento}`);

//   if (!response.ok) {
//     throw new Error('La solicitud no fue exitosa');
//   }

//   return await response.json();
// }

// export async function getDataClient(numDocumento) {
//   const {averageBuys, averageItems, averageFrequency} = await Promise.all([
//     getAverageBuys(numDocumento),
//     getAverageItems(numDocumento),
//     getAverageFrequency(numDocumento)
//   ]);
//   return {averageBuys, averageItems, averageFrequency};
// }

import clients from '../mocks/clients.json';

export async function getClient(id) {
  console.log('Esto es un mock id:', id);
	const response = clients;
	return response;
}

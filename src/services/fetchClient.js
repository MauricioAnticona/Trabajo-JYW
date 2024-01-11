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
//   return [averageBuys, averageItems, averageFrequency];
// }

import clients from '../mocks/clients.json';

export async function getClient(id) {
	console.log('Esto es un mock id:', id);
	const response = clients;
	return response;
}

export async function getAverageBuys(numDocumento) {
	console.log('Esto es un mock getAverageBuys', numDocumento);
	return 1.5;
}

export async function getAverageItems(numDocumento) {
	console.log('Esto es un mock getAverageItems', numDocumento);
	return 1.2;
}

export async function getAverageFrequency(numDocumento) {
	console.log('Esto es un mock getAverageFrequency', numDocumento);
	return 1.3;
}

export async function getDataClient(numDocumento) {
	console.log('Esto es un mock de dataClient', numDocumento);
	return [
		await getAverageBuys(numDocumento),
		await getAverageItems(numDocumento),
		await getAverageFrequency(numDocumento),
	];
}

export async function getClient(id) {
	const response = await fetch(`http://10.10.0.25:9696/api/Cliente/filtrados/${id}`);

	if (!response.ok) {
		throw new Error('La solicitud no fue exitosa');
	}

	return await response.json();
}

// import clients from '../mocks/clients.json';

// export async function getClient(id) {
// 	const response = clients;
// 	return response;
// }

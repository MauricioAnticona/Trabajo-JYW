import mock from '../mocks/clients.json';

export async function getClient(id){

    const response = mock.data;
    const code = mock.code;

    if(code.description === 404) 
        throw new Error('Client not found');
    if(code.description === 500) 
        throw new Error('Internal server error');

    return response.find(client => client.codigoCliente === id);
}
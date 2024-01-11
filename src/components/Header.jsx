import React from 'react';
import ResultSearchClients from './ResultSearchClients';
import { getClient } from '../services/fetchClient';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';


export default function Header({
	values: ids,
	input: searchClient,
	saveIds: setIDs,
	tab: handleTabs,
	clickedClient: setSelectClient,
}) {
	
  // Modal para mostrar los clientes
  const [modalOpen, setModalOpen] = useState(false);
  const handleClose = () => setModalOpen(false);

  // Seleccionar cliente
	const handleSelect = (e, item) => {
		e.preventDefault();
		setModalOpen(false);
		setSelectClient(item);
	};

	// Guardar el valor del input de busqueda
	function saveSearchClient(e) {
		searchClient.current = e.target.value;
	}

	// Busqueda de cliente al hacer click al boton
	function handleSearchClient() {
		if (!searchClient) {
			alert('Ingrese un ID valido');
			return;
		}
		const fetchClient = async () => {
			const response = await getClient(searchClient.current);
			setIDs(response);
			setModalOpen(true);
		};

		fetchClient();
	}

	return (
		<div className="flex flex-row items-center gap-4 p-4 bg-[#0C3764] text-white">
			<button onClick={() => handleTabs(0)} className="text-3xl font-medium">
				CLIENT
			</button>
			<div className="flex gap-2" onClick={() => handleTabs(0)}>
				<input
					type="text"
					onChange={saveSearchClient}
					placeholder="Escribe el id del cliente"
					className="py-1 px-2 rounded-md focus:outline-none text-black"
				/>
				<button
					onClick={handleSearchClient}
					className=" h-8 w-8 flex items-center justify-center rounded-md bg-[#FFA800]">
					<FaSearch />
				</button>
        <ResultSearchClients values={ids} isOpen={modalOpen} onClick={handleSelect} onHide={handleClose} />
			</div>
		</div>
	);
}

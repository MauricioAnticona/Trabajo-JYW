import React from 'react';
import { getClient } from '../services/fetchClient';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';

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
				<Modal size="xl" aria-labelledby="contained-modal-title-vcenter" show={modalOpen} onHide={handleClose}>
					<Modal.Header closeButton className=" bg-[#0C3764]">
						<Modal.Title className="uppercase  text-white">Clientes registrados</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<table>
							<tbody>
								<tr>
									<td className="uppercase text-s font-medium ">Tipo de documento</td>
									<td className="uppercase  text-s pl-4  font-medium ">número de DOCUMENTO</td>
									<td className="uppercase text-s pl-4 font-medium ">razón social</td>
									<td className="uppercase text-s pl-4 font-medium">dirección</td>
								</tr>
								{ids !== null &&
									ids.map((item, index) => (
										<tr key={index} onClick={(e) => handleSelect(e, item)}>
											<td className="pl-8 border-[#0C3764] border-1"> {item.tipoDocumento} </td>
											<td className="pl-5 border-[#0C3764] border-1"> {item.numDocumento} </td>
											<td className="pl-5 border-[#0C3764] border-1"> {item.razonSocial} </td>
											<td className="pl-5 border-[#0C3764] border-1"> {item.direccion} </td>
											{/* llenar con datos necesarios */}
										</tr>
									))}
							</tbody>
						</table>
					</Modal.Body>
				</Modal>
			</div>
		</div>
	);
}

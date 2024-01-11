import React from 'react';
import Modal from 'react-bootstrap/Modal';

export default function ResultSearchClients({
	values: ids,
	isOpen: modalOpen,
	onClick: handleSelect,
	onHide: handleClose,
}) {
  
	return (
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
	);
}

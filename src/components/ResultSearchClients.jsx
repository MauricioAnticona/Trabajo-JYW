import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

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
				<div className="max-h-[70vh] overflow-y-auto relative">
        <Table striped bordered hover >
					<thead>
						<tr className='sticky top-[-0.05px]'>
							<th>Tipo</th>
							<th>Nº Documento</th>
							<th>Razón Social</th>
							<th>Dirección</th>
						</tr>
					</thead>
					<tbody>
						{
              ids !== null &&
              ids.map((item, index) => (
                <tr key={index} onClick={(e) => handleSelect(e, item)} className='text-sm hover:cursor-pointer'>
                  <td>{item.tipoDocumento}</td>
                  <td>{item.numDocumento}</td>
                  <td>{item.razonSocial}</td>
                  <td>{item.direccion}</td>
                </tr>
              ))
            }
					</tbody>
				</Table>
        </div>
			</Modal.Body>
		</Modal>
	);
}

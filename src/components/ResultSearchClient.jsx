function ResultSearchClient(props){

    const client = {
        razonSocial: props.client.razonSocial || ' - ',
        codigoVendedor: props.client.codigoVendedor || ' - ',
        telefono: props.client.telefono1 || props.client.telefono2 || ' - ',
        direccion: props.client.direccion || ' - ',
        celular: props.client.celular || ' - ',
        correo: props.client.correo || ' - ',
        agencia: props.client.agencia || ' - ',
    }

    return(
        <div className="flex flex-row items-center gap-4 p-4" >
				<div className="grid grid-cols-3 grid-rows-3 gap-x-4 gap-y-1 grow">
					<p className="col-span-1">
						<strong>RAZÓN SOCIAL</strong> {client.razonSocial}
					</p>
					<p className="col-span-1">
						<strong>RUC</strong> {client.codigoVendedor}
					</p>
					<p className="col-span-1">
						<strong>TELÉFONO</strong> {client.telefono}
					</p>
					<p className="col-span-2">
						<strong>DIRECCIÓN FISCAL</strong> {client.direccion}
					</p>
					<p className="col-span-1">
						<strong>WHATSAPP</strong> {client.celular}
					</p>
					<p className="col-span-1">
						<strong>EMAIL</strong> {client.correo}
					</p>
					<p className="col-span-1">
						<strong>AGENCIA</strong> {client.agencia}
					</p>
					<p className="col-span-1">
						<strong>OBSERVACIONES</strong> Ninguno
					</p>
				</div>
				<button className="px-6 py-1 text-lg rounded-md bg-red-600 text-white">VALID</button>
			</div>
    );
}

export default ResultSearchClient;
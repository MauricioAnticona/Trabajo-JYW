function DataTypeClient(props) {
	const data = props.data;

	return (
		<div>
					<table className="w-[500px]">
			<tbody>
				<tr>
					<th>Fecha</th>
					<th>Monto</th>
					<th>Factura</th>
				</tr>
				{data.map((item, index) => (
					<tr key={index}>
						<td>{item.fecha}</td>
						<td>{item.monto}</td>
						<td>{item.factura}</td>
					</tr>
				))}
				
			</tbody>
			
		</table>
		<div>
		<tr>TICKET PROMEDIO:</tr>
		<tr>CANTIDAD ITEMS X TICKET: </tr>
		<tr>FRENCUENCIA DE COMPRA</tr>
	</div>
		</div>
	);
}

export default DataTypeClient;

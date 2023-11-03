function DataTypeClient(props) {
	const data = props.data;

	return (
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
	);
}

export default DataTypeClient;

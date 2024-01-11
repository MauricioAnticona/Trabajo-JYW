import React, {useState, useEffect } from 'react';
import { getDataClient } from '../services/fetchClient';

function DataTypeClient({data, numDocumento}) {
  
  const [averageBuys, setAverageBuys] = useState(0);
  const [averageItems, setAverageItems] = useState(0);
  const [averageFrequency, setAverageFrequency] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const {aBuys, aItems, aFrequency} = await getDataClient(numDocumento);
      setAverageBuys(aBuys);
      setAverageItems(aItems);
      setAverageFrequency(aFrequency);
    };

    fetchData();
  }, [numDocumento]);

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
		<div>TICKET PROMEDIO: {averageBuys}</div>
		<div>CANTIDAD ITEMS X TICKET: {averageItems}</div>
		<div>FRENCUENCIA DE COMPRA: {averageFrequency}</div>
	</div>
		</div>
	);
}

export default DataTypeClient;

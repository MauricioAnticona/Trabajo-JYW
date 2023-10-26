import { BarChart, ResponsiveContainer, CartesianGrid, XAxis, Tooltip, Legend, YAxis, Bar } from 'recharts';

function ChartTypeClient(props) {
	return (
		<ResponsiveContainer width="100%" height={300}>
			<BarChart
				data={props.data}
				width={500}
				height={300}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="mes" className='text-xs' angle={35}/>
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey="monto" fill="#8884d8" />
			</BarChart>
		</ResponsiveContainer>
	);
}

export default ChartTypeClient;

import {
    BarChart,
    ResponsiveContainer,
    CartesianGrid,
    XAxis,
    Tooltip,
    Legend,
    YAxis,
    Bar,
} from "recharts";


function ChartTypeClient(props) {
    return (
        <ResponsiveContainer width="100%" aspect={2}>
            <BarChart
                data={props.data}
                width={500}
                height={300}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 50,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="mes"
                    angle={-45}
                    textAnchor="end"
                    interval={0}
                />
                <YAxis />
                <YAxis />
                <Tooltip />
                <Legend verticalAlign="top" height={36}/>
                <Bar dataKey="monto" fill="#8884d8" />
            </BarChart>
			
        </ResponsiveContainer>
    );
}

export default ChartTypeClient;

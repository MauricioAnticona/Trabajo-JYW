import { useState, useEffect } from 'react';
import { getClient } from '../services/fetchClient';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BarChart, ResponsiveContainer, CartesianGrid, XAxis, Tooltip, Legend, YAxis, Bar } from 'recharts';

// COMPONENTE DE REACT
function Client() {
	const [isActive, setActive] = useState([true, false, false, false]);

	const [client, setCliente] = useState(null);

	useEffect(() => {
		const fetchClient = async () => {
			const response = await getClient('20203650729');
			setCliente(response);
		};
		fetchClient();
	}, []);

	function handleTabs(index) {
		let newActive = [false, false, false, false];
		newActive[index] = true;
		setActive(newActive);
	}
	const data = [
		{ mes: 'enero', monto: '2000' },
		{ mes: 'febrero', monto: '2500' },
		{ mes: 'marzo', monto: '1000' },
		{ mes: 'Abril', monto: '1700' },
		{ mes: 'Mayo', monto: '1030' },
		{ mes: 'Junio', monto: '500' },
		{ mes: 'Julio', monto: '1800' },
		{ mes: 'Agosto', monto: '2100' },
		{ mes: 'Octubre', monto: '1200' },
		{ mes: 'Noviembre', monto: '1520' },
		{ mes: 'Diciembre', monto: '2040' },
	];

	return (
		<main>
			<div className="flex flex-row items-center gap-4 p-4 bg-blue-800 text-white">
				<h1 className="text-3xl font-medium">CLIENT</h1>
				<form>
					<input
						type="text"
						placeholder="20203650729"
						className="py-1 px-2 rounded-md focus:outline-none text-black"
					/>
				</form>
			</div>
			<div className="flex flex-row items-center gap-4 p-4">
				<div className="grid grid-cols-3 grid-rows-3 gap-x-4 gap-y-1 grow">
					<p className="col-span-1">
						<strong>RAZÓN SOCIAL</strong> {client?.razonSocial}
					</p>
					<p className="col-span-1">
						<strong>RUC</strong> {client?.codigoVendedor}
					</p>
					<p className="col-span-1">
						<strong>TELÉFONO</strong> {client?.telefono1 || client?.telefono2}
					</p>
					<p className="col-span-2">
						<strong>DIRECCIÓN FISCAL</strong> {client?.direccion}
					</p>
					<p className="col-span-1">
						<strong>WHATSAPP</strong> {client?.celular}
					</p>
					<p className="col-span-1">
						<strong>EMAIL</strong> {client?.correo}
					</p>
					<p className="col-span-1">
						<strong>AGENCIA</strong> {client?.agencia}
					</p>
					<p className="col-span-1">
						<strong>OBSERVACIONES</strong> Ninguna
					</p>
				</div>
				<button className="px-6 py-1 text-lg rounded-md bg-red-600 text-white">VALID</button>
			</div>
			<div id="tabs" className="flex flex-col gap-4 p-4">
				<div id="button-group" className="flex flex-row gap-2 justify-center">
					<button
						onClick={() => handleTabs(0)}
						className={`px-6 py-1 text-xl rounded-md ${
							isActive[0] ? 'bg-blue-800 text-white' : 'bg-gray-200 text-black'
						}`}>
						TIPO A
					</button>

					<button
						onClick={() => handleTabs(1)}
						className={`px-6 py-1 text-xl rounded-md ${
							isActive[1] ? 'bg-blue-800 text-white' : 'bg-gray-200 text-black'
						}`}>
						ULTIMAS COMPRAS
					</button>

					<button
						onClick={() => handleTabs(2)}
						className={`px-6 py-1 text-xl rounded-md ${
							isActive[2] ? 'bg-blue-800 text-white' : 'bg-gray-200 text-black'
						}`}>
						ITEM MAS COMPRADOS
					</button>
					<button
						onClick={() => handleTabs(3)}
						className={`px-6 py-1 text-xl rounded-md ${
							isActive[3] ? 'bg-blue-800 text-white' : 'bg-gray-200 text-black'
						}`}>
						CREDITOS Y COBRANZAS
					</button>
				</div>
				<div id="content">
					<div id="content-0" className={`${isActive[0] ? 'flex' : 'hidden'}`}>
						<ResponsiveContainer width="100%" height={300}>
							<BarChart
								data={data}
								width={500}
								height={300}
								margin={{
									top: 5,
									right: 30,
									left: 20,
									bottom: 5,
								}}>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="mes" />
								<YAxis />
								<Tooltip />
								<Legend />
								<Bar dataKey="monto" fill="#8884d8" />
							</BarChart>
						</ResponsiveContainer>
					</div>
					<div id="content-1" className={`${isActive[1] ? 'flex' : 'hidden'}`}>
						Texto 2
					</div>
					<div id="content-2" className={`${isActive[2] ? 'flex' : 'hidden'}`}>
						Texto 3
					</div>
					<div id="content-3" className={`${isActive[3] ? 'flex' : 'hidden'}`}>
						Texto 4
					</div>
				</div>
			</div>

			<div className="flex flex-row items-center gap-4 p-4 bg-blue-800 text-white">
				<h1 className="text-3xl font-medium"> ITEM </h1>
				<form>
					<input
						type="text"
						placeholder="Nombre del producto"
						className="py-1 px-2 rounded-md focus:outline-none text-black"
					/>
				</form>
				<form>
					<input
						type="text"
						placeholder="codigo de producto"
						className="py-1 px-2 rounded-md focus:outline-none text-black"
					/>
				</form>
				<div className="flex justify-end ">
					<p> BRANDS: </p>
					<form>
						<input
							type="text"
							placeholder="DFG"
							className="py-1 px-2 rounded-md focus:outline-none text-black "
						/>
					</form>
				</div>
			</div>

			<div id="tabs" className="flex flex-col gap-4 p-4">
				<div id="button-group" className="flex flex-row gap-2 justify-center">
					<button
						onClick={() => handleTabs(4)}
						className={`px-6 py-1 text-xl rounded-md ${
							isActive[4] ? 'bg-blue-800 text-white' : 'bg-gray-200 text-black'
						}`}>
						TD
					</button>
					<button
						onClick={() => handleTabs(5)}
						className={`px-6 py-1 text-xl rounded-md ${
							isActive[5] ? 'bg-blue-800 text-white' : 'bg-gray-200 text-black'
						}`}>
						S.I
					</button>
					<button
						onClick={() => handleTabs(6)}
						className={`px-6 py-1 text-xl rounded-md ${
							isActive[6] ? 'bg-blue-800 text-white' : 'bg-gray-200 text-black'
						}`}>
						PH
					</button>
				</div>
				<div id="content">
					<div id="content-4" className={`${isActive[4] ? 'flex' : 'hidden'}`}>
						Texto 5
					</div>
					<div id="content-5" className={`${isActive[5] ? 'flex' : 'hidden'}`}>
						Texto 6
					</div>
					<div id="content-6" className={`${isActive[6] ? 'flex' : 'hidden'}`}>
						Texto 7{' '}
					</div>
				</div>
			</div>
		</main>
	);
}

export default Client;

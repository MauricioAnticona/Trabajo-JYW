import { useState, useEffect, useRef } from "react";
import { getClient } from "../services/fetchClient";
import ChartTypeClient from "../components/ChartTypeClient";

import "bootstrap/dist/css/bootstrap.min.css";
import ResultSearchClient from "../components/ResultSearchClient";
import DataTypeClient from "../components/DataTypeClient";

// COMPONENTE DE REACT
function Client() {
    const [isActiveClient, setActiveClient] = useState([
        true,
        false,
        false,
        false,
    ]);
    const [isActiveItem, setActiveItem] = useState([true, false, false]);

    const [client, setClient] = useState(null);
    const searchClient = useRef(null);

    // Primer renderizado del componente
    useEffect(() => {
        const fetchClient = async () => {
            const response = await getClient("20203650729");
            setClient(response);
        };
        fetchClient();
    }, []);

    // Busqueda de cliente
    function handleSearchClient(e) {
        searchClient.current = e.target.value;
        if (searchClient && searchClient.current.length === 11) {
            const fetchClient = async () => {
                const response = await getClient(searchClient.current);
                setClient(response);
            };
            fetchClient();
        }
    }

    // Cambio de pestañas del cliente
    function handleTabsClient(index) {
        let newActive = [false, false, false, false];
        newActive[index] = true;
        setActiveClient(newActive);
    }

    // Cambio de pestañas del item
    function handleTabsItem(index) {
        let newActive = [false, false, false];
        newActive[index] = true;
        setActiveItem(newActive);
    }

    // temporal
    const dataMontoxMes = [
        { mes: "Enero", monto: 2000 },
        { mes: "Febrero", monto: 2500 },
        { mes: "Marzo", monto: 1000 },
        { mes: "Abril", monto: 1700 },
        { mes: "Mayo", monto: 1030 },
        { mes: "Junio", monto: 500 },
        { mes: "Julio", monto: 1800 },
        { mes: "Agosto", monto: 2100 },
        { mes: "Septiembre", monto: 2030 },
        { mes: "Octubre", monto: 1200 },
        { mes: "Noviembre", monto: 1520 },
        { mes: "Diciembre", monto: 2040 },
    ];

    // temporal
    const dataHistorial = [
        { fecha: "12/12/2023", monto: 500, factura: "0123456" },
        { fecha: "12/11/2023", monto: 600, factura: "0897565" },
        { fecha: "13/10/2023", monto: 700, factura: "0896532" },
        { fecha: "12/9/2023", monto: 1000, factura: "0934567" },
        { fecha: "11/8/2023", monto: 1500, factura: "097T647" },
        { fecha: "10/7/2023", monto: 2000, factura: "0975623" },
        { fecha: "08/6/2023", monto: 800, factura: "0454562" },
        { fecha: "06/5/2023", monto: 700, factura: "0123456" },
        { fecha: "05/4/2023", monto: 1200, factura: "0456737" },
        { fecha: "03/3/2023", monto: 700, factura: "0789562" },
        { fecha: "01/2/2023", monto: 1000, factura: "0345678" },
        { fecha: "06/1/2023", monto: 500, factura: "0456778" },
    ];

    return (
        <main>
            <div className="flex flex-row items-center gap-4 p-4 bg-blue-800 text-white">
                <h1 className="text-3xl font-medium">CLIENT</h1>
                <form>
                    <input
                        type="text"
                        onChange={handleSearchClient}
                        placeholder="Escribe el id del cliente"
                        className="py-1 px-2 rounded-md focus:outline-none text-black"
                    />
                </form>
            </div>
            {client && <ResultSearchClient client={client} />}
            <div id="tabs" className="flex flex-col gap-4 p-4">
                <div
                    id="button-group"
                    className="flex flex-row gap-2 justify-center"
                >
                    <button
                        onClick={() => handleTabsClient(0)}
                        className={`px-6 py-1 text-xl rounded-md ${
                            isActiveClient[0]
                                ? "bg-blue-800 text-white"
                                : "bg-gray-200 text-black"
                        }`}
                    >
                        TIPO A
                    </button>

                    <button
                        onClick={() => handleTabsClient(1)}
                        className={`px-6 py-1 text-xl rounded-md ${
                            isActiveClient[1]
                                ? "bg-blue-800 text-white"
                                : "bg-gray-200 text-black"
                        }`}
                    >
                        ULTIMAS COMPRAS
                    </button>

                    <button
                        onClick={() => handleTabsClient(2)}
                        className={`px-6 py-1 text-xl rounded-md ${
                            isActiveClient[2]
                                ? "bg-blue-800 text-white"
                                : "bg-gray-200 text-black"
                        }`}
                    >
                        ITEM MAS COMPRADOS
                    </button>
                    <button
                        onClick={() => handleTabsClient(3)}
                        className={`px-6 py-1 text-xl rounded-md ${
                            isActiveClient[3]
                                ? "bg-blue-800 text-white"
                                : "bg-gray-200 text-black"
                        }`}
                    >
                        CREDITOS Y COBRANZAS
                    </button>
                </div>
                <div id="content">
                    <div
                        id="content-0"
                        className={`${
                            isActiveClient[0] ? "flex flex-row" : "hidden"
                        }`}
                    >
                        <div id="graficas" className="w-1/2">
                            <div id="filtros">Filtros</div>
                            <ChartTypeClient data={dataMontoxMes} />
                        </div>
                        <div id="historial" className="w-1/2">
                            <DataTypeClient data={dataHistorial} />
                        </div>
                    </div>
                    <div
                        id="content-1"
                        className={`${isActiveClient[1] ? "flex" : "hidden"}`}
                    >
                        Texto 2
                    </div>
                    <div
                        id="content-2"
                        className={`${isActiveClient[2] ? "flex" : "hidden"}`}
                    >
                        Texto 3
                    </div>
                    <div
                        id="content-3"
                        className={`${isActiveClient[3] ? "flex" : "hidden"}`}
                    >
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
                <div
                    id="button-group"
                    className="flex flex-row gap-2 justify-center"
                >
                    <button
                        onClick={() => handleTabsItem(0)}
                        className={`px-6 py-1 text-xl rounded-md ${
                            isActiveItem[0]
                                ? "bg-blue-800 text-white"
                                : "bg-gray-200 text-black"
                        }`}
                    >
                        TD
                    </button>
                    <button
                        onClick={() => handleTabsItem(1)}
                        className={`px-6 py-1 text-xl rounded-md ${
                            isActiveItem[1]
                                ? "bg-blue-800 text-white"
                                : "bg-gray-200 text-black"
                        }`}
                    >
                        S.I
                    </button>
                    <button
                        onClick={() => handleTabsItem(2)}
                        className={`px-6 py-1 text-xl rounded-md ${
                            isActiveItem[2]
                                ? "bg-blue-800 text-white"
                                : "bg-gray-200 text-black"
                        }`}
                    >
                        PH
                    </button>
                </div>
                <div id="content">
                    <div
                        id="content-4"
                        className={`${isActiveItem[0] ? "flex" : "hidden"}`}
                    >
                        Texto 5
                    </div>
                    <div
                        id="content-5"
                        className={`${isActiveItem[1] ? "flex" : "hidden"}`}
                    >
                        Texto 6
                    </div>
                    <div
                        id="content-6"
                        className={`${isActiveItem[2] ? "flex" : "hidden"}`}
                    >
                        Texto 7{" "}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Client;

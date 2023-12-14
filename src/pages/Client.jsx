import { useState, useEffect, useRef } from "react";
import { getClient } from "../services/fetchClient";
import ChartTypeClient from "../components/ChartTypeClient";
import ResultSearchClient from "../components/ResultSearchClient";
import DataTypeClient from "../components/DataTypeClient";
import { FaSearch } from "react-icons/fa";
import { Calendar } from "primereact/calendar";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//import ClientPopup from "../components/ClientPopup"; // Importa el nuevo componente
// COMPONENTE DE REACT
function Client() {
    const [isActiveTabs, setActiveTabs] = useState([true, false]);
    const [isActiveTabClient, setActiveTabsClient] = useState([
        true,
        false,
        false,
        false,
    ]);
    const [isActiveTabItem, setActiveTabsItem] = useState([true, false, false]);
    const [ids, setIDs] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectClient, setSelectClient] = useState(null); // Guarda el cliente seleccionado
    const searchClient = useRef(null);
    const [dates, setDates] = useState(null);

    const dataMontoxMes = [
        { id: 1, mes: "Enero", monto: 2000 },
        { id: 2, mes: "Febrero", monto: 2500 },
        { id: 3, mes: "Marzo", monto: 1000 },
        { id: 4, mes: "Abril", monto: 1700 },
        { id: 5, mes: "Mayo", monto: 1030 },
        { id: 6, mes: "Junio", monto: 500 },
        { id: 7, mes: "Julio", monto: 1800 },
        { id: 8, mes: "Agosto", monto: 2100 },
        { id: 9, mes: "Septiembre", monto: 2030 },
        { id: 10, mes: "Octubre", monto: 1200 },
        { id: 11, mes: "Noviembre", monto: 1520 },
        { id: 12, mes: "Diciembre", monto: 2040 },
    ];

    const [dataMes, setDataMes] = useState(dataMontoxMes);

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

    
    //  const [showPopup, setShowPopup] = useState(false);
    // Función para mostrar el popup
    // const handleShowPopup = async () => {
    // const response = await getClient(searchClient.current);
    // setClient(response);
    // setShowPopup(true);
    // };

    //************************************ */
    //para comentar ctrl + K+C
    //para descomentar ctrl + K+U
    //************************************ */

    // Primer renderizado del componente
    // useEffect(() => {
    //     const fetchClient = async () => {
    //         const response = await getClient("20203650729");
    //         setClient(response);
    //     };
    //     fetchClient();
    // }, []);

    useEffect(() => {
        if (!dates) return;
        if (dates.length !== 2) return;

        const initDate = new Date(dates[0]);
        const endDate = new Date(dates[1]);
        const newData = dataMontoxMes.filter((item) => {
            const date = item.id;
            return (
                date >= initDate.getMonth() + 1 &&
                date <= endDate.getMonth() + 1
            );
        });

        setDataMes(newData);
    }, [dates]);

    // Guardar el valor del input de busqueda
    function saveSearchClient(e) {
        searchClient.current = e.target.value;
    }

    // Busqueda de cliente al hacer click al boton
    function handleSearchClient() {
        if (!searchClient) {
            alert("Ingrese un ID valido");
            return;
        }
        const fetchClient = async () => {
            const response = await getClient(searchClient.current); // [id1, id2, ...]
            setIDs(response);
            setModalOpen(true);
        };



        fetchClient();
    }

    const handleClose = () => setModalOpen(false);

    const handleSelect = (e, client) => {
        e.preventDefault();
        setSelectClient(client);
        setModalOpen(false);
        console.log(client);
    }

//--con fe -//

//--con fe -//


    function handleTabs(index) {
        let newActive = [false, false];
        newActive[index] = true;
        setActiveTabs(newActive);
    }

    // Cambio de pestañas del cliente
    function handleTabsClient(index) {
        let newActive = [false, false, false, false];
        newActive[index] = true;
        setActiveTabsClient(newActive);
    }

    // Cambio de pestañas del item
    function handleTabsItem(index) {
        let newActive = [false, false, false];
        newActive[index] = true;
        setActiveTabsItem(newActive);
    }

    // temporal

    return (
        <main>
            <div className="flex flex-row items-center gap-4 p-4 bg-[#0C3764] text-white">
                <button
                    onClick={() => handleTabs(0)}
                    className="text-3xl font-medium"
                >
                    CLIENT
                </button>
                <div className="flex gap-2" onClick={() => handleTabs(0)}>
                    <input
                        type="text"
                        onChange={saveSearchClient}
                        placeholder="Escribe el id del cliente"
                        className="py-1 px-2 rounded-md focus:outline-none text-black"
                    />

                    
                    <button
                        onClick={handleSearchClient}
                        className=" h-8 w-8 flex items-center justify-center rounded-md bg-[#FFA800]"
                    >
                        <FaSearch />
                    </button>
                    
                    <Modal show={modalOpen} onHide={handleClose} >
                        <Modal.Header closeButton>
                            <Modal.Title>Clientes registrados</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {
                                ids !== null && ids.map((item, index) => (
                                    <button key={index} className="flex flex-row gap-4" onClick={(e) => handleSelect(e, item) }>
                                        <p> {item.codigoCliente} </p>
                                        <p> {item.numDocumento} </p>
                                        {/* llenar con datos necesarios */}
                                    </button>
                                ))
                            }
                        </Modal.Body>
                    </Modal>

                </div>
            </div>
            {/* Seccion Cliente */}
            <div className={`${isActiveTabs[0] ? "flex flex-col" : "hidden"}`}>
                {selectClient && <ResultSearchClient client={selectClient} />}
                <div id="tabs" className="flex flex-col gap-4 p-4">
                    <div
                        id="button-group"
                        className="flex flex-row gap-2 justify-center"
                    >
                        <button
                            onClick={() => handleTabsClient(0)}
                            className={`px-6 py-1 text-xl rounded-md ${
                                isActiveTabClient[0]
                                    ? "bg-[#0C3764] text-white"
                                    : "bg-gray-200 text-black"
                            }`}
                        >
                            TIPO A
                        </button>

                        <button
                            onClick={() => handleTabsClient(1)}
                            className={`px-6 py-1 text-xl rounded-md ${
                                isActiveTabClient[1]
                                    ? "bg-[#0C3764] text-white"
                                    : "bg-gray-200 text-black"
                            }`}
                        >
                            ULTIMAS COMPRAS
                        </button>

                        <button
                            onClick={() => handleTabsClient(2)}
                            className={`px-6 py-1 text-xl rounded-md ${
                                isActiveTabClient[2]
                                    ? "bg-[#0C3764] text-white"
                                    : "bg-gray-200 text-black"
                            }`}
                        >
                            ITEM MAS COMPRADOS
                        </button>
                        <button
                            onClick={() => handleTabsClient(3)}
                            className={`px-6 py-1 text-xl rounded-md ${
                                isActiveTabClient[3]
                                    ? "bg-[#0C3764] text-white"
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
                                isActiveTabClient[0]
                                    ? "flex flex-row"
                                    : "hidden"
                            }`}
                        >
                            <div id="graficas" className=" w-1/2">
                                <div id="filtros">
                                    {" "}
                                    <Calendar
                                        className="border-black border-2"
                                        value={dates}
                                        onChange={(e) => setDates(e.value)}
                                        view="year"
                                        dateFormat="yy"
                                        selectionMode="range"
                                        showIcon
                                        readOnlyInput
                                    />
                                </div>
                                <ChartTypeClient data={dataMes} />
                            </div>
                            <div id="historial" className="w-1/2">
                                <DataTypeClient data={dataHistorial} />
                            </div>
                        </div>
                        <div
                            id="content-1"
                            className={`${
                                isActiveTabClient[1] ? "flex" : "hidden"
                            }`}
                        >
                            Texto 2
                        </div>
                        <div
                            id="content-2"
                            className={`${
                                isActiveTabClient[2] ? "flex" : "hidden"
                            }`}
                        >
                            Texto 3
                        </div>
                        <div
                            id="content-3"
                            className={`${
                                isActiveTabClient[3] ? "flex" : "hidden"
                            }`}
                        >
                            Texto 4
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center gap-4 p-4 bg-[#0C3764] text-white">
                <button
                    onClick={() => handleTabs(1)}
                    className="text-3xl font-medium"
                >
                    {" "}
                    ITEM{" "}
                </button>
                <form onClick={() => handleTabs(1)}>
                    <input
                        type="text"
                        placeholder="Nombre del producto"
                        className="py-1 px-2 rounded-md focus:outline-none text-black"
                    />
                </form>
                <form onClick={() => handleTabs(1)}>
                    <input
                        type="text"
                        placeholder="codigo de producto"
                        className="py-1 px-2 rounded-md focus:outline-none text-black"
                    />
                </form>
                <div className="flex justify-end items-center gap-2">
                    <p> BRANDS: </p>
                    <div className="flex gap-2" onClick={() => handleTabs(1)}>
                        <input
                            type="text"
                            placeholder="DFG"
                            className="py-1 px-2 rounded-md focus:outline-none text-black "
                        />
                        <button className=" h-8 w-8 flex items-center justify-center rounded-md bg-[#FFA800]">
                            <FaSearch />
                        </button>
                    </div>
                </div>
                <div className="flex justify-end items-center gap-2">
                    <p> TOTAL: </p>
                    <div className="flex gap-2" onClick={() => handleTabs(1)}>
                        <input
                            type="text"
                            placeholder="$45000.00"
                            className="py-1 px-2 rounded-md focus:outline-none text-black "
                        />
                    </div>
                </div>
            </div>

            {/* Seccion Item */}
            <div className={`${isActiveTabs[1] ? "flex" : "hidden"}`}>
                <div id="tabs" className="flex flex-col gap-4 p-4">
                    <div
                        id="button-group"
                        className="flex flex-col gap-2 justify-center"
                    >
                        <button
                            onClick={() => handleTabsItem(0)}
                            className={`px-6 py-1 text-xl rounded-md ${
                                isActiveTabItem[0]
                                    ? "bg-[#0C3764] text-white"
                                    : "bg-gray-200 text-black"
                            }`}
                        >
                            TD
                        </button>
                        <button
                            onClick={() => handleTabsItem(1)}
                            className={`px-6 py-1 text-xl rounded-md ${
                                isActiveTabItem[1]
                                    ? "bg-[#0C3764] text-white"
                                    : "bg-gray-200 text-black"
                            }`}
                        >
                            S.I
                        </button>
                        <button
                            onClick={() => handleTabsItem(2)}
                            className={`px-6 py-1 text-xl rounded-md ${
                                isActiveTabItem[2]
                                    ? "bg-[#0C3764] text-white"
                                    : "bg-gray-200 text-black"
                            }`}
                        >
                            PH
                        </button>
                    </div>
                    <div id="content">
                        <div
                            id="content-4"
                            className={`${
                                isActiveTabItem[0] ? "flex" : "hidden"
                            }`}
                        >
                            Texto 5
                        </div>
                        <div
                            id="content-5"
                            className={`${
                                isActiveTabItem[1] ? "flex" : "hidden"
                            }`}
                        >
                            Texto 6
                        </div>
                        <div
                            id="content-6"
                            className={`${
                                isActiveTabItem[2] ? "flex" : "hidden"
                            }`}
                        >
                            Texto 7{" "}
                        </div>
                    </div>
                </div>
            </div>

            {/* <div>
        <button onClick={handleShowPopup}>Mostrar Popup</button>
    {showPopup && ( <ClientPopup data={client} onSelect={handleSelect} />
    )}
    
    </div> */}
        </main>
    );
}

export default Client;

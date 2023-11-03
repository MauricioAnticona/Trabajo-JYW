//Importar componentes o librerias

import 'bootstrap/dist/css/bootstrap.min.css';
import { PrimeReactProvider } from 'primereact/api';
//Importar elementos CSS (estilos)
import "primereact/resources/themes/lara-light-indigo/theme.css";
import './App.css'; //importar stilos css de app.css

import Client from './pages/Client';

//Crear el compnente
function App() {
	//renderizar el componente
	return (
		
		<PrimeReactProvider>
            <Client/>
        </PrimeReactProvider>
	);
}

//exportar componente
export default App;

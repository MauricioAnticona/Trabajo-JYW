// ClientPopup.js
import React from 'react';

const ClientPopup = ({ data, onSelect }) => {
  return (
    <div className="popup">
      <table>
        <thead>
          <tr>
            <th>Código Cliente</th>
            <th>Tipo Documento</th>
            <th>Número Documento</th>
            {/* Agrega más columnas según tus necesidades */}
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.codigoCliente}>
              <td>{item.codigoCliente}</td>
              <td>{item.tipoDocumento}</td>
              <td>{item.numDocumento}</td>
              
              {/* Agrega más celdas según tus necesidades */}
              <td>
                <button onClick={() => onSelect(item)}>Seleccionar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientPopup;

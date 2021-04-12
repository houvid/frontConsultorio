import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Paciente } from "./Paciente";

interface Props {
  paciente: Paciente;
}


export const PacienteItem = ({ paciente }: Props) => {

    const history = useHistory();

  return (
    <>
      <tr>
        <td>{paciente.documento} </td>
        <td>
          {paciente.primerNombre} {paciente.segundoNombre}
        </td>
        <td>
          {paciente.primerApellido} {paciente.segundoApellido}
        </td>
        <td>
          <button
            className="btn btn-primary"
            onClick={() => history.push(`/updatePac/${paciente._id}`)}
          >
            Editar
          </button>
        </td>
        <td>
          <button
            className="btn btn-primary"
            onClick={() => history.push(`/newConsulta/${paciente._id}`)}
          >
            Ir a consulta
          </button>
        </td>
      </tr>
    </>
  );
};

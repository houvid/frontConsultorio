import React, { useEffect, useState } from "react";
import { Consulta } from "./Consulta";
import * as pacienteService from "./ConsultaService";
import { ConsultaItem } from "./ConsultaItem";

export const ConsultaList = () => {
  const [consultas, setConsultas] = useState<Consulta[]>([]);

  const loadConsultas = async () => {
    const res = await pacienteService.getConsultas();
    setConsultas(res.data);
  };
  useEffect(() => {
    loadConsultas();
  }, []);

  return (
    <div className="">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Documento</th>
            <th scope="col">Nombres</th>
            <th scope="col">Apellidos</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {consultas.map((paciente) => {
            return <ConsultaItem paciente={paciente} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ConsultaList;

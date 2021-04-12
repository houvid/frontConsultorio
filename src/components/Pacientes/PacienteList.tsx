import React, { useEffect, useState } from "react";
import { Paciente } from "./Paciente";
import * as pacienteService from "./PacienteService";
import { PacienteItem } from "./PacienteItem";

export const PacienteList = () => {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);

  const loadPacientes = async () => {
    const res = await pacienteService.getPacientes();

    const formatedPacientes =  res.data.map((paciente) => {
      return {
        ...paciente,
        createdAt: paciente.createdAt
          ? new Date(paciente.createdAt)
          : new Date(),
        updatedAt: paciente.updatedAt
          ? new Date(paciente.updatedAt)
          : new Date(),
      }
    })
    .sort ((a,b) => b.createdAt.getTime() - a.createdAt.getTime());

    setPacientes(formatedPacientes); 
  };
  useEffect(() => {
    loadPacientes();
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
          {pacientes.map((paciente) => {
            return <PacienteItem paciente={paciente} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PacienteList;

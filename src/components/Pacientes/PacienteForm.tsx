import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { Paciente } from "./Paciente";
import * as pacienteService from './PacienteService'
import { toast } from 'react-toastify';
import {useHistory,useParams} from 'react-router-dom'
interface Params {
  id: string
}

export const PacienteForm = () => {

    const history = useHistory()
    const params = useParams<Params>()

    const initialState = {
        documento: "",
    tipoDocumento: "",
    fecNacimiento: "",
    primerNombre: "",
    segundoNombre: "",
    primerApellido: "",
    segundoApellido: "",
    }
  const [paciente, setPaciente] = useState<Paciente>(initialState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPaciente({ ...paciente, [e.target.name]: e.target.value });
  };

  const handleSubmit =async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      await pacienteService.createPacientes(paciente);
      toast("Paciente creado existosamente")
      setPaciente(initialState)
      history.push('/listPac')

  }

  const getPaciente = async(id: string) => {
    const res =  await pacienteService.getPaciente(id)
    const { documento,tipoDocumento,primerNombre,segundoNombre,primerApellido,segundoApellido} = res.data;
    setPaciente({documento,tipoDocumento,primerNombre,segundoNombre,primerApellido,segundoApellido})
  }
  useEffect(() => {
    if (params.id) getPaciente(params.id)
    
  }, [])

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>Nuevo paciente </h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="documento"
                  id=""
                  placeholder="DOCUMENTO"
                  className="form-control"
                  onChange={handleInputChange}
                  value= {paciente.documento}
                  autoFocus
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="tipoDocumento"
                  id=""
                  placeholder="Tipo de documento"
                  className="form-control"
                  value= {paciente.tipoDocumento}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="primerNombre"
                  id=""
                  placeholder="Primer nombre"
                  className="form-control"
                  onChange={handleInputChange}
                  value= {paciente.primerNombre}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="segundoNombre"
                  id=""
                  placeholder="Segundo nombre"
                  className="form-control"
                  onChange={handleInputChange}
                  value= {paciente.segundoNombre}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="primerApellido"
                  id=""
                  placeholder="Primer apellido"
                  className="form-control"
                  onChange={handleInputChange}
                  value= {paciente.primerApellido}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="segundoApellido"
                  id=""
                  placeholder="Segundo apellido"
                  className="form-control"
                  onChange={handleInputChange}
                  value= {paciente.segundoApellido}
                />
              </div>

              <div className="form-group">
                <input
                  type="date"
                  name="fecNacimiento"
                  id=""
                  placeholder="Fecha de nacimiento"
                  className="form-control"
                  onChange={handleInputChange}
                  value= {paciente.fecNacimiento}
                />
              </div>

              {
                params.id ? 
                <button className="btn btn-info ">Actualiza Paciente</button>
                :
                <button className="btn btn-success ">Crear paciente</button>
              }

              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PacienteForm;

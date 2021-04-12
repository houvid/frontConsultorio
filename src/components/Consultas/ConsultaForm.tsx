import React, { ChangeEvent, FormEvent, useState } from "react";
import { Consulta } from "./Consulta";
import * as videoService from './ConsultaService'
import { toast } from 'react-toastify';
import {useHistory} from 'react-router-dom'

type InputChange  =  ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
export const ConsultaForm = () => {

    const history = useHistory()
    const initialState = {
        documento: "",
    tipoDocumento: "",
    fecNacimiento: "",
    primerNombre: "",
    segundoNombre: "",
    primerApellido: "",
    segundoApellido: "",
    }
  const [consulta, setConsulta] = useState<Consulta>(initialState);

  const handleInputChange = (e: InputChange) => {
    setConsulta({ ...consulta, [e.target.name]: e.target.value });
  };

  const handleSubmit =async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      await videoService.createConsultas(consulta);
      toast("Consulta creado existosamente")
      setConsulta(initialState)
      history.push('/listPac')

  }
  return (
    <div className="row">
      <div className="col-md-12 ">
        <div className="card">
          <div className="card-body">
            <h3>Nuevo consulta </h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="documento"
                  id=""
                  placeholder="Documento del paciente "
                  className="form-control"
                  onChange={handleInputChange}
                  value= {consulta.documento}
                  autoFocus
                  required
                />
              </div>
              <div className="form-group">
                <label> Motivo de la consulta</label>
                <textarea name="Motivo"
                rows={3}
                className="form-control"
                placeholder="Motivo de la consulta"
                >
                </textarea>
              </div>
              <div className="form-group">
              <label>Antecedentes del paciente</label>
                <textarea name="Antecedentes"
                rows={3}
                className="form-control"
                placeholder="Antecedentes del paciente"
                >
                </textarea>
              </div>
              <div className="form-group">
              <label>Perfil social</label>
                <textarea name="Perfil social"
                rows={3}
                className="form-control"
                placeholder="Perfil social"
                >
                </textarea>
              </div>
        

              <button className="btn btn-success ">Guardar Consulta</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultaForm;

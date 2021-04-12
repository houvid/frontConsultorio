import React from 'react'
import { Link } from 'react-router-dom'
import { Consulta } from './Consulta'

interface Props {
    paciente : Consulta
}

export const ConsultaItem = ({paciente} : Props) => {
    return (
        
            <>
            <tr>
            <td>{paciente.documento} </td>
            <td>{paciente.primerNombre} {paciente.segundoNombre}</td>
            <td>{paciente.primerApellido} {paciente.segundoApellido}</td>
            <td> 
                
                <button className="btn btn-primary">Ir a consulta</button></td>
            </tr>
            
          </>
       
      
    )
}

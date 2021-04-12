import axios from "axios"
import { Paciente } from "./Paciente"

const API  = 'http://localhost:4000';

export const getPacientes = async () => {
    return await axios.get<Paciente[]>(`${API}/pacientes`)
        
}
export const getPaciente = async (id:string) => {
    return await axios.get<Paciente>(`${API}/pacientes/${id}`)
        
}

export const createPacientes = async (paciente: Paciente) => {
    return await axios.post(`${API}/pacientes`,paciente)
        
}
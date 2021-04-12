import axios from "axios"
import { Consulta } from "./Consulta"
const API  = 'http://localhost:4000';

export const getConsultas = async () => {
    return await axios.get(`${API}/pacientes`)
        
}

export const createConsultas = async (consulta: Consulta) => {
    return await axios.post(`${API}/pacientes`,consulta)
        
}
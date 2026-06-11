// Lógica de conexión con servidor para peticiones d elos productos

import axios from "axios";

export async function getAllMovies () {

    const API_URL = "https://ghibliapi.vercel.app/films/";
    try {
        const response = await axios.get(API_URL);
        console.log("Respuesta de mi API: ", response.data)
        return response.data;
    } catch (error) {
        console.error("No se puedo mostrar la información ", error);
        
    }
}
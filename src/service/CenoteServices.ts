import axios from 'axios';

const BASE_URL = 'http://localhost:4000'; // URL base de tu API

// Función para obtener la información de todos los cenotes
export async function getAllCenotes() {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    return response.data.data; // Retorna solo la data de los cenotes
  } catch (error) {
    console.error('Error al obtener los cenotes:', error);
    throw error; // Lanza el error para manejarlo en el componente
  }
}

export async function getCenoteById(cenoteId: number) {
  try {
    const response = await axios.get(`${BASE_URL}/${cenoteId}`);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error(`Error al obtener el cenote con ID ${cenoteId}:`, error);
    throw error; // Lanza el error para manejarlo en el componente
  }
}
export function guardarCenoteLocalStorage(cenote: any) {
    try {
        const cenotesGuardados = localStorage.getItem('cenotesSeleccionados');
        let cenotes = [];
        if (cenotesGuardados) {
            cenotes = JSON.parse(cenotesGuardados);
        }
        cenotes.push(cenote);
        localStorage.setItem('cenotesSeleccionados', JSON.stringify(cenotes));
    } catch (error) {
        console.error('Error al guardar el cenote en localStorage:', error);
        throw error;
    }
}

export function eliminarCenoteLocalStorage(cenoteId: number) {
    try {
      const cenotesGuardados = localStorage.getItem('cenotesSeleccionados');
      console.log(cenotesGuardados)
      let cenotes = [];
      if (cenotesGuardados) {
          cenotes = JSON.parse(cenotesGuardados);
          console.log(cenotes)
        // Filtrar los cenotes para mantener solo aquellos que no coincidan con el cenoteId
        cenotes = cenotes.filter((cenote: any) => cenote.id !== cenoteId);
        // Guardar los cenotes actualizados en el localStorage
        localStorage.setItem('cenotesSeleccionados', JSON.stringify(cenotes));
      }
    } catch (error) {
      console.error('Error al eliminar el cenote del localStorage:', error);
      throw error;
    }
  }
  
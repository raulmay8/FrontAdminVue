import axios from 'axios';

interface ReservaData {
  clienteId: number;
  cenoteId: number;
  precioTotal: number;
}

const BASE_URL = 'http://localhost:4000';

export const almacenarReserva = async (reservaData: ReservaData) => {
    try {
      const response = await axios.post('http://localhost:4000/reserva', reservaData);
      if (response.status === 200) {
        console.log('Reserva almacenada correctamente');
        return response.data; // Puedes devolver los datos de la reserva si el servidor los proporciona
      } else {
        console.error('Error al almacenar la reserva');
        return null;
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      return null;
    }
  };

  export async function getReservaByToken(token: string) {
    try {
      const response = await axios.get(`${BASE_URL}/reserva/${token}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener la reserva por token:', error);
      throw error;
    }
  }  

  export async function getAllReservas() {
    try {
      const response = await axios.get(`${BASE_URL}/reserva/reserva`);
      console.log(response)
      return response.data.data;
    } catch (error) {
      console.error('Error al obtener los cenotes:', error);
      throw error;
    }
  }
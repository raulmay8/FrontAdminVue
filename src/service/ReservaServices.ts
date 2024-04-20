import axios from 'axios';

interface ReservaData {
  clienteId: number;
  cenoteId: number;
  precioTotal: number;
}

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
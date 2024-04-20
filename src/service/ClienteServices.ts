import axios from "axios";

const BASE_URL = 'http://localhost:4000';

//ClienteServices
interface FormData {
    id: number;
    nameCliente: string;
    apellidoCliente: string;
    correoCliente: string;
    telefono: string;
    fechaLlegada: string;
    horaLlegada: string;
    personas: number;
    notas: string;  
  }

/*   export const enviarDatosCliente = async (formData: FormData) => {
    try {
        localStorage.setItem('formData', JSON.stringify(formData));

        const response = await axios.post('http://localhost:4000/cliente', formData);

        if (response.status === 200) {
            console.log('Datos enviados exitosamente', formData);
        } else {
            console.error('Error al enviar los datos:', response.statusText);
        }
    } catch (error) {
        console.log(error)
    }
}; */

export async function enviarDatosCliente(cliente: any) {
    try {
      const response = await axios.post(`${BASE_URL}/cliente`, cliente);
      console.log(response);
      
      // Guardar los datos del cliente en el localStorage
      const clienteConId = { ...cliente, id: response.data.id }; // Agregar el id recibido del servidor
      localStorage.setItem('cliente', JSON.stringify(response));
  
      return response.data; 
    } catch (error) {
      console.error('Error al crear un nuevo cliente:', error);
      throw error; 
    }
  }

/*   export function enviarDatosCliente(cliente: any) {
    try {
        const clientesGuardados = localStorage.getItem('formData');
        let clientes = [];
        if (clientesGuardados) {
            clientes = JSON.parse(clientesGuardados);
        }
        clientes.push(cliente);
        localStorage.setItem('formData', JSON.stringify(clientes));
    } catch (error) {
        console.error('Error al guardar el cliente en localStorage:', error);
        throw error;
    }
} */
  
/* export async function enviarDatosCliente(cliente: any) {
    try {
        // Enviar los datos del cliente al servidor
        const response = await axios.post('http://localhost:4000/cliente', cliente);

        // Manejar la respuesta del servidor
        if (response.status === 200) {
            console.log('Cliente guardado exitosamente en el servidor:', response.data);
            // Aquí puedes manejar la respuesta del servidor, por ejemplo, guardar el ID del cliente devuelto
            const clienteId = response.data.id;
            // Luego puedes usar el ID del cliente para otras operaciones si es necesario
        } else {
            console.error('Error al guardar el cliente en el servidor. Estado de la respuesta:', response.status);
        }

        // Guardar los datos del cliente en localStorage
        const datosGuardados = localStorage.getItem('formData');
        let datos = [];
        if (datosGuardados) {
            datos = JSON.parse(datosGuardados);
        }
        datos.push(cliente);
        localStorage.setItem('formData', JSON.stringify(datos));
        console.log('Datos del cliente guardados en localStorage:', cliente);
    } catch (error) {
        console.error('Error al enviar los datos del cliente al servidor:', error);
        throw error;
    }
}
 */

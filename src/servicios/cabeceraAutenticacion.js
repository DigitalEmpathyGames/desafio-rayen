
const cabeceraAutenticacion = () => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    let cabecera = {};
    if (usuario) {
      // cabecera = {'x-access-token': usuario};
      cabecera = {Authorization: `Bearer ${usuario}`}
    }

    return {
      cabecera
    }
}
  
export default cabeceraAutenticacion;
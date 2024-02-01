let pais = document.getElementById('pais');

function registrarDatos() {
  axios
    .get('https://serv-geoapi.000webhostapp.com/index.php')
    .then(function (response) {
      console.log(response.data.pais);
      pais.innerHTML = response.data.pais;
      let ubicacion = response.data.pais;

      // Obtener los valores del formulario
      let producto = document.getElementById('producto').value;
      let cantidad = document.getElementById('cantidad').value;
      let codigo = document.getElementById('codigo').value;

      if (ubicacion === 'Argentina') {
        axios.get("https://servarg.000webhostapp.com/api-argentina/index.php?producto="+ producto + "&cantidad=" + cantidad + "&codigo=" + codigo)
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else if (ubicacion === 'France') {
        axios.get("https://servjhq.000webhostapp.com/api-francia/index.php?producto="+ producto + "&cantidad=" + cantidad + "&codigo=" + codigo)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else if (ubicacion === 'India') {
        axios.get("api de="+ producto + "&cantidad=" + cantidad + "&codigo=" + codigo)
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        // Manejar otras ubicaciones si es necesario
        console.log('No se encuentra la ubicación');
      }
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
    });
}

// Llama a la función registrarDatos cuando se carga la página
window.addEventListener('load', registrarDatos);

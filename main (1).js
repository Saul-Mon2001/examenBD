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

      if (ubicacion === 'France') {
        axios.get("https://argentinabd.000webhostapp.com/api-francia/index.php="+ producto + "&cantidad=" + cantidad + "&codigo=" + codigo + "&ubicacion=" + ubicacion)
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else if (ubicacion === 'Italy') {
        axios.get("https://saul-monzalvo.000webhostapp.com/api-italia/index.php?producto="+ producto + "&cantidad=" + cantidad + "&codigo=" + codigo + "&ubicacion=" + ubicacion)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else if (ubicacion === 'India') {
        axios.get("https://baseindiabd.000webhostapp.com/api-india/index.php"+ producto + "&cantidad=" + cantidad + "&codigo=" + codigo + "&ubicacion=" + ubicacion)
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

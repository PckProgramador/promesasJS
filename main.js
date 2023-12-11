/**
 * Variables globlaes
 */
const divApp = document.getElementById("app");
/**
 * Ejercicio 1
 */
/**
 * Imports
 */

/**
 * Variables
 */
const imagenUrlInput = document.getElementById("urlid");
const divImagen = document.getElementById("ejercicio1");
const imagen = document.getElementById("imagenEjercicio1");
const titulo = document.getElementById("tituloEjercicio1");
const resolucion = document.getElementById("textoEjercicio1");
/**
 * Funciones
 */
async function loadAsync(sourceLink) {
  return new Promise((resolve, reject) => {
    imagen.src = sourceLink;
    if (imagen.src === sourceLink) {
      imagen.height = 200;
      imagen.width = 150;
      resolve("Imagen cargada");
    } else {
      reject("Imagen no cargada");
    }
  });
}
//Logica
titulo.innerText = "Ejercicio 1";

/**Eventos */
imagenUrlInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === "Escape") {
    loadAsync(imagenUrlInput.value)
      .then((data) => {
        resolucion.textContent = "Imagen cargada correctamente";
      })
      .catch((error) => {
        resolucion.textContent = "Error, imagen no cargada";
      });
  }
});
/**
 * Ejercicio2
 */

/**
 * Imports
 */

/**
 * Variables
 */
const arrayOperaciones = ["sumar", "restar", "multiplicar", "dividir"];
const divOperaciones = document.getElementById("Ejercicio2");
const textoOperaciones = document.getElementById("textoEjercicio2");
const inputNumero1 = document.getElementById("numero1");
const inputNumero2 = document.getElementById("numero2");
const inputOperacion = document.getElementById("operacion");

/**
 * Funciones
 */
async function operacionesAsync(num1, num2, operacion) {
  return new Promise((resolve, reject) => {
    num1 = Number(num1);
    num2 = Number(num2);

    if (
      arrayOperaciones.includes(operacion) &&
      typeof num1 == "number" &&
      typeof num2 == "number"
    ) {
      console.log(operacion);
      switch (operacion) {
        case "sumar":
          resolve(num1 + num2);
          break;
        case "restar":
          resolve(num1 - num2);
          break;
        case "multiplicar":
          resolve(num1 * num2);
          break;
        case "dividir":
          resolve(num1 / num2);
          break;
      }
    } else {
      reject(
        "Error, no has introducido bien los datos o la operación a realizar"
      );
    }
  });
}

/**
 * Logica
 */

/**Eventos */
inputOperacion.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === "Escape") {
    operacionesAsync(
      inputNumero1.value,
      inputNumero2.value,
      inputOperacion.value
    )
      .then(
        (data) => (textoOperaciones.textContent = "Tu resultado es: " + data)
      )
      .catch(
        (error) => (textoOperaciones.textContent = "Tu resultado es: " + error)
      );
  }
});

/**
 * Ejercicio3
 */

/**
 * Variables globlaes
 */
const divEjercicio3 = document.getElementById("Ejercicio3");
const tiempoAnimacion = document.getElementById("tiempoAnimacion");
const botonAnimacion = document.getElementById("botonAnimacion");
const imagenAnimacion = document.getElementById("imagenAnimacion");
const pEjercicio3 = document.getElementById("pEjercicio3");
/**
 * Funciones
 */
function animarAsync(element, duration) {
  element.style.animation =
    "myAnim " + duration + "s ease 0s 1 normal forwards";
  return new Promise((resolve, reject) => {
    element.onanimationstart = () => {
      console.log("animacion ha comenzado");
      resolve("animacion comenzada");
    };
    element.onanimationend = () => {
      resolve("animacion terminada");
      pEjercicio3.textContent = "animacion ha terminado";
      element.style.animation = null;
      return true;
    };
  });
}

/**
 * Logica
 */

/**Eventos */
botonAnimacion.addEventListener("click", (e) => {
  animarAsync(imagenAnimacion, tiempoAnimacion.value)
    .then((data) => (pEjercicio3.textContent = data))
    .catch((error) => (pEjercicio3.textContent = error));
});

tiempoAnimacion.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    animarAsync(imagenAnimacion, tiempoAnimacion.value).then(
      (data) => (pEjercicio3.textContent = data)
    );
  }
});

/**
 * Ejercicio4
 */

/**
 * Variables
 */
const divEjercicio4 = document.getElementById("Ejercicio4");
const boton4 = document.getElementById("botonEjercicio4");
const pej4 = document.getElementById("pej4");
/**
 * Funciones
 */
function async1() {
  return new Promise((resolve, reject) => {
    const span4 = document.createElement("span");
    span4.id = "span4";
    divEjercicio4.appendChild(span4);
    if (document.getElementById("span4")) {
      resolve(span4);
    } else {
      reject("span no creado");
    }
  });
}

function async2(element) {
  return new Promise((resolve, reject) => {
    element.style.backgroundColor = "#FF0000";
    console.log(element.style.backgroundColor);
    if (element.style.backgroundColor == "rgb(255, 0, 0)") {
      resolve(element);
    } else {
      reject("color no cambiado ");
    }
  });
}

function async3(element) {
  return new Promise((resolve, reject) => {
    element.textContent = "Hola mundo";
    if (element.textContent === "Hola mundo") {
      resolve("Cadena de promesas completada");
    } else {
      reject("Cadena no completada");
    }
  });
}
/**Eventos */
boton4.addEventListener("click", (e) => {
  e.preventDefault();
  async1()
    .then((data) => async2(data))
    .then((data2) => async3(data2))
    .then((data3) => (pej4.textContent = data3))
    .catch((error) => console.log(error));
});

/**
 * Ejercicio5
 */
import Leaflet from "leaflet";
/**
 * Variables
 */
const divEj5 = document.getElementById("Ejercicio5");
const boton5 = document.getElementById("boton5");
const username = document.getElementById("username");
const password = document.getElementById("password");
const url5 = "https://jsonplaceholder.org/users";
const mapaDiv = document.getElementById("map");

/**
 * Funciones
 */

async function loginAsync(username1, password1) {
  return new Promise((resolve, reject) => {
    fetch(url5)
      .then((response) => response.json())
      .then((data) => {
        for (let objeto of data) {
          if (
            objeto.login.username == username1 &&
            objeto.login.password == password1
          ) {
            resolve(objeto);
          } else {
            reject("Login no valido");
          }
        }
      });
  });
}
/**Eventos */

boton5.addEventListener("click", (e) => {
  e.preventDefault();
  loginAsync(username.value, password.value).then((data) => {
    mapaDiv.style.display = "block";
    const carta = document.createElement("div");
    carta.id = "carta";
    const nombreUsuario = document.createElement("p");
    const apellidoUsuario = document.createElement("p");
    const emailUsuario = document.createElement("p");
    nombreUsuario.textContent = "Nombre : " + data.firstname;
    apellidoUsuario.textContent = "Apellido : " + data.lastname;
    emailUsuario.textContent = "Email : " + data.email;
    divEj5.appendChild(carta);
    carta.appendChild(nombreUsuario);
    carta.appendChild(apellidoUsuario);
    carta.appendChild(emailUsuario);
    var map = Leaflet.map("map").setView(
      [data.address.geo.lat, data.address.geo.lng],
      13
    );
    Leaflet.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
  });
});

boton5.addEventListener("keydown", (e) => {
  e.preventDefault();
  if (e.key == "Enter") {
    loginAsync(username.value, password.value).then((data) => {
      const carta = document.createElement("div");
      carta.id = "carta";
      const nombreUsuario = document.createElement("p");
      const apellidoUsuario = document.createElement("p");
      const emailUsuario = document.createElement("p");
      nombreUsuario.textContent = "Nombre : " + data.firstname;
      apellidoUsuario.textContent = "Apellido : " + data.lastname;
      emailUsuario.textContent = "Email : " + data.email;
      divEj5.appendChild(carta);
      carta.appendChild(nombreUsuario);
      carta.appendChild(apellidoUsuario);
      carta.appendChild(emailUsuario);
      var map = Leaflet.map("map").setView(
        [data.address.geo.lat, data.address.geo.lng],
        13
      );
      Leaflet.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);
    });
  }
});

/**
 * Ejercicio6
 */

/**
 * Variables globlaes
 */
const mapApis = new Map();
mapApis.set(
  "Granada",
  "https://api.open-meteo.com/v1/forecast?latitude=37.1882&longitude=-3.6067&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_hours,wind_speed_10m_max&timezone=Europe%2FBerlin"
);
mapApis.set(
  "Madrid",
  "https://api.open-meteo.com/v1/forecast?latitude=40.4165&longitude=-3.7067&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_hours,wind_speed_10m_max&timezone=Europe%2FBerlin"
);
const divEjercicio6 = document.getElementById("Ejercicio6");
const inputCiudad = document.getElementById("ciudadInput");
const botonEnviar6 = document.getElementById("botonEnviar6");
const pej6 = document.getElementById("pej6");
const card = document.createElement("div");
const h3card = document.createElement("h3");
const imgCard = document.createElement("img");
const pcard = document.createElement("p");
divEjercicio6.appendChild(card);
card.appendChild(imgCard);
card.appendChild(h3card);
card.appendChild(pcard);
/**
 * Funciones
 */
async function getWeather(ciudad) {
  const url = buscarCiudad(ciudad);
  // proteccion para ciudades que no existen
  if (url === false) {
    pej6.textContent = "Error, ciudad no encontrada";
    return false;
  }
  fetch(url)
    .then((response) => response.json())
    .then((data) => renderCard(data, ciudad))
    .catch((error) => console.log(error));
}
function buscarCiudad(ciudad) {
  if (mapApis.has(ciudad)) {
    return mapApis.get(ciudad);
  }
  return false;
}

function getIcono(arrayLluvias) {
  let numeroMaximo = 0;
  for (let numero of arrayLluvias) {
    if (numero > numeroMaximo) {
      numeroMaximo = numero;
    }
  }
  if (numeroMaximo < 10) {
    return "images/sol.png";
  } else if (numeroMaximo > 10 && numeroMaximo < 25) {
    return "images/nublado.png";
  } else if (numeroMaximo > 25) {
    return "images/lluvia.png";
  }
}

function getIcono2(arrayViento) {
  let numeroMaximo = 0;
  for (let numero of arrayViento) {
    if (numero > numeroMaximo) {
      numeroMaximo = numero;
    }
  }
  if (numeroMaximo < 10) {
    return "Viento suave :🎐";
  } else if (numeroMaximo > 10 && numeroMaximo < 25) {
    return "Viento medio, que tira hojas 🍃";
  } else if (numeroMaximo > 25) {
    return "Recomendado no salir de casa, vientos fuertes🛑🌪";
  }
}
function renderCard(objeto, ciudad) {
  //rellenamos la imagen
  imgCard.height = 100;
  imgCard.width = 100;
  let arrayLluvia = objeto.daily.precipitation_sum;
  imgCard.src = getIcono(arrayLluvia);

  h3card.textContent =
    ciudad +
    ",España Latitud:" +
    objeto.latitude +
    " Longitud:" +
    objeto.longitude;
  let arrayViento2 = objeto.daily.wind_speed_10m_max;
  pcard.textContent = getIcono2(arrayViento2);
}

/**Eventos */

botonEnviar6.addEventListener("click", (e) => {
  e.preventDefault();
  const texto = inputCiudad.value;
  getWeather(texto);
});

inputCiudad.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    const texto = inputCiudad.value;
    getWeather(texto);
  }
});

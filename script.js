/* script.js
   Implementación de los ejercicios 1 a 20 tal y como pide la práctica.
   Se usan exclusivamente métodos y técnicas solicitadas.
*/

/* 1. Acceso al DOM básico */
// cambiar texto del <h1> usando getElementById
const tituloEj1 = document.getElementById('titulo-ej1');
tituloEj1.textContent = 'Ejercicio 1: Título cambiado desde getElementById';

// cambiar color del párrafo con getElementsByTagName
const parrafosTag = document.getElementsByTagName('p'); // colección
for (let i = 0; i < parrafosTag.length; i++) {
  // aplicar solo al primer párrafo de la sección (id parrafo-ej1)
  if (parrafosTag[i].id === 'parrafo-ej1') {
    parrafosTag[i].style.color = 'teal';
  }
}

/* 2. Modificación de varios elementos */
// usar getElementsByClassName y recorrer con for para poner fondo gris
const textos = document.getElementsByClassName('texto');
for (let i = 0; i < textos.length; i++) {
  textos[i].style.backgroundColor = '#e9ecef'; // gris claro
}

/* 3. Selección con querySelector */
// seleccionar primer div.caja y cambiar borde y fondo con style
const primeraCaja = document.querySelector('.caja');
if (primeraCaja) {
  primeraCaja.style.border = '2px dashed #0d6efd';
  primeraCaja.style.backgroundColor = '#f1f5ff';
}

/* 4. querySelectorAll y forEach */
// recoger botones y cambiar texto a "DOM listo"
const botonesDom = document.querySelectorAll('.btn-dom');
botonesDom.forEach(btn => {
  btn.textContent = 'DOM listo';
});

/* 5. Comparación entre colecciones vivas y estáticas */
const listaViva = document.getElementsByTagName('li'); // viva
const listaEstatica = document.querySelectorAll('#lista-ej5 li'); // estática (NodeList)
const btnAgregarEj5 = document.getElementById('agregar-ej5');

btnAgregarEj5.addEventListener('click', () => {
  const nuevo = document.createElement('li');
  nuevo.textContent = 'Nuevo elemento';
  document.getElementById('lista-ej5').appendChild(nuevo);

  // mostrar en consola la diferencia
  console.log('getElementsByTagName (viva) length:', listaViva.length);
  console.log('querySelectorAll (estática) length:', listaEstatica.length);
});

/* 6. Crear elementos dinámicamente */
// crear <p> con texto "Creado dinámicamente" y añadir al body con appendChild()
const pDinamico = document.createElement('p');
pDinamico.textContent = 'Creado dinámicamente';
document.getElementById('ej6').appendChild(pDinamico);

/* 7. Crear nodos de texto */
// crear div#contenedor ya existe; generar nodo de texto y añadirlo dentro
const contenedorEj7 = document.getElementById('contenedor-ej7');
const nodoTexto = document.createTextNode('Texto insertado con createTextNode()');
const divParaTexto = document.createElement('div');
divParaTexto.appendChild(nodoTexto);
contenedorEj7.appendChild(divParaTexto);

/* 8. Añadir atributos a un elemento */
// crear imagen con createElement("img") y setAttribute (src, alt)
const imgEj8 = document.createElement('img');
imgEj8.setAttribute('src', 'https://via.placeholder.com/300x180');
imgEj8.setAttribute('alt', 'Imagen generada por JS');
imgEj8.classList.add('img-fluid');
document.getElementById('contenedor-img-ej8').appendChild(imgEj8);

/* 9. Crear estructura completa (card Bootstrap desde JS dentro de .container) */
(function crearCardEj9() {
  const cont = document.getElementById('contenedor-card-ej9'); // ya es .container en HTML
  // crear columna (para mantener proporción bootstrap)
  const col = document.createElement('div');
  col.className = 'col-md-4';

  // crear card
  const card = document.createElement('div');
  card.className = 'card';

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  const h5 = document.createElement('h5');
  h5.className = 'card-title';
  h5.textContent = 'Título (card)';

  const p = document.createElement('p');
  p.className = 'card-text';
  p.textContent = 'Texto (card)';

  const btn = document.createElement('button');
  btn.className = 'btn btn-primary';
  btn.textContent = 'Botón';

  cardBody.appendChild(h5);
  cardBody.appendChild(p);
  cardBody.appendChild(btn);
  card.appendChild(cardBody);
  col.appendChild(card);
  cont.appendChild(col);
})();

/* 10. Insertar elementos en distintas posiciones */
// crear lista y manipular con append, prepend, before, after
const listaEj10 = document.getElementById('lista-ej10');
for (let i = 1; i <= 3; i++) {
  const li = document.createElement('li');
  li.className = 'list-group-item';
  li.textContent = `Item ${i}`;
  listaEj10.appendChild(li);
}

document.getElementById('btn-append').addEventListener('click', () => {
  const li = document.createElement('li');
  li.className = 'list-group-item';
  li.textContent = 'Añadido con append';
  listaEj10.append(li);
});

document.getElementById('btn-prepend').addEventListener('click', () => {
  const li = document.createElement('li');
  li.className = 'list-group-item';
  li.textContent = 'Añadido con prepend';
  listaEj10.prepend(li);
});

document.getElementById('btn-before').addEventListener('click', () => {
  const referencia = listaEj10;
  const fuera = document.createElement('div');
  fuera.textContent = 'Elemento antes de la lista (before)';
  referencia.before(fuera);
});

document.getElementById('btn-after').addEventListener('click', () => {
  const referencia = listaEj10;
  const fuera = document.createElement('div');
  fuera.textContent = 'Elemento después de la lista (after)';
  referencia.after(fuera);
});

/* 11. Reemplazar y eliminar */
// eliminar con remove() y mostrar mensaje en consola
const parEliminar = document.getElementById('par-eliminar');
document.getElementById('btn-eliminar-ej11').addEventListener('click', () => {
  parEliminar.remove();
  console.log('Parrafo eliminado (ej11)');
});

// reemplazar con replaceWith()
document.getElementById('btn-reemplazar-ej11').addEventListener('click', () => {
  const nuevo = document.createElement('p');
  nuevo.textContent = 'Párrafo reemplazado';
  const referencia = document.getElementById('par-eliminar'); // si ya fue eliminado, referencia será null
  if (referencia) {
    referencia.replaceWith(nuevo);
  } else {
    // si no existe, insertar en la sección
    document.getElementById('ej11').appendChild(nuevo);
  }
});

/* 12. Clonar elementos */
// boton clonar que use cloneNode(true) y cambiar texto del clon
const btnClonarTarjeta = document.getElementById('btn-clonar-tarjeta');
btnClonarTarjeta.addEventListener('click', () => {
  const original = document.getElementById('tarjeta-original');
  const clon = original.cloneNode(true);
  // modificar texto del clon
  const tituloClon = clon.querySelector('.card-title');
  if (tituloClon) tituloClon.textContent = 'Tarjeta clonada';
  const textoClon = clon.querySelector('.card-text');
  if (textoClon) textoClon.textContent = 'Texto del clon';
  document.getElementById('contenedor-clones').appendChild(clon);
});

/* 13. Crear lista dinámica con botón */
let contadorEj13 = 1;
const ulEj13 = document.getElementById('lista-ej13');
document.getElementById('btn-agregar-ej13').addEventListener('click', () => {
  const li = document.createElement('li');
  li.className = 'list-group-item';
  li.textContent = `Elemento ${contadorEj13++}`;
  ulEj13.appendChild(li);
});

/* 14. Eliminar último elemento */
document.getElementById('btn-eliminar-ultimo-ej14').addEventListener('click', () => {
  if (ulEj13.lastElementChild) {
    ulEj13.removeChild(ulEj13.lastElementChild);
  }
});

/* 15. Recorrer colección y modificar */
// numerar automáticamente con forEach sobre querySelectorAll(".item")
document.getElementById('btn-numerar-ej15').addEventListener('click', () => {
  const items = document.querySelectorAll('#lista-ej15 .item');
  items.forEach((item, idx) => {
    item.textContent = `Elemento ${idx + 1}`;
  });
});

/* 16. Crear una galería con JSON local */
/*const imagenes = [
  { titulo: "Montaña", url: "https://via.placeholder.com/150/1" },
  { titulo: "Lago", url: "https://via.placeholder.com/150/2" },
  { titulo: "Bosque", url: "https://via.placeholder.com/150/3" }
];
const galeria = document.getElementById('galeria');
imagenes.forEach(img => {
  const col = document.createElement('div');
  col.className = 'col-sm-4 mb-3';

  const card = document.createElement('div');
  card.className = 'card';

  const imgEl = document.createElement('img');
  imgEl.className = 'card-img-top';
  imgEl.setAttribute('src', img.url);
  imgEl.setAttribute('alt', img.titulo);

  const body = document.createElement('div');
  body.className = 'card-body';

  const h5 = document.createElement('h5');
  h5.className = 'card-title';
  h5.textContent = img.titulo;

  body.appendChild(h5);
  card.appendChild(imgEl);
  card.appendChild(body);
  col.appendChild(card);
  galeria.appendChild(col);
});
*/
/* === 17. Mostrar datos de API JSONPlaceholder ===
   Usa fetch(), convierte a JSON y muestra name y email en una lista <ul>.
*/

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(usuarios => {
    const lista = document.getElementById("lista-usuarios-ej17");
    usuarios.forEach(usuario => {
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = `${usuario.name} - ${usuario.email}`;
      lista.appendChild(li);
    });
  })
  .catch(err => console.log("Error:", err));

/* === 18. Mostrar datos anidados de JSON ===
   Muestra una tabla con name, email y address.city
*/

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(usuarios => {
    const contenedor = document.getElementById("tabla-ej18");

    const tabla = document.createElement("table");
    tabla.className = "table table-striped";

    const thead = document.createElement("thead");
    const trHead = document.createElement("tr");

    ["Nombre", "Email", "Ciudad"].forEach(titulo => {
      const th = document.createElement("th");
      th.textContent = titulo;
      trHead.appendChild(th);
    });

    thead.appendChild(trHead);
    tabla.appendChild(thead);

    const tbody = document.createElement("tbody");

    usuarios.forEach(usuario => {
      const tr = document.createElement("tr");

      const tdNombre = document.createElement("td");
      tdNombre.textContent = usuario.name;

      const tdEmail = document.createElement("td");
      tdEmail.textContent = usuario.email;

      const tdCiudad = document.createElement("td");
      tdCiudad.textContent = usuario.address.city;

      tr.appendChild(tdNombre);
      tr.appendChild(tdEmail);
      tr.appendChild(tdCiudad);
      tbody.appendChild(tr);
    });

    tabla.appendChild(tbody);
    contenedor.appendChild(tabla);
  })
  .catch(err => console.log("Error:", err));

/* === 19. Filtrar y mostrar datos ===
   Filtra usuarios cuyo email termina en .biz y muéstralos en tarjetas Bootstrap.
*/

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(usuarios => {
    const contenedor = document.getElementById("resultado-ej19");
    const filtrados = usuarios.filter(u => u.email.endsWith(".biz"));

    filtrados.forEach(usuario => {
      const col = document.createElement("div");
      col.className = "col-md-4 mb-3";

      const card = document.createElement("div");
      card.className = "card";

      const cardBody = document.createElement("div");
      cardBody.className = "card-body";

      const h5 = document.createElement("h5");
      h5.className = "card-title";
      h5.textContent = usuario.name;

      const p = document.createElement("p");
      p.className = "card-text";
      p.textContent = usuario.email;

      cardBody.appendChild(h5);
      cardBody.appendChild(p);
      card.appendChild(cardBody);
      col.appendChild(card);
      contenedor.appendChild(col);
    });
  })
  .catch(err => console.log("Error:", err));

/* === 20. Ejercicio final: mini visor de usuarios ===
   Con botón “Cargar usuarios” y “Clonar último”.
*/

const btnCargar = document.getElementById("btn-cargar-20");
const btnClonar = document.getElementById("btn-clonar-ultimo-20");
const visor = document.getElementById("visor-usuarios");

btnCargar.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(usuarios => {
      visor.innerHTML = ""; // limpia lo anterior
      usuarios.forEach(usuario => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-3";

        const card = document.createElement("div");
        card.className = "card";

        const body = document.createElement("div");
        body.className = "card-body";

        const h5 = document.createElement("h5");
        h5.className = "card-title";
        h5.textContent = usuario.name;

        const pEmail = document.createElement("p");
        pEmail.textContent = usuario.email;

        const pCiudad = document.createElement("p");
        pCiudad.textContent = usuario.address.city;

        const btnEliminar = document.createElement("button");
        btnEliminar.className = "btn btn-danger btn-sm";
        btnEliminar.textContent = "Eliminar";
        btnEliminar.addEventListener("click", () => {
          col.remove();
        });

        body.appendChild(h5);
        body.appendChild(pEmail);
        body.appendChild(pCiudad);
        body.appendChild(btnEliminar);
        card.appendChild(body);
        col.appendChild(card);
        visor.appendChild(col);
      });
    })
    .catch(err => console.log("Error:", err));
});

btnClonar.addEventListener("click", () => {
  const tarjetas = visor.querySelectorAll(".col-md-4");
  const ultima = tarjetas[tarjetas.length - 1];
  if (ultima) {
    const clon = ultima.cloneNode(true);
    visor.appendChild(clon);
  }
});


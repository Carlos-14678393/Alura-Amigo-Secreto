// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombre de los amigos
let amigos = [];

// Funcion para agregar un amigo a la lista
function agregarAmigo(){
  const nombreInput = document.getElementById('nombreInput');
  const nombre = nombreInput.value.trim();

  // Validar que el campo no esté vacío
  if (nombre === ''){
    alert('Por favor, ingrese un nombre válido');
    return;
  }

  // Agregar el nombre al array
  amigos.push(nombre);

  // Actualizar la lista visual
  actualizarLista();

  // Limpiar el campo de entrada
  nombreInput.value = '';

  // Ocultar el resultado anterior si existe
  document.getElementById('resultado').style.display = 'none';
}

// funcion para actualizar la lista visual
function actualizarLista(){
  const listaElement = document.getElementById('listaAmigos');
  listaElement.innerHTML = '';

  // Crear elementos Li para cada amigo
  amigos.forEach((amigo, index) => {
    const li = document.createElement('li');
    li.textContent = amigo;
    // Agregar elemento para eliminar al hacer doble click
    li.ondblclick = () => eliminarAmigo(index);
    listaElement.appendChild(li);
  });
}

// Función para eliminar un amigo
function eliminarAmigo(index){
  if (confirm('Desea eliminar a ' + amigos[index] + '?')){
    amigos.splice(index, 1);
    actualizarLista();
    document.getElementById('resultado').style.display = 'none';
  }
}

// Función para sortear el amigo secreto
function sortearAmigo(){
  // Validar que al menos haya un amigo
  if (amigos.length === 0){
    alert('Debe agregar al menos un amigo para realizar el sorteo');
    return;
  }

  // Seleccionar un amigo aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indiceAleatorio];

  // mostrar el resultao 
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = `<h2> ¡El amigo secreto es... </h2>
  <p style="font-size: 24px; font-weight: bold; color: #4CAF50;">${amigoSecreto}</p>`;
  resultadoDiv.style.display = 'block';
}

// Permitir agregar amigos al presionar Enter
document.getElementById('nombreInput').addEventListener('keypress', function(event){
    if (event.key === 'Enter') {
        agregarAmigo();
    }
  
});
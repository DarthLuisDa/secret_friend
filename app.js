// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaamigos=[];  //Se declara la variable let, con un array/arreglo vacío, el cúal almacenará la lista de amigos

function agregarAmigo(){   //Se declara la función para agregar amigos a la lista
    let amigosingresados=document.getElementById('amigo').value;   //Se declara la variable amigosingresados que almacena el valor ingresado,getelementbyid para acceder alelemento y la propiedad value para obtener el texto ingresado
    if(amigosingresados === ''){   //Se agrega la condición if, si el valor esta vacío
        alert("Por favor, ingrese un nombre que no este vacio");  //se enviará un alert con el mensaje declarado
    }
    else{
        listaamigos.push(amigosingresados);   //se agrega la declaración else, en caso de que se ingrese un valor
        mostrarAmigos();  //se llama la función mostrarAmigos(), la cuual mostrará la lista de amigos
        document.getElementById('amigo').value = '';  //se restablece el campo de ntrada para limpiar el formulario y poder ingresar un nuevo nombre
    }
}

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

function sortearAmigo(){
    if (listaamigos.length>0 ){
        let indice=Math.floor(Math.random() * listaamigos.length);
        let amigoescogido= listaamigos[indice];
        document.getElementById('listaAmigos').textContent = 'El amigo secreto sorteado es: ' + amigoescogido;
        listaAmigos.style.color = 'green';
    }
    else{
        alert("Por favor, ingrese otro amigo");
    }
}


function mostrarAmigos(){   //Se declara una fución para mostrar amigos en forma de lista los amigos que vayas agregando
    let lista=document.getElementById('listaAmigos');  //Variable llamada lista, para guardar la lista de amigos que vyas ingresando
    lista.innerHTML = '';     //Limpiar cualquier contenido existente dentro de la lista, para que este vacía al momento de agregar nuevos nombres
    listaamigos.forEach((amigo, index) => {   //Bucle para iterar cada elemento en el arreglo listaamigos, nombre y posición actual
        let li = document.createElement('li');  //Crea nuevo elemento de lista para almacenarlo en la variable li
       
        li.textContent = amigo;  //asigna valor actual
        
        li.setAttribute('aria-labelledby', `amigo-${index}`);
        
        li.setAttribute('role', 'listitem');
        
        li.id = `amigo-${index}`;
        
        lista.appendChild(li);
      
    });
    
}
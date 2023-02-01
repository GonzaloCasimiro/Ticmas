//BARRAS DE CONTENIDO
let barra_de_links=document.getElementById("barra_de_links");

barra_de_links.addEventListener("click",(e)=>{
    if(e.target.tagName=="P"){

    let links=document.getElementsByClassName("link");
    for(i=0;i<links.length;i++){
        if(links[i].classList.contains("activar-link")==true){
            links[i].classList.remove("activar-link");
        }
    }
    e.target.classList.add("activar-link");
    // BARRA DE CONTENIDOS
    let barras_de_contenido=document.getElementsByClassName("barra-contenido");
    for(i=0;i<barras_de_contenido.length;i++){
        if(barras_de_contenido[i].classList.contains("activar-barra")==true){
            barras_de_contenido[i].classList.remove("activar-barra");
        }
    }
    for(i=0;i<barras_de_contenido.length;i++){
        id=e.target.getAttribute("id")
        clase=barras_de_contenido[i].classList[1]
        if(id==clase){
            barras_de_contenido[i].classList.add("activar-barra");
        }
    }
    //console.log(barras_de_contenido);
    //console.log());
    }
})

//BARRA  DE NAVEGACION
let side_menu=document.getElementById("menu");


let abrir_nav=document.getElementsByClassName("fa-bars")[0];
abrir_nav.addEventListener("click",(e)=>{
    console.log("hiciste click para abrir el nav");
    side_menu.style.right="0";
})
let cerrar_nav=document.getElementsByClassName("fa-circle-xmark")[0];
//console.log(cerrar_nav);
cerrar_nav.addEventListener("click",(e)=>{
    side_menu.style.right="-200px";
    console.log("hiciste click en el icono para cerrar el nav")
})


// EL FORMULARIO LO REALICE CON EL LOCAL STORAGE POR QUE NO TENGO CONOCIMIENTOS DE BACKEND

//CREO UNA CLASE MENSAJE 
class Mensaje{
    constuctor(emisor,email,mensaje){
        this.emisor=emisor;
        this.email=email;
        this.mensaje=mensaje;
    }
    ver_mensaje(){
        return  "Tienes un nuevo mensaje de: "+this.emisor+"su mensaje es: "+this.mensaje+" respondele a"+this.email
    }
}
// CREO UN ARRAY PARA ALMACENAR LOS FORMULARIOS ENVIADOS

let mensajes_recibidos=[];

// EVENTO ENVIAR FORMULARIO
let boton_enviar=document.getElementById("enviar");
boton_enviar.addEventListener("click",(e)=>{
    e.preventDefault();

    // CAPTURO LOS VALORES DEL FORMULARIO
    let emisor=document.getElementById("nombre");
    emisor=emisor.value;
    let emisor_email=document.getElementById("email");
    emisor_email=emisor_email.value;
    let emisor_mensaje=document.getElementById("mensaje");
    emisor_mensaje=emisor_mensaje.value;
//CREO EL MENSAJE Y LO PUSHEO A SU ARRAY
    let nuevo_mensaje={emisor:emisor,email:emisor_email,mensaje:emisor_mensaje}
    mensajes_recibidos.push(nuevo_mensaje);
    //GUARDO EL ARRAY EN EL LOCAL STORAGE
    localStorage.setItem("mensaje-nuevo",JSON.stringify(mensajes_recibidos));
})
//RECUPERO ARRAY DEL LOCAL STORAGE
let mensajes_storage=JSON.parse(localStorage.getItem("mensaje-nuevo"));
if(mensajes_storage!==null){
    mensajes_recibidos=mensajes_storage;
}
// MUESTRO LOS MENSAJES
if(mensajes_recibidos.length>0){
    mensajes_recibidos.forEach(mensaje => {
    console.log("Tienes un mensaje de: "+mensaje.emisor+"\n Su mensaje es: "+mensaje.mensaje+"\n Respondele en su email: "+mensaje.email);
});
}
//USE CONSOLA PARA MOSTRAR LOS MENSAJES POR FALTA DE CONOCIMIENTOS EN BACKEND


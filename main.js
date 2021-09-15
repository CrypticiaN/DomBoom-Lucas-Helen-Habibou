document.addEventListener("click", function(event){
    let nombreBoton = event.target.dataset.boton; 
    let elemento = event.target;

    if(nombreBoton){  
    let audioBoton = document.getElementById(nombreBoton); 
    audioBoton.currentTime=0;
    audioBoton.play();
    elemento.classList.add('presionado'); 
    // setTimeout(function(){
    //     elemento.classList.add('noPresionado'); 
    // }, 800);


    
    
}   



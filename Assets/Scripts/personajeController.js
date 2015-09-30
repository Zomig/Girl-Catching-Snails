#pragma strict

//Velocidad a la que s emueve el personaje
var speed : float ;

//Fuerza de salto
var jumpSpeed : float;

//Gravedad aplicada al personaje
var gravity : float;

//Almaceno los sonidos que va a reproducir el personaje
var sonidoSalto : AudioClip;

var sonidoGrito : AudioClip;

//Este es el componente que hace que el objeto pueda reproducir sonidos
var sonido : AudioSource;

//Variable tipo Vector3 donde pondremos las coordenadas de movimiento
private var moveDirection : Vector3 = Vector3.zero;



function Update() {

	//Almaceno el componente CharacterController
    var controller : CharacterController = GetComponent(CharacterController);
    
    //Si el personaje esta en el suelo
    if (controller.isGrounded) {
        
        // Como el eje horizontal esta invertido, modifico por -1
        //Vector3 hace referencia a(x,y,z);
        moveDirection = Vector3(-Input.GetAxis("Horizontal"), 0, 0);
        
        moveDirection = transform.TransformDirection(moveDirection);
        
        //Aplico la velocidad de movimiento
        moveDirection *= speed;
        
        //Si saltamos
        if (Input.GetButton ("Jump")) {
        
        	//Almaceno en el AudioSource el clip del salto
        	sonido.audio.clip = sonidoSalto;
        	
        	//Reproduzco el sonido
        	sonido.audio.Play();
        	
        	//Salto
            moveDirection.y = jumpSpeed;
        }
    }
    
    else{
    	
    	moveDirection.x = -Input.GetAxis("Horizontal");
    	
    	moveDirection.x = transform.TransformDirection(moveDirection).x;
        
        //Aplico la velocidad de movimiento
        moveDirection.x *= speed;
    
    }
    

    // Aplico la gravedad
    moveDirection.y -= gravity * Time.deltaTime;
    
    // Muevo el controller
    controller.Move(moveDirection * Time.deltaTime);
}

//Lo creo en una funcion para poder llamarla desde fuera
function saltar(){
	
	var controller : CharacterController = GetComponent(CharacterController);
         
    // Como el eje horizontal esta invertido, modifico por -1
    moveDirection = Vector3(-Input.GetAxis("Horizontal"), 0, 0);
    
    moveDirection = transform.TransformDirection(moveDirection);
    
    moveDirection *= speed;        
        
    moveDirection.y = jumpSpeed/2;
        
    // Aplico la gravedad
    moveDirection.y -= gravity * Time.deltaTime;
    
    // Muevo el controller
    controller.Move(moveDirection * Time.deltaTime);
    
}

function reproducirGrito(){
	
	sonido.audio.clip = sonidoGrito;
	
    sonido.audio.Play();
    
}
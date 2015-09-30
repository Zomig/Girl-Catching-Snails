#pragma strict

//velocidad de movimiento del caracol
public var speed : float; 

//Creamos una variable tipo GameObject para almacenar el jugador
private var jugador : GameObject;

//Primer Waypoint
private var posInicial : float;

//Segundo Waypoint
private var posFinal : float;

//Nada mas iniciarse la escena almaceno los dos Waypoints
function Awake(){

	posInicial = transform.position.x;
	
	posFinal = posInicial - 300.0;

}

function Update () {

	//Si la posicion del caracol es menor que el segundo Waypoint o mayor que el inicial
	//Cambiamos el signo a la velocidad
	if(transform.position.x < posFinal || transform.position.x > posInicial){
	
		speed = -speed;
		
		transform.position.x = transform.position.x - speed;
		
	}else{
		
		//Si no, nos movemos
		transform.position.x = transform.position.x - speed;
	
	}

}

//Funcion que se ejecuta cuando otro collider entra en contacto con el objeto
function OnTriggerEnter (other : Collider){

	//Si el collider con el que se encuentra tiene la etiqueta player
	if(other.tag == "Player"){
	
		//Se localiza un gameobject que lleve como tag Player
		jugador = gameObject.FindWithTag("Player");
		
		//Obtengo el component Transform del jugador
		var playerPosition : Transform = jugador.GetComponent(Transform);
	
		//Si el jugador esta en el aire
		if(playerPosition.position.y >= 0){
			
			//Llamo a la funcion saltar del script personajeController
			jugador.GetComponent(personajeController).saltar();
			
			//Llamo a la funcion sumarPuntos del script personajeStatus
			jugador.GetComponent(personajeStatus).sumarPuntos();
			
			//Reproduzco el sonido
			audio.Play();		
			
			//Mientras se reproduce el sonido hago el objeto invisible
			renderer.enabled = false;
		
			//Desactivo el collider para no poder interactuar con el mientras se destruye
			collider.enabled = false;
			
			//retardo para que se reproduzca el sonido antes de destruir el objeto
			yield WaitForSeconds(1.0);	
			
			//Destruyo el objeto
			Destroy(gameObject);
		
		}
		
		//Si no, significa que el caracol ha herido al jugador
		else{		
			
			//Almaceno el jugador 
			var jugador : GameObject = GameObject.Find("Player");
			
			//llamo a la funcion perderVida del script personajeStatus
			jugador.GetComponent(personajeStatus).perderVida();
			
			//Llamo a la funcion reproducirGrito del script personajeController
			jugador.GetComponent(personajeController).reproducirGrito();
					
		}
	}	
	
}
#pragma strict

//Funcion que se ejecuta una sola vez al cargarse la escena
function Awake(){	
	
	//Activo el render
	renderer.enabled = true;
	
	//activo el collider
	collider.enabled = true;
}

//Funcion que se ejecuta cuando otro collider entra en contacto con el objeto
function OnTriggerEnter (other : Collider){
	
	//Si el collider con el que se encuentra tiene la etiqueta player
	if(other.tag == "Player"){
	
		//Reproduzco el sonido
		audio.Play();
	
		//Sumo un caramelo al inventario
		personajeStatus.caramelos = personajeStatus.caramelos + 1;
		
		//Mientras se reproduce el sonido hago el objeto invisible
		renderer.enabled = false;
	
		//Desactivo el collider para no poder sumar mas caramelos mientras se destruye
		collider.enabled = false;
		
		//retardo para que se reproduzca el sonido antes de destruir el objeto
		yield WaitForSeconds(1.0);
		
		//Destruyo el objeto
		Destroy(gameObject);
	}
	
}



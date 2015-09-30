#pragma strict

//Los distintos sprites que componene el movimiento hacia la izquierda
var materiales : Material[];

//Tiempo que pasa entre que se cambia un sprite
var changeInterval = 0.33;

//Textura a mostrar cuando el caracol esta parado
var caracolReposo : Texture;

//Los sprites que muestra el caracol hacia la derecha
var materialesDerecha : Material[];

function Update(){	
	
	//Almaceno en una variable el script caracolStatus
	var estadoCaracol : caracolStatus = GetComponent(caracolStatus);	
	
	//No hacemos nada si no hay materiales
	if (materiales.Length == 0) 
	        return;
	
	//Si el caracol va hacia la izquierda mostramos las texturas de la izquierda
	if(estadoCaracol.speed > 0){  
	       
		// Calculamos el tiempo que tarda en cambiarse el sprite
		var index : int = Time.time / changeInterval;
			    
		// Sacamos el modulo con la longitud de los materiales para que la animacion se repita
		index = index % materiales.Length;
		    
		// renderizamos el material
		renderer.sharedMaterial = materiales[index];
	}
	else{
			
		 // Calculamos el tiempo que tarda en cambiarse el sprite
	    index = Time.time / changeInterval;
		    
	    // Sacamos el modulo con la longitud de los materiales para que la animacion se repita
	    index = index % materiales.Length;
		    
	    // renderizamos el material
	    renderer.sharedMaterial = materialesDerecha[index];
		
	}
	
}
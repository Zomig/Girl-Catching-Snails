
//Materiales para el movimiento hacia la derecha
var materials : Material[];

//Tiempo en el que se suceden los materiales
var changeInterval = 0.33;

//Textura que posee el personaje en estado de reposo
var texturaReposo : Texture;

//Materiales para el movimiento hacia la izquierda
var materialsIzq : Material[];

function Update () {

	//Si pulsamos el eje horizontal del mando hacia la derecha
	if(Input.GetAxis("Horizontal")>=0.01f){
	
		//Si no hemos puesto materiales no hacemos nada
	    if (materials.Length == 0)
	        return;
		        
	    // Establecemos el indice en funcion del tiempo de intervalo
	    var index : int = Time.time / changeInterval;
		    
	    /// Calculo el modulo del indice con respecto al numero de materiales
	    index = index % materials.Length;
		    
	    // muestro el material
	    renderer.sharedMaterial = materials[index];
	   
	}
	//Si pulsamos el eje horizontal del mando hacia la izquierda
	else if(Input.GetAxis("Horizontal")<=-0.01f){
	    
	    //Si no hemos puesto materiales no hacemos nada
	  	if (materialsIzq.Length == 0)
	        return;
		        
	    // Establecemos el indice en funcion del tiempo de intervalo
	    index = Time.time / changeInterval;
		    
	    // Calculo el modulo del indice con respecto al numero de materiales
	    index = index % materialsIzq.Length;
		    
	    // muestro el material
	    renderer.sharedMaterial = materialsIzq[index];
	    
	}
	    
	else{
	
	    //Si no nos movemos muestro la textura de reposo
	   	renderer.material.SetTexture("_MainTex", texturaReposo);
	    
	}
}
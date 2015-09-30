@script ExecuteInEditMode() //Hace que el Script se ejecute en modo edicion

//Asigno las texturas de la vida
var corazones0 : Texture;

var corazones01 : Texture;

var corazones02 : Texture;

var corazones03 : Texture;

//Vida con la que comienza el personaje
static var vida : int = 3;

//vida maxima cuando esta completa
var maxVida : int = 3;

//Plantillas para hacer el diseño de la GUI
var guiSkin : GUISkin;

//Numero de caramelos que acumula el personaje
static var caramelos : int = 0;

//Puntos por matar caracoles
static var puntos : int = 0;

//Textura del avar que aparece junto a la vida
var avatar : Texture;

//Textura del caramelo en la GUI
var imgCaramelo : Texture;

function Awake(){

	vida = 3;
	
	puntos = 0;
	
	caramelos = 0;
	
}

//Funcion reservada para ejecutar un GUI
function OnGUI(){
	
	//Textura que se mostrara de la vida
	var vidaTexture : Texture;

	//En funcion de la vida que nos quede cargo una textura u otra
	switch(vida){
	
		case 3:
		
		vidaTexture = corazones03;
		break;
		
		case 2:
		
		vidaTexture = corazones02;
		break;
		
		case 1:
		
		vidaTexture = corazones01;
		break;	
		
		default:
		
		vidaTexture = corazones0;
	
	}

	//Asigno al GUI nuestra skin
	GUI.skin = guiSkin;
	
	//Creo un grupo donde almacenare textura y etiquetas
	//Rect(izquierda, arriba, ancho, alto)
	GUI.BeginGroup (new Rect (0,0,300,200));
	
	//Pinto la textura del avatar
	GUI.DrawTexture(Rect(0,0,60,60), avatar, ScaleMode.ScaleToFit, true, 0);
	
	//Pinto la textura de la vida
	GUI.DrawTexture(Rect(70,15,100,30), vidaTexture, ScaleMode.ScaleToFit, true, 0);
	
	//Pinto la textura del caramelo
	GUI.DrawTexture(Rect(10,50,40,40), imgCaramelo, ScaleMode.ScaleToFit, true, 0);
	
	//Creo la etiqueta donde muestro el numero de caramelos que he conseguido
	GUI.Label(Rect(70,55,40,40), "" + caramelos + "");
	
	//Palabra puntos
	GUI.Label(Rect(10,90,70,40), "Puntos");
	
	//Muestro el numero de puntos que llevo
	GUI.Label(Rect(70,90,40,40), "" + puntos + "");
	
	//Cierro el grupo
	GUI.EndGroup();
	
}

//voy restando la vida cuando me atacan
function perderVida(){
	
	//Si la vida es una y perdemos otra, morimos
	if (vida == 1){	
		
		vida = vida - 1;
		
		//retardo 
		yield WaitForSeconds(1.0);	
		
		Application.LoadLevel("Fin");
	}
	
	else if(vida > 1){
		vida = vida - 1;
	}
	
}

//Sumo puntos cada vez que mato un caracol
function sumarPuntos(){
	
	puntos = puntos + 10;
	
}
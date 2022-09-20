
let cadenas = [",","-"].join("|")

//cuantificador (*, ?, +, {m,n})  no funciona en regex, se arreglara la que se usa que es *


function setCharAt(str,index,chr) { //cambia 1 por 1 las variables que no entren en sintax de regex
  if(index > str.length-1) return str;
  return str.substring(0,index) + chr + str.substring(index+1);
}

function cambiarCuantificadorRegex(str) //esta funcion nos cambia los cuantificadores regex que no funcionan en sintaxis
{
  for (let i = 0; i < str.length; i++) {
    if(str.charAt(i) == "*")
    {
      str = setCharAt(str,i,'-')
    }
    if(str.charAt(i) == "]" && str.charAt(i+1) == "[") //cambiamos de paso la manera que se ve con multiples delimitadores para evitar problemas de regex
    {
      str = setCharAt(str,i,',') //lo volvemos doble comilla para que sea mas sencillo separarlos
      str = setCharAt(str,i+1,',')
    }
  }
  return str
}

function aumentarDelimitadores(str)
{
  let cadenaDelimitadores = str.substr(0, str.length-1); //quitamos la parte final ]
  let delim = cadenaDelimitadores.substr(3, cadenaDelimitadores.length-3); //quitamos la parte inicial //[
  var regex = new RegExp(",,"); //cambiamos los [] por ,, para regex
  const splitArr = delim.split(regex);
  let muchosDelim
  muchosDelim = splitArr[0].toString() //si solo hay 1 array terminara aca
  for(let i=1; i<splitArr.length;i++)
  {
    muchosDelim = muchosDelim + "|" + splitArr[i].toString() //si hay muchos split ira guardando en un string cada variable
  }
  return muchosDelim
}

function sumar(str) {
  if (str == null)
  {
    return 0
  }

  let tot = 0
  str = cambiarCuantificadorRegex(str) //cambia el delimitador si tuviera un cuantificador no aceptable por regex
  let cadenasUsuario
  if(str[0] == "/") // si hay algo al principio entonces dividiremos el string en dos, donde hay delimitadores y donde hay numeros
  {
    const parteNumeros = str.split(" ");
    str = parteNumeros[1].toString(); //agarramos la parte de los numeros
    cadenasUsuario = cadenas + "|" + aumentarDelimitadores(parteNumeros[0].toString()) //agarramos la parte de los delimitadores
  }
  else{
    cadenasUsuario = cadenas //si no hay delimitadores entrara aca
  }
  var regex = new RegExp(cadenasUsuario); //encontramos los delimitadores con regex
  const splitArr = str.split(regex); //nos divide las cadenas con los delimitadores que tenemos
  for (let i = 0; i < splitArr.length; i++) {
    if (isNaN(splitArr[i]) == true) //si hay una cadena que no mostramos como delimitador
    {
      return "cadena no valida"
    }
    let num = parseInt(splitArr[i]); //nos devuelve la cadena como numero, no como string
    if(num <1000)
    {
      tot += num
    }
  }
  return tot
}

export {sumar};

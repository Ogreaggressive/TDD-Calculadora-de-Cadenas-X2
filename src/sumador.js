
let cadenas = [",","-"].join("|")

//cuantificador (*, ?, +, {m,n})  no funciona en regex, se arreglara la que se usa que es *

function aumentarDelimitadores(str)
{
  let cadenaDelimitadores = str.substr(0, str.length-1);
  let delim = cadenaDelimitadores.substr(3, cadenaDelimitadores.length-3);
  return delim
}

function setCharAt(str,index,chr) {
  if(index > str.length-1) return str;
  return str.substring(0,index) + chr + str.substring(index+1);
}

function cambiarCuantificadorRegex(str)
{
  for (let i = 0; i < str.length; i++) {
    if(str.charAt(i) == "*")
    {
      str = setCharAt(str,i,'-')
    }
  }
  return str
}

function sumar(str) {
  if (str == null)
  {
    return 0
  }

  let tot = 0
  str = cambiarCuantificadorRegex(str) //cambia el delimitador si tuviera un cuantificador no aceptable por regex
  let cadenasUsuario
  if(str[0] == "/")
  {
    const parteNumeros = str.split(" ");
    str = parteNumeros[1].toString(); //agarramos la parte de los numeros
    cadenasUsuario = cadenas + "|" + aumentarDelimitadores(parteNumeros[0].toString()) //agarramos la parte de los delimitadores
  }
  else{
    cadenasUsuario = cadenas
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

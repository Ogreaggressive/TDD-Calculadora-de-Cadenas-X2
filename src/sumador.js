
let cadenas = [",","-"].join("|")

function aumentarDelimitadores(str)
{
  const splitArr = str.split(" ");
  var primerDelimitadorRegex = splitArr[0].toString();

  let cadenaDelimitadores = primerDelimitadorRegex.substr(0, primerDelimitadorRegex.length-1);
  let delim = cadenaDelimitadores.substr(-1, 1);
  return delim
}

function sumar(str) {
  if (str == null)
  {
    return 0
  }

  let tot = 0
  let cadenasUsuario
  if(str[0] == "/")
  {
    const parteNumeros = str.split(" ");
    str = parteNumeros[1].toString();
    cadenasUsuario = cadenas + "|" + aumentarDelimitadores(str)
  }
  else{
    cadenasUsuario = cadenas
  }
  var regex = new RegExp(cadenasUsuario);
  const splitArr = str.split(regex);
  for (let i = 0; i < splitArr.length; i++) {
    if (isNaN(splitArr[i]) == true)
    {
      return "cadena no valida"
    }
    let num = parseInt(splitArr[i]);
    if(num <1000)
    {
      tot += num
    }
    
  }
  return tot
}

export {sumar};

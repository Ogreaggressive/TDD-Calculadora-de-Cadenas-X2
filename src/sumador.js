
let cadenas = [",","-"].join("|")

function aumentarDelimitadores(str)
{
  let cadenaDelimitadores = str.substr(0, str.length-1);
  let delim = cadenaDelimitadores.substr(3, cadenaDelimitadores.length-3);
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
    cadenasUsuario = cadenas + "|" + aumentarDelimitadores(parteNumeros[0].toString())
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

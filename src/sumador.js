let separadorCustom

function compararSeparador(char)
{
  let pertenece = false
  if (char == ",")
  {
    pertenece = true
  }
  if (char == "-"){
    pertenece = true
  }
  if (char == " ")
  {
    pertenece = true
  }
  if (char == separadorCustom){
    pertenece = true
  }

  return pertenece
}


function sumar(str) {
  if (str == null)
  {
    return 0
  }
  let tot = 0
  for (let i = 0; i < str.length; i++) {
    let num = parseInt(str[i]);
    if (isNaN(str[i]) == false)
    {
      tot = tot + num
    }
    else
    {
      if(str[i] == "/")
      {
         separadorCustom = str[i+3]
         i += 5
      }

      if (compararSeparador(str[i]) == false)
      {
        return "cadena no valida"
      }

    }
  }

  return tot;
}

export {sumar};

function sumar(str) {
  if (str == null)
  {
    return 0
  }

  var regex = new RegExp(",");
  const splitArr = str.split(regex);
  let tot = 0
  for (let i = 0; i < splitArr.length; i++) {
    if (isNaN(splitArr[i]) == true)
    {
      return "cadena no valida"
    }
    let num = parseInt(splitArr[i]);
    tot += num
  }
  return tot
}

export {sumar};

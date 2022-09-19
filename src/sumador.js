function sumar(str) {
  if (str == null)
  {
    return 0
  }
  let tot = 0
  for (var i = 0; i < 3; i++) {
    let num = parseInt(str[i]);
    if (isNaN(str[i]) == false)
    {
      tot = tot + num
    }
  }

  return tot;
}

export {sumar};

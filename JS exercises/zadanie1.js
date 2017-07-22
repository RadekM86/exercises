var lista= [];


  for (var i =0; i<12; i++){
    lista.push(Math.floor(Math.random(i)*9)+1);
  }
  console.log(lista);
  var total = 0;
  for(var i = 0; i < lista.length; i++) {
      total += lista[i];
  }
  var avg = total / lista.length;
  console.log(avg);

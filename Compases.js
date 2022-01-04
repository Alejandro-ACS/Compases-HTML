var notas = ["Redonda", "Blanca", "Negra", "Corchea", "Semicorchea", "Fusa", "Semifusa"]

var numerador = parseInt(prompt("Introduce el numerador: "))

var denominador = parseInt(prompt("Introduce el denominador: "))

if (numerador <= denominador){
  
    if (numerador == 2 || numerador == 3 || numerador == 4){

      console.log("Unidad de tiempo: " + notas[parseInt(Math.log2(denominador))]);

        if (numerador%2 != 0){

          console.log("Unidad de compás: " + notas[parseInt(Math.log2(denominador)-1*parseInt(numerador/2-0.5))] + " con puntillo");

        } else {

          console.log("Unidad de compás: " + notas[parseInt(Math.log2(denominador)-1*parseInt(numerador/2))]);

        }
    }
    if (numerador == 6 || numerador == 9 || numerador == 12){

      console.log("Unidad de parte: " + notas[parseInt(Math.log2(denominador))]);

      console.log("Unidad de tiempo: " + notas[parseInt(Math.log2(denominador)-1)] + " con puntillo");

      if (numerador == 6){

        console.log("Unidad de compás: " + notas[parseInt(Math.log2(denominador)-1*parseInt((numerador/2)/2)-0.5)] + " con puntillo");

      } else if (numerador == 12){

        console.log("Unidad de compás: " + notas[parseInt(Math.log2(denominador)-1*parseInt((numerador/2)/2))] + "con puntillo");

      } else if (numerador == 9){

        console.log("Unidad de compás: " + notas[parseInt(Math.log2(denominador)-1*2)]);

      }

    }

    if (numerador == 5 || numerador == 7 || numerador == 11){

      console.log("Unidad de tiempo: " + notas[parseInt(Math.log2(denominador))]);

      if (numerador == 5){

        console.log("Unidad de compás: " + notas[parseInt(Math.log2(denominador)-1)] + " con puntillo ligada a " + notas[parseInt(Math.log2(denominador)-1)].toLowerCase());

      } else if (numerador == 7){

        console.log("Unidad de compás: " + notas[parseInt(Math.log2(denominador)-2) + " ligada a " + notas[parseInt(Math.log2(denominador)-1)].toLowerCase() + " con puntillo"]);

      } else if (numerador == 11){

        console.log("Unidad de compás: " + notas[parseInt(Math.log2(denominador)-3)] + " ligada a " + notas[parseInt(Math.log2(denominador)-1)].toLowerCase() + " con puntillo")

      }

    }

}

if (numerador > denominador){

  if (numerador == 2 || numerador == 3 || numerador == 4){

    console.log("Unidad de tiempo: " + notas[parseInt(Math.log2(denominador))]);

    if (numerador == 2){

      console.log("Unidad de compás: Redonda ligada a redonda");
    
    } else if (numerador == 3){

      if (denominador == 1){

        console.log("Unidad de compás: Redonda con puntillo ligada a redonda con puntillo");
      
      } else if (denominador == 2){

        console.log("Unidad de compás: Redonda con puntillo");

      }
    
    } else if (numerador == 4){

      if (denominador == 1){

        console.log("Unidad de compás: Redonda con puntillo ligada a redonda con puntillo ligada a redonda");
      
      } else if (denominador == 2){

        console.log("Unidad de compás: Redonda ligada a redonda");

      }
    }

    } else if (numerador == 6 || numerador == 9 || numerador == 12){

    console.log("Unidad de parte: " + notas[parseInt(Math.log2(denominador))]);

    console.log("Unidad de tiempo: " + notas[parseInt(Math.log2(denominador)-1)] + " con puntillo");
  
    if (numerador == 6){

      if (denominador == 1){

        console.log("Unidad de compás: Redonda con puntillo ligada a redonda con puntillo ligada a redonda con puntillo ligada a redonda con puntillo");
      
      } else if (denominador == 2){

        console.log("Unidad de compás: Redonda con puntillo ligada a redonda con puntillo");

      } else if (denominador == 4){

        console.log("Unidad de compás: Redonda con puntillo");

      }
    
    } else if (numerador == 9){

      if (denominador == 1){

        console.log("Unidad de compás: Redonda con puntillo ligada a redonda con puntillo ligada a redonda con puntillo ligada a redonda con puntillo ligada a redonda con puntillo ligada a redonda con puntillo");

      } else if (denominador == 2){

        console.log("Unidad de compás: Redonda con puntillo ligada a redonda con puntillo ligada a redonda con puntillo");

      } else if (denominador == 4){

        console.log("Unidad de compás: Redonda con puntillo ligada a blanca con puntillo");

      } else if (denominador == 8){

        console.log("Unidad de compás: Blanca con puntillo ligada a negra con puntillo");

      }

    } else if (numerador == 12){

      if (denominador == 1){

        console.log("Unidad de compás: Redonda con puntillo ligada a redonda con puntillo ligada a redonda con puntillo ligada a redonda con puntillo ligada a redonda con puntillo ligada a redonda con puntillo ligada a redonda con puntillo ligada a redonda con puntillo");

      } else if (denominador == 2){

        console.log("Unidad de compás: Redonda con puntillo ligada a redonda con puntillo ligada a redonda con puntillo ligada a redonda con puntillo");

      } else if (denominador == 4){

        console.log("Unidad de compás: Redonda con puntillo ligada a redonda con puntillo");

      } else if (denominador == 8){

        console.log("Unidad de compás: Redonda con puntillo");

      }

    }
  
    } else if (numerador == 5 || numerador == 7 || numerador == 11){

    console.log("Unidad de tiempo: " + notas[parseInt(Math.log2(denominador))]);

    if (numerador == 5){

      if (denominador == 1){

        console.log("Unidad de compás: Redonda con puntillo ligada a redonda con puntillo ligada a redonda ligada a redonda");
      
      } else if (denominador == 2){

        console.log("Unidad de compás: Redonda con pun tillo ligaa a redonda");
      
      } else if (denominador == 4){

        console.log("Unidad de compás: Blanca con puntillo ligada a blanca");

      }
    
    } else if (numerador == 7){

      if (denomiandor == 1){

        console.log("Unidad de compás: Redonda con puntillo ligada a redonda con puntillo ligada a redonda ligada a redonda con puntillo ligada a redonda con puntillo");
      
      } else if (denominador == 2){

        console.log("Unidad de compás: Redonda ligada a redonda ligada a redonda con puntillo");
      
      } else if (denominador == 4){

        console.log("Unidad de compás: Redonda ligada a blanca con puntillo");

      }
      
    } else if (numerador == 11){

      if (denominador == 1){

        console.log("Unidad de compás: Redonda con puntillo ligada a redonda con puntillo ligada a redonda ligada a redonda con puntillo ligada a redonda con puntillo ligada a redonda ligada a redonda con puntillo ligada a redonda con puntillo")
      
      } else if (denominador == 2){

        console.log("Unidad de compás: Redonda ligada a redonda ligada a redonda ligada a redonda ligada a redonda con puntillo")
      
      } else if (denominador == 4){

        console.log("Unidad de compás: Redonda ligada a redonda ligada a redonda con puntillo")
      
      } else if (denominador == 8){

        console.log("Unidad de compás: Redonda ligada a negra con puntillo");

      }
    }

    }
  
}
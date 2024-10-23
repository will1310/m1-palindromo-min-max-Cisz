function isPalindrome(str) {
    for (let i = 0; i < str.length; i++) {
        palavraNormal = str[i].toLowerCase()
    }

    let indiciInicial = str.length - 1;
    for (let index = indiciInicial; index >= 0 ; index--){
    palavraInversa = str[index].toLowerCase()
    }

    if (palavraInversa == palavraNormal){
        return true
    } else return false

  }

  function arrayMaxMin (numeros){
    
    let result = [];
    let numeroMaisLongo = numeros[0]
    let numeroMaisCurto = numeros[0]    
     
    for(let i = 0; i < numeros.length ; i++){
        if(numeros[i] > numeroMaisLongo){
            numeroMaisLongo = numeros[i]
        }
        if(numeros[i] < numeroMaisCurto){
            numeroMaisCurto = numeros[i]
        }
        result = [numeroMaisCurto, numeroMaisLongo]

    }

    return result
  }

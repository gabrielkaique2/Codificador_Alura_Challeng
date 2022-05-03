    const input = document.querySelector('#areaTexto');
    var output = document.querySelector('#areaTextoSaida');
    var cripButton = document.querySelector('#criptografar');
    var decripButton = document.querySelector('#descriptografar');
    var copyButton= document.querySelector('#copiar');
    var t1 = '';
    var t2 = '';
    var t3 = '';
    var t4 = '';
    var t5 = '';

    function substituirCaracteres(){

        t1 = input.value.replaceAll('e','enter');
        t2 = t1.replaceAll('i','imes');
        t3 = t2.replaceAll('a','ai');
        t4 = t3.replaceAll('o','ober');
        t5 = t4.replaceAll('u','ufat');

        var result = t5;    
        return output.textContent = result;
        
    }

    function decriptar(){
        t1 = input.value.replaceAll('enter','e');
        t2 = t1.replaceAll('imes','i');
        t3 = t2.replaceAll('ai','a');
        t4 = t3.replaceAll('ober','o');
        t5 = t4.replaceAll('ufat','u');
        var resultD = t5;
        return output.textContent = resultD;
    }

    function copy() {
        var copyText = document.querySelector("#areaTextoSaida");
        copyText.select();
        document.execCommand("copy");
      }

    cripButton.addEventListener('click',substituirCaracteres);
    decripButton.addEventListener('click',decriptar);
    copyButton.addEventListener("click", copy);

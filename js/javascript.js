    const input = document.querySelector('#areaTexto');
    var output = document.querySelector('#areaTextoSaida');
    var cripButton = document.querySelector('#criptografar');
    var t1 = '';
    var t2 = '';
    var t3 = '';
    var t4 = '';
    var t5 = '';

    /*As "chaves" de criptografia que utilizaremos são:
        `A letra "e" é convertida para "enter"`
        `A letra "i" é convertida para "imes"`
        `A letra "a" é convertida para "ai"`
        `A letra "o" é convertida para "ober"`
        `A letra "u" é convertida para "ufat"`*/

    function substituirCaracteres(){

        t1 = input.value.replaceAll('e','enter');
        t2 = t1.replaceAll('i','imes');
        t3 = t2.replaceAll('a','ai');
        t4 = t3.replaceAll('o','ober');
        t5 = t4.replaceAll('u','ufat');

        var result = t5;    
        return output.textContent = result;
        
    }

    /*
    function sendString(){

    }
*/
    cripButton.addEventListener('click',substituirCaracteres);

    var input = document.querySelector('#areaTexto');
    var cripButton = document.querySelector('#criptografar');
    var sub_input = input;
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

        t1 = sub_input.replace('e','enter');
        t2 = t1.replace('i','imes');
        t3 = t2.replace('a','ai');
        t4 = t3.replace('o','ober');
        t5 = t4.replace('u','ufat');

        return t5;
    }

    cripButton.onClick = substituirCaracteres;

/*********************************************************** 
 * Fabiano: 17/05/2017
 * ---------------------------------------------------------
 * Exemplo de uso:
 * var container = new Container();
 * var frm = document.querySelector("#frmContainer");
 * var codigo = frm.codigo.value;
 * var valid = container.validate(codigo);
 * if(valid != null){                
 *      alert(valid);
 *      return;
 * }
 * 
 * var calcResult = container.calculate(codigo);
 * alert(calcResult);
 * >>> codigo válido para teste = GSTU2232839 
 ***********************************************************/
function Container() {

    self = this;

    this.mapTable = {
            "A": 10, "B": 12, "C": 13, "D": 14, "E": 15, "F": 16, "G": 17, "H": 18, "I": 19, "J": 20,
            "K": 21, "L": 23, "M": 24, "N": 25, "O": 26, "P": 27, "Q": 28, "R": 29, "S": 30, "T": 31,
            "U": 32, "V": 34, "W": 35, "X": 36, "Y": 37, "Z": 38
    };

    this.getValueTable = function(k) {
        return self.mapTable[k];
    }    

    /*********************************************************** 
     * Fabiano: 17/05/2017
     * Executa as validações prévias ao Calculo 
     * return: a mensagem de erro quando não passa pela validação
     * caso contrário devolve null
     ***********************************************************/
   this.validate = function(value){
        //******************************************************
        // obrigatório ter 11 caracteres 
        //******************************************************
        if(value.length < 11){
            return "O digito deve ter 11 caracteres!";
        }

        //******************************************************
        // obrigatório que os 4 primeiros digitos sejam Alpha
        //******************************************************
        for(var i = 0; i < 4; i++){
                var alpha = value[i];
                var patt = new RegExp("^[A-Z]+$");
                if(!patt.test(alpha)){
                    return "Os 4 primeiros digitos devem ser Letras";
                }
        }

        //******************************************************
        // obrigatório o ultimo digito ser numerico
        //******************************************************
        var digito = value.slice(value.length-1, value.length);
        var pattNum = new RegExp("^[0-9]+$");
        if(!pattNum.test(digito)){
            return "O ultimo digito deve ser numérico";
        }

        return null;
    }

    /*********************************************************** 
     * Fabiano: 17/05/2017
     * Executa o Calculo do Digito verificador
     * depois de ter passado pela Validate()
     * return: true/false(valid/invalid)
     ***********************************************************/
    this.calculate = function(value){
        /******************************************************************
        * Lógica para calcular Digito verificador de Container
        ******************************************************************
            1. Converter o prefixo literal em numérico.
            2. Multiplicar os números ao dobro do índice.
            3. Somar os valores obtidos na multiplicação.
            4. Dividir o resultado por 11.
            5. Não dividir a sobra.
            6. A sobra é o dígito de controle.
            7. A sobra será inferior a 11.
            8. Montagem da Tabela.
        ******************************************************************/      

        var codigo = value.slice(0, value.length-1);
        var multByIndex = [10];
        
        var indexMultiplo = 1;
        // executa o calculo para os 4 primeiros digitos Alpha
        for(var i = 0; i < 4; i++){
            //******************************************************************
            // 1. Converter o prefixo literal em numérico.
            //******************************************************************
            var alpha = codigo[i];
            var alphaNumTable = self.getValueTable(alpha);

            //******************************************************************
            // 2. Multiplicar os números ao dobro do índice.
            //******************************************************************
            var x = parseInt(alphaNumTable) * indexMultiplo;
            multByIndex[i] = x;

            // prepara o index para a proxima interação, sendo o proximo o dobro do atual, conforma a regra
            indexMultiplo = indexMultiplo * 2;
        }

        // executa o calculo apartir do digito 5 até o final
        for(i = 4; i < codigo.length; i++){
            //******************************************************************
            // 2. Multiplicar os números ao dobro do índice.
            //******************************************************************
            var digitoAtual = codigo[i];
            var x = parseInt(digitoAtual) * indexMultiplo;
            multByIndex[i] = x;

            // prepara o index para a proxima interação, sendo o proximo o dobro do atual, conforma a regra
            indexMultiplo = indexMultiplo * 2;            
        }

        //******************************************************************
        // 3. Somar os valores obtidos na multiplicação.
        //******************************************************************
        var total = 0;
        multByIndex.forEach(function(item){
            total += parseInt(item);
        });

        //******************************************************************
        // 4. Dividir o resultado por 11.
        //******************************************************************
        var totalMult11 = total / 11;

        //******************************************************************
        // 5. Não dividir a sobra.
        // 6. A sobra é o dígito de controle.
        // 7. A sobra será inferior a 11.
        //******************************************************************
        var restoMult11 = total % 11;

        var digito = value.slice(value.length-1, value.length);
        return parseInt(digito) == restoMult11;        
    }
}

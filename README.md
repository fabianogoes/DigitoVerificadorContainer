# DigitoVerificadorContainer

### Lógica de Calculo

1. Converter o prefixo literal em numérico.
2. Multiplicar os números ao dobro do índice.
3. Somar os valores obtidos na multiplicação.
4. Dividir o resultado por 11.
5. Não dividir a sobra.
6. A sobra é o dígito de controle.
7. A sobra será inferior a 11.
8. Montagem da Tabela


### Tabela de Prefixos em Numericos

| A = 10  | F = 16 | K = 21 | P = 27 | U = 32 |
| --------|--------|--------|--------|--------|
| B = 12  | G = 17 | L = 23 | Q = 28 | V = 34 |
| C = 13  | H = 18 | M = 24 | R = 29 | W = 35 |
| D = 14  | I = 19 | N = 25 | S = 30 | X = 36 |
| E = 15  | J = 20 | O = 26 | T = 31 | Y = 37 |
|         |        |        |        | Z = 38 |

> Os números dos contêineres não são
> aleatórios ou em ordem crescente. Alguns
> armadores adotam seus números exclusivos,
> porém a maioria utiliza a numeração
> estabelecida pela ISO.

| PREFIXO | Nº | Multiplicar | Índice |   | Total |
|---------|----|-------------|--------|---|-------|
|    G    | 17 |      X      |    1   | = | 17    |
|    S    | 30 |      X      |    2   | = | 60    |
|    T    | 31 |      X      |    4   | = | 124   |
|    U    | 32 |      X      |    8   | = | 256   |
|         | 2  |      X      |   16   | = | 32    |
|         | 2  |      X      |   32   | = | 64    |
|         | 3  |      X      |   64   | = | 192   |
|         | 2  |      X      |  128   | = | 256   |
|         | 8  |      X      |  256   | = | 2.048 |
|         | 3  |      X      |  512   | = | 1.536 |
|         |    |             |  Soma  | = | 4.585 |

> Verifique: GSTU 223283 9
> Dígito = 9 

```
Total: 4.585 ÷ 11 = 416
resto = 9
Nove é o dígito de controle.
```
### Reference
-------------   

* [http://www.ceconport.com.br/site/images/digito%20verificador-ceconport.pdf](http://www.ceconport.com.br/site/images/digito%20verificador-ceconport.pdf)
* [https://es.wikipedia.org/wiki/Contenedor](https://es.wikipedia.org/wiki/Contenedor)

---

License
-------
[![MIT][0]][1]   
Licensed under an [MIT-style permissive license][0].   

Open Source
-----------
[![Open Source][2]][3]

[0]: https://raw.githubusercontent.com/fabianogoes/Fico/master/src/main/resources/static/img/mit-license.png
[1]: https://raw.githubusercontent.com/fabianogoes/Fico/master/LICENSE
[2]: https://raw.githubusercontent.com/fabianogoes/Fico/master/src/main/resources/static/img/opensource-iniciative.png
[3]: https://en.wikipedia.org/wiki/Open_Source_Initiative



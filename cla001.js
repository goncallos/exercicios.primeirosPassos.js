/*1 crie uma Classe para representar carros.Classe
Os carros possuem uma marca, uma cor e um gasto médio de combustivel por km rodado
Crie um método que dado a quantidade de km e o preço do combustivel nos de o valor 
gasto em reais para realizar este percuso. 
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = cor;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const uno = new Carro ('Fiat', 'Prata', 1/ 12);
console.log(uno.calcularGastoDePercurso(70, 5));
const Palio = new Carro ('Fiat', 'Prata', 1/ 12);
console.log(Palio.calcularGastoDePercurso(70, 5));

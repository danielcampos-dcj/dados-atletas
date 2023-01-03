class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }

  calculaCategoria() {
    if (this.idade >= 9 && this.idade <= 11) {
      return "Infantil"
    } else if (this.idade === 12 || this.idade === 13) {
      return "Juvenil"
    } else if (this.idade === 14 || this.idade === 15) { 
      return "Intermediário"
    } else if (this.idade > 15 && this.idade < 31) {
      return "Adulto"
    } else {
      return "Sem categoria"
    }
  }
  obtemCategoria() {
    return atleta.calculaCategoria()
  }
  calculaIMC() {
    return this.peso / (this.altura * this.altura);
  }
  obtemIMC() {
    return atleta.calculaIMC()
  }
  obtemNomeAtleta() {
    return this.nome;
  }
  obtemIdadeAtleta() {
    return this.idade;
  }
  obtemPesoAtleta() {
    return this.peso;
  }
  obtemNotasAtleta() {
    return this.notas;
  }
  calculaMediaValida() {
    let ordenaNotas = this.notas;
    ordenaNotas = ordenaNotas.sort(function(a, b) {
      return (a - b)
    });
    ordenaNotas = ordenaNotas.slice(1,4)

    let somaNotas = ordenaNotas.reduce(function(total, atual){
      return total + atual;
    }, 0)

    let media = somaNotas / ordenaNotas.length

    return media;
  }
  obtemMediaValida() {
    return atleta.calculaMediaValida();
  }
}

// Declara o atleta
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10,9.34,8.42,10,7.88]);

console.log("Nome: " + atleta.obtemNomeAtleta());
console.log("Idade: " + atleta.obtemIdadeAtleta());
console.log("Peso: " + atleta.obtemPesoAtleta());
console.log("Altura: " + atleta.altura);
console.log("Notas: " + atleta.obtemNotasAtleta());
console.log("Categoria: " + atleta.obtemCategoria());
console.log("IMC: " + atleta.obtemIMC());
console.log("Média válida: " + atleta.obtemMediaValida())

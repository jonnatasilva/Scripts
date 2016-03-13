function Manada() {
	this.separador = "";
	this.list = [];
}
Manada.prototype = {

	adicionar: function(manada) {
  	this.list.push(manada);
  },
  barulhos: function() {
  	this.list.forEach(function(animal){
    	console.log(animal.fazerBarulho());
    });
  }
}

function ManadaVirgula () {
  Manada.call(this);
}

var manadaVirgulaPrototype = new Manada();

manadaVirgulaPrototype.barulhos = function() {
	var barulho = "";
	this.list.forEach(function(animal){
    	barulho += animal.fazerBarulho() + ",";
    });
  return barulho;
}

ManadaVirgula.prototype = manadaVirgulaPrototype;

function ManadaSustenidaDupla() {
  Manada.call(this);

}

var manadaSustenidaDuplaPrototype = new Manada();

manadaSustenidaDuplaPrototype.barulhos = function() {
	var barulho = "";
	this.list.forEach(function(animal){
    	barulho += animal.fazerBarulho() + "#";
    });
  return barulho;
}

ManadaSustenidaDupla.prototype = manadaSustenidaDuplaPrototype; 

function Animal() {
}

Animal.prototype = {
	fazerBarulho: function() {
  	return "Inheca";
  }
}

function Cão() {
	this.som = "Auu Auu";
	Animal.call(this);
}

var cãoPrototype = new Animal();
cãoPrototype.fazerBarulho = function() {
	return this.som;
}

Cão.prototype = cãoPrototype;

function Gato() {
 		this.som = "Miau Miau";
		Animal.call(this);
}

var gatoPrototype = new Animal();
gatoPrototype.fazerBarulho = function() {
	return this.som;
}

Gato.prototype = gatoPrototype;

var manadaVirgula = new ManadaVirgula();
manadaVirgula.separador = ",";
var manadaSustenidaDupla = new ManadaSustenidaDupla();
manadaSustenidaDupla.separador = "#";

var animais = [new Cão(), new Gato()];

animais.forEach(function(animal){
	manadaVirgula.adicionar(animal);
  manadaSustenidaDupla.adicionar(animal);
});

console.log(manadaVirgula.barulhos());
console.log(manadaSustenidaDupla.barulhos());


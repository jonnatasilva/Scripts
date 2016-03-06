var arrayObservers = [];

function gerarContador() {
	var x = 0;
	
	function contadorInterno() {
		return ++x;
	}
	
	return contadorInterno;
}

function gerarListener(n) {
	var contador = gerarContador();
  var event = {name: n, count: 0};
	var obj = event;
  
  function notifyObservers() {
  	for(var i = 0; i < arrayObservers.length; i++) {
    	if(obj.name === arrayObservers[i].getEvent().name){
      	console.log("Name: " + obj.getEvent().name + " Count: " + obj.getEvent().count);
      }
    }
  }
	obj.executar = function() {
		obj.getEvent().count = contador();
    notifyObservers();
	};
  
  obj.getEvent = function() {
  	return event;
  };
  
  obj.setEvent = function(e) {
  	event = e;
  }
  arrayObservers.push(obj);
	return obj;
}
var listenerOne = gerarListener("Click 1");
listenerOne.executar();
var listenerTwo = gerarListener("Click 2");
listenerTwo.executar();

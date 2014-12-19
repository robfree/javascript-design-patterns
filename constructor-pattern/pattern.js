/**
 * @author Roberto
 */

function MyObject (id, name) {
	this.id = id;
	this.name = name;
}

MyObject.prototype.display = function () {
	var content = document.getElementById ("content");
	var p = document.createElement("p");
	var text = document.createTextNode("Prueba");
	
	p.appendChild(text);
	content.appendChild(p);
};

var objeto1 = new MyObject(1, "El primer Objeto");

objeto1.display();

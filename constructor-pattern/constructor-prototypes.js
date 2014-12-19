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
	var text = document.createTextNode("The id for object: " + this.id + " and name: " + this.name);
	
	p.appendChild(text);
	content.appendChild(p);
};

var object1 = new MyObject(1, "The first object");

object1.display();

var object2 = new MyObject(123, "Other object");

object2.display();

/**
 * @author Roberto Serrano Diaz-Grande
 */

/**
 *  --- Basic Constructor ---
 * 
 * JavaScript doesn't support the concept of classes but it
 * does support special constructor functions that work 
 * with objects-
 **/

function MyObject(id, name) {
	
	this.id = id;
	this.name = name;
	
	this.display = function  () {
	  return "The id for object: " + this.id + " and name: " + this.name;
	};  
}

// Usage:

// Create new instances of the MyObject
var object1 = new MyObject(1, "The first Object");
var object2 = new MyObject(123, "Other Object");

// Output of the display() method
console.log("--- Basic Constructor ---");
console.log(object1.display());
console.log(object2.display());

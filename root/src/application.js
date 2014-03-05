var  MyModule = (function () {
	function sayHi (name) {
		return "Hi, " + name + "!";
	}
	console.log("this");

	return {
		sayHi:sayHi
	};
	
}());

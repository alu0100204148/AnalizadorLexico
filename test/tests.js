var assert = chai.assert;

suite('Analizador lexico', function() {

  setup(function(){
    if (typeof __html__ !== 'undefined') {
      document.body.innerHTML = __html__['test/index.html'];
      input = document.getElementById('INPUT');
      ouput = document.getElementById('OUTPUT');
    }
  });
  
  
  
  
   test('Prueba declaracion de variable.', function() {
    INPUT.value = 'var a = "hello";';
    main();
    assert.deepEqual(OUTPUT.innerHTML, '{\n    "value": "=",\n    "arity": "binary",\n    "first": {\n        "value": "a",\n        "arity": "name"\n    },\n    "second": {\n        "value": "hello",\n        "arity": "literal"\n    }\n}');
  });
   
   
  
  test('Prueba declaracion de una funcion.', function() {
  	INPUT.value = 'var a = "hello"; // initialize a var b = function(x) {var c = 3;return x+c; };';
  	main();
  	assert.deepEqual(OUTPUT.innerHTML, '{\n    "value": "=",\n    "arity": "binary",\n    "first": {\n        "value": "a",\n        "arity": "name"\n    },\n    "second": {\n        "value": "hello",\n        "arity": "literal"\n    }\n}');
  });
  
  
 
  

});

const { getAllKeys } = require("parse/lib/browser/Storage");
const Parse = require("parse/node");
require('dotenv').config({path:'./.env'})
Parse.serverURL = "https://parseapi.back4app.com"; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  process.env.key1, // This is your Application ID
  process.env.key2, // This is your Javascript key
  process.env.key3 //This is your master
);
/* let Person = Parse.Object.extend('Person')
let person = new Person()

person.set('name', 'Abraham A')
person.set('age', 21)
person.save() */
//CREAR
/* (async () => {
    const Coche = new Parse.Object('ClaseCoche');
    Coche.set('color', 'red');
    Coche.set('country', 'MX');
    try {
      const result = await Coche.save();
      // Access the Parse Object attributes using the .GET method
      console.log('El color de mi coche es: ', result.get('color'));
      console.log('El país de mi coche es: ', result.get('country'));
      console.log('Resultado de mi objeto creado', result);
    } catch (error) {
      console.error('Error while creating ParseObject: ', error);
    }
  })();
 */
//LEER
var arr = [];
(async () => {
  const query = new Parse.Query("Patient");
  // You can also query by using a parameter of an object
  
  const results = await query.find();
  try {
    for (const object of results) {
      // Access the Parse Object attributes using the .GET method
      const id = object.get("CustomerId");
      arr.push(id);
    }
    let duplicados = [];
    const tempArray = [...arr].sort();

    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i + 1] === tempArray[i]) {
        duplicados.push(tempArray[i]);
      }
    }
    console.log("Los elementos duplicados son: ",duplicados);
    console.log("Los elementos originales son: ",arr);
  } catch (error) {
    console.error("Error while fetching MyCustomClassName", error);
  }
})();


//UPDATE
/* (async () => {
    const query = new Parse.Query('ClaseCoche');
    try {
      // here you put the objectId that you want to update
      const object = await query.get('1gE5B5W8E0');
      object.set('color', 'purple');
      try {
        const response = await object.save();
        console.log(response.get('color'));
        console.log('La clase coches ha sido actualizada a: ', response);
      } catch (error) {
        console.error('Error while updating ', error);
      }
    } catch (error) {
      console.error('Error while retrieving object ', error);
    }
  })(); */
//ELIMINAR
/*   (async () => {
    const query = new Parse.Query('ClaseCoche');
    try {
      // here you put the objectId that you want to delete
      const object = await query.get('OAmD4VlSHO');
      try {
        const response = await object.destroy();
        console.log('El objeto ha sido eliminado exitosamente', response);
      } catch (error) {
        console.error('Error while deleting ParseObject', error);
      }
    } catch (error) {
      console.error('Error while retrieving ParseObject', error);
    }
  })(); */

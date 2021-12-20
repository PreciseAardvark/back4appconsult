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

var arr = [];
(async () => {
  const query = new Parse.Query("Diagnostic");
  // You can also query by using a parameter of an object
  // query.equalTo('objectId', 'xKue915KBG');
  const results = await query.find();
  try {
    for (const object of results) {
      // Access the Parse Object attributes using the .GET method
      const id = object.get("publicKey");
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
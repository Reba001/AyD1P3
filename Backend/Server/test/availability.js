const casual = require('casual')

module.exports = () => {
   casual.define("availability", function() {
     return {
       id_valor: casual.uuid,
       total: casual.integer(from = 10, to = 100)
     };
   });
   const data = {
      precios: []
   };
   // Create 3  precios
   for (let i = 0; i < 3; i++) {
     data.precios.push(casual.availability);
   }
   return data;
 };
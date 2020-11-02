const casual = require('casual')

module.exports = () => {
   casual.define("giftcard", function() {
     return {
       id_giftcard: casual.card_number(),
       nombre: casual.title,
       descripcion: casual.description,
       imagen: casual.url,
       charge_rate: casual.integer(from = 10, to = 100),
       activa: casual.integer(from = 0, to = 1).toString()
     };
   });
   const data = {
      giftcards: []
   };
   // Create 3  precios
   for (let i = 0; i < 3; i++) {
     data.giftcards.push(casual.giftcard);
   }
   return data;
 };
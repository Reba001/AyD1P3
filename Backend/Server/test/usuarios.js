const casual = require('casual')

module.exports = () => {
   casual.define("usuario", function() {
     return {
       id_usuario: casual.uuid,
       nombre: casual.first_name,
       apellido: casual.last_name,
       dpi: "2541114560101",
       edad: casual.integer(from = 10, to = 100)
     };
   });
   const data = {
      usuarios: []
   };
   // Create 10  usuarios
   for (let i = 0; i < 3; i++) {
     data.usuarios.push(casual.usuario);
   }
   return data;
 };
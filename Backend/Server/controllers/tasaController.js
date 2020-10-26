var tasaService = require('../services/tasa');
 
/**
 * Gets all the users and list them all in screen.
 */
exports.listTasas = function(req, res) {
    // Use the method loadCards form cardService to get all the cards
    tasaService.loadTasas(function(tasas, err) {
        if (err) {
            console.error('Error al recuperar las tarjetas');
            res.render('error', {
                message: 'Se ha producido un error. Contacte con el administrador.',
                error: null
            });
        } else {
            console.log('Tasas recuperadas:', tasas);
            res.json({tasas: tasas});
        }
    });
};
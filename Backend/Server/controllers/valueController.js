var valueService = require('../services/value');
 
/**
 * Gets all the users and list them all in screen.
 */
exports.listValues = function(req, res) {
    // Use the method loadCards form cardService to get all the cards
    valueService.loadValues(function(values, err) {
        if (err) {
            console.error('Error al recuperar los values');
            res.render('error', {
                message: 'Se ha producido un error. Contacte con el administrador.',
                error: null
            });
        } else {
            console.log('Values recuperados:', values);
            res.json({values: values});
        }
    });
};
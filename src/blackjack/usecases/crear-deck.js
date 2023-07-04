import _ from "underscore";
/**
 * Funcion para crear un nuevo deck
 * @param {array<string>} tiposDeCarta ejemplo: ['C','D','H','S'];
 * @param {array<string>} tiposEspeciales ejemplo: ['A','J','Q','K'];
 * @returns {array<string>} retorna un nuevo deck
 */

// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    if(!tiposDeCarta || tiposDeCarta.length === 0) 
        throw new Error('TiposdeCarta es obligatorio como un arreglo de string');
    if(!tiposEspeciales || tiposEspeciales.length === 0) 
        throw new Error('TiposEspeciales es obligatorio como un arreglo de string');
    

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    
    deck = _.shuffle( deck );
   
    return deck;
}

// // modulo por defecto
// export default crearDeck;
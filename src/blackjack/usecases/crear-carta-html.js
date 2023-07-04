/**
 * Funcion para crear la carta
 * @param {String} carta 
 * @returns {HTMLImageElement} carta imagen de la carta
 */
export const crearCartaHTML = (carta)=>{
    if(!carta) throw new Error('E argumento carta es obligatorio Hay que tener una carta');

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    divCartasComputadora.append( imgCarta );

    return imgCarta;

}
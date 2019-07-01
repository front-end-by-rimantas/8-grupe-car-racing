"use strict";

var trackLength = parseInt( getComputedStyle( document.querySelector('.track') ).width ),
    move = 50,
    carWidth = parseInt( getComputedStyle( document.querySelector('.car') ).width ),
    cars = [carWidth, carWidth];

console.log( cars );

window.addEventListener( "keyup", function( event ) {
    switch ( event.keyCode ) {
        case 87:
            // car "w"
            cars[0] += move;
            if ( cars[0] >= trackLength ) {
                alert( 'PIrma masina laimejo' );
            }
            break;

        case 79:
            // car "o"
            cars[1] += move;
            if ( cars[1] >= trackLength ) {
                alert( 'Antra masina laimejo' );
            }
            break;
    
        default:
            break;
    }

    moveMyCar();
} );

function moveMyCar() {
    document.querySelectorAll('.car').forEach( (car, index) => {
        car.setAttribute("style", `margin-left: ${cars[index] - carWidth}px;`);
        
    });
}
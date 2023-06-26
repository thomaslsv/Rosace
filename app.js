var canvas = document.getElementById('canvas'); // pour cibler le canvas
var ctx = canvas.getContext('2d');         // le contexte en 2d
canvas.width = window.innerWidth;          // toute la hauteur et toute la largeur
canvas.height = window.innerHeight;        // toute la hauteur et toute la largeur

var x = 0;          // Crée une variable x et lui attribue la valeur 0
var y = 0;          // Crée une variable y et lui attribue la valeur 0
var tour = 0;       // Crée une variable tour et lui attribue la valeur 0

ctx.translate(innerWidth / 2, innerHeight / 2); // se placer au centre du canvas

function dessin() {          // création d'une fonction dessin

    requestAnimationFrame(dessin);  // relancer l'animation

    ctx.beginPath();                // dessin un cercle
    ctx.strokeStyle = '#EDF5E1';    // couleur beige en contour
    ctx.arc(x, y, 100, 0, 2 * Math.PI);    // commence en x et y, prend 100 de rayon et fermeture avec 0 et 2*Math.PI
    ctx.stroke();                   // permet de tracer la figure

    ctx.rotate(30*Math.PI /180); // rotation de 30° 30*Math.PI /180 pour tranformer les deg en rad
    tour = tour +30;             // pour comtabiliser les degrés (max 360).


    if(tour > 7200){            // si la variable tour est supérieure à 7200
        return;                 // sortir de la fonction à ce point précis
    }

    if(tour % 360 === 0){              // si tour modulo de 360  (reste d'une division) 
                                      // si ce modulo est égal à 0, cela signifie que tour est un multiple de 360. 
        x += 10;                // on rajoute 10 au point de depart x
        y += 10;                // on rajoute 10 au point de depart y
    }

}

dessin(); // appel de la fonction

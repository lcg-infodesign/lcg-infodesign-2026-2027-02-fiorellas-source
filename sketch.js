function preload() {
  // non ho file esterni
}

function setup() {
  createCanvas(windowWidth, windowHeight);  //canvas dev'essere grande quanto finestra, usa variabile windowWidth e windowHeight, controlla spelling corretto. 
  console.log('p5.js version:', p5.VERSION);
  background(20);
  //disegno glifi. ordine nel setup è importante. 
  let numeroGlifi = 100;
  //mettere per n colonne e righe della griglia questi elementi
  let numeroColonne = ceil (sqrt(numeroGlifi));
  let numeroRighe = sqrt(numeroGlifi);
  let dimColonna = windowWidth / numeroColonne;
  let dimRiga = windowHeight / numeroRighe;

  let xCorrente = 0;
  let yCorrente = 0;

  for (let g = 0; g<numeroGlifi; g++){
    mioGlifo(xCorrente + dimColonna/2, yCorrente + dimRiga/2, dimRiga*0.8);
    xCorrente = xCorrente + dimColonna;

    if(xCorrente >= windowWidth){ //per disegnare cerchio subito sotto nella x iniziale appena supera windowWidth
      xCorrente = 0;
      yCorrente = yCorrente + dimRiga;
    }
  }
}


function draw() {
  // noLoop
}

// Funzione per disegnare il singolo glifo (la farfalla di 4 ellissi) 
function mioGlifo(_x, _y, _size) {
  push(); 
  translate(_x, _y); // Sposta l'origine al centro della cella della griglia

// Corpo centrale della farfalla
  fill(128,0, 128); 
  ellipse(0, 0, _size * 0.08, _size * 0.35);


//colore random
fill(random(0,255), random(0,255), random(0,255)) //colori casuali Lodo
noStroke ();


// Le 4 ali posizionate simmetricamente
  ellipse(-_size * 0.15, -_size * 0.15, _size * 0.45, _size * 0.25); // Ala superiore sx
  ellipse(_size * 0.15, -_size * 0.15, _size * 0.45, _size * 0.25);  // Ala superiore dx
  ellipse(-_size * 0.1, _size * 0.15, _size * 0.35, _size * 0.2);    // Ala inferiore sx
  ellipse(_size * 0.1, _size * 0.15, _size * 0.35, _size * 0.2);     // Ala inferiore dx

  pop(); 
}

/* const message =
    "This is a template repository\nfor the course Laboratorio di Computergrafica\nCommunication Design, Politecnico di Milano";
  textAlign(CENTER, CENTER);
  textSize(16);
  text(message, width / 2, height / 2); 
  */ 

  

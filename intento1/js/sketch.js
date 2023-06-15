let trazo1, trazo2, trazo3, trazo4, trazo5, trazo6;
let nivel = 0;
let violeta 
let random1, random2, random3, random4;

/// Definición de la clase Trazo
class Trazo1 {
  constructor(imagen, x, y, ancho, alto) {
    this.imagen = imagen;
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
  }

  mostrar() {
    image(this.imagen, this.x, this.y, this.ancho, this.alto);
  }
}
// Definición de la clase Trazo
class Trazo2 {
  constructor(imagen, x, y, ancho, alto) {
    this.imagen = imagen;
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
  }

  mostrar() {
    image(this.imagen, this.x, this.y, this.ancho, this.alto);
  }
}
// Definición de la clase Trazo
class Trazo3 {
  constructor(imagen, x, y, ancho, alto) {
    this.imagen = imagen;
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
  }

  mostrar() {
    image(this.imagen, this.x, this.y, this.ancho, this.alto);
  }
}
// Definición de la clase Trazo
class Trazo4 {
  constructor(imagen, x, y, ancho, alto) {
    this.imagen = imagen;
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
  }

  mostrar() {
    image(this.imagen, this.x, this.y, this.ancho, this.alto);
  }
}// Definición de la clase Trazo
class Trazo5 {
  constructor(imagen, x, y, ancho, alto) {
    this.imagen = imagen;
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
  }

  mostrar() {
    image(this.imagen, this.x, this.y, this.ancho, this.alto);
  }
}
// Definición de la clase Trazo
class Trazo6 {
  constructor(imagen, x, y, ancho, alto) {
    this.imagen = imagen;
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
  }

  mostrar() {
    image(this.imagen, this.x, this.y, this.ancho, this.alto);
  }
}

let trazos = [];

function preload() {
  // Carga las imágenes de los trazos
  trazo1 = loadImage("https://res.cloudinary.com/dctwdrrg2/image/upload/v1686713196/trazo1_fgthgz.png");
  trazo2 = loadImage("https://res.cloudinary.com/dctwdrrg2/image/upload/v1686713193/trazo2_rngnwj.png");
  trazo3 = loadImage("https://res.cloudinary.com/dctwdrrg2/image/upload/v1686713197/trazo3_peahwl.png");
  trazo4 = loadImage("https://res.cloudinary.com/dctwdrrg2/image/upload/v1686713192/trazo4_xcc9sk.png");
  trazo5 = loadImage("https://res.cloudinary.com/dctwdrrg2/image/upload/v1686713193/trazo5_ysumim.png");
  trazo6 = loadImage("https://res.cloudinary.com/dctwdrrg2/image/upload/v1686713194/trazo6_nbuwl9.png");
}

function setup() {
  createCanvas(600, 600);
  violeta = color(128, 82, 209); // Asignación del color dentro de setup()
  trazos.push(new Trazo1(trazo1, 100, 100, 200, 200));
  trazos.push(new Trazo2(trazo2, 300, 300, 150, 150));
  trazos.push(new Trazo3(trazo3, 200, 400, 180, 180));
  trazos.push(new Trazo4(trazo4, 400, 200, 220, 220));
  trazos.push(new Trazo5(trazo5, 150, 350, 120, 120));
  trazos.push(new Trazo6(trazo6, 350, 150, 250, 250));
}

function draw() {
  pantalla1();
  for (let i = 0; i < trazos.length; i++) {
    trazos[i].mostrar();
  }
  console.log(frameCount);
  console.log(nivel);
}

function mouseClicked() {
  click();
}

function pantalla1() {
  if (nivel === 0) {
    fill(255);
    noStroke();
    square(0, 0, width);
    if (frameCount > 70) {
      estado1();
      violeta = color(mouseX, mouseY, 255);
      if (frameCount > 70 && frameCount < 130) {
        random1 = random(-10, 300);
        random2 = random(300, 590);
        random3 = random(-100, 500);
        random4 = random(-200, 200);
      }
    }
  }

  if (nivel === 1) {
    stroke(255);
    strokeWeight(10);
    for (let y = 30; y < height; y += 30) {
      line(y, height, y, 0);
      let d = dist(mouseX, mouseY, y, width / 2);
      if (d < 30) {
        stroke(255);
      }
    }
  }
}



function click() {        // Cambiar de nivel. Después de definir los colores, se hace clic para armar las líneas
  if (mouseX > 0 && mouseY > 0) {
    nivel += 1;
  }
}

function estado1() {
  tint(234, 245 - mouseX, 158 - mouseY);
  image(trazo4, random1, random3, 500, 500);

  tint(167, mouseX, 79);  // Marrón
  image(trazo5, random4, 0, 500, 300);
}
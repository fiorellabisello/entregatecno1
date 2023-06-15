let trazo1, trazo2, trazo3, trazo4, trazo5, trazo6;
let nivel = 0;
let violeta;
let mic;
let amp;
let random1 = 0; // Asigna un valor numérico inicial a random1
let random2 = 0; // Asigna un valor numérico inicial a random2
let random3 = 0; // Asigna un valor numérico inicial a random1
let random4 = 0; // Asigna un valor numérico inicial a random2
let audioContextStarted = false;




class Trazo1 {
  constructor(imagen, x, y, ancho, alto) {
    this.imagen = imagen;
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.moving = true;
    this.velocidadX = random(-1, 1);
    this.velocidadY = random(-1, 1);
  }

  mostrar() {
    if (this.moving) {
      this.x += random(-1, 1);
      this.y += random(-1, 1);
    }
    image(this.imagen, this.x, this.y, this.ancho, this.alto);
  }
}

class Trazo2 {
  constructor(imagen, x, y, ancho, alto) {
    this.imagen = imagen;
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.moving = true;
  }

  mostrar() {
    if (this.moving) {
      this.x += random(-1, 1);
      this.y += random(-1, 1);
    }
    image(this.imagen, this.x, this.y, this.ancho, this.alto);
  }
}

class Trazo3 {
  constructor(imagen, x, y, ancho, alto) {
    this.imagen = imagen;
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.moving = true;
  }

  mostrar() {
    if (this.moving) {
      this.x += random(-1, 1);
      this.y += random(-1, 1);
    }
    image(this.imagen, this.x, this.y, this.ancho, this.alto);
  }
}

class Trazo4 {
  constructor(imagen, x, y, ancho, alto) {
    this.imagen = imagen;
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.moving = true;
  }

  mostrar() {
    if (this.moving) {
      this.x += random(-1, 1);
      this.y += random(-1, 1);
    }
    image(this.imagen, this.x, this.y, this.ancho, this.alto);
  }
}

class Trazo5 {
  constructor(imagen, x, y, ancho, alto) {
    this.imagen = imagen;
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.moving = true;
  }

  mostrar() {
    if (this.moving) {
      this.x += random(-1, 1);
      this.y += random(-1, 1);
    }
    image(this.imagen, this.x, this.y, this.ancho, this.alto);
  }
}

class Trazo6 {
  constructor(imagen, x, y, ancho, alto) {
    this.imagen = imagen;
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.moving = true;
  }

  mostrar() {
    if (this.moving) {
      this.x += random(-1, 1);
      this.y += random(-1, 1);
    }
    image(this.imagen, this.x, this.y, this.ancho, this.alto);
  }
}

let trazos = [];

function preload() {
  trazo1 = loadImage("https://res.cloudinary.com/dctwdrrg2/image/upload/v1686713196/trazo1_fgthgz.png");
  trazo2 = loadImage("https://res.cloudinary.com/dctwdrrg2/image/upload/v1686713193/trazo2_rngnwj.png");
  trazo3 = loadImage("https://res.cloudinary.com/dctwdrrg2/image/upload/v1686713197/trazo3_peahwl.png");
  trazo4 = loadImage("https://res.cloudinary.com/dctwdrrg2/image/upload/v1686713192/trazo4_xcc9sk.png");
  trazo5 = loadImage("https://res.cloudinary.com/dctwdrrg2/image/upload/v1686713193/trazo5_ysumim.png");
  trazo6 = loadImage("https://res.cloudinary.com/dctwdrrg2/image/upload/v1686713194/trazo6_nbuwl9.png");
}

function setup() {
  document.addEventListener('click', function() {
    if (!audioContextStarted) {
      userStartAudio();
      audioContextStarted = true;
    }
  });

  createCanvas(600, 600);
  violeta = color(128, 82, 209);
  trazos.push(new Trazo1(trazo1, 100, 100, 200, 200));
  trazos.push(new Trazo2(trazo2, 300, 300, 150, 150));
  trazos.push(new Trazo3(trazo3, 200, 400, 180, 180));
  trazos.push(new Trazo4(trazo4, 400, 200, 220, 220));
  trazos.push(new Trazo5(trazo5, 150, 350, 120, 120));
  trazos.push(new Trazo6(trazo6, 350, 150, 250, 250));
}

function draw() {
  userStartAudio();
  pantalla1();

  if (mic && mic.enabled) {
    amp = mic.getLevel();
  }

  for (let i = 0; i < trazos.length; i++) {
    trazos[i].mostrar();
  }

  console.log(frameCount);
  console.log(nivel);

  if (amp > 0.5) {
    nivel += 1;
  }
}

if (!audioContextStarted) {
  // Inicia el contexto de audio solo si aún no se ha iniciado
  mic = new p5.AudioIn();
  mic.start();
  audioContextStarted = true;
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
    fill(violeta);
    noStroke();
    square(0, 0, width);

    if (frameCount > 70 && frameCount < 130) {
      estado1();
      random1 = random(-10, 300);
      random2 = random(300, 590);
      random3 = random(-100, 500);
      random4 = random(-200, 200);
    }

    if (frameCount > 130 && frameCount < 200) {
      estado2();
      random1 = random(300, 590);
      random2 = random(-10, 300);
      random3 = random(-100, 500);
      random4 = random(-200, 200);
    }
  }

  if (nivel === 2) {
    fill(violeta);
    noStroke();
    square(0, 0, width);

    if (frameCount > 70 && frameCount < 130) {
      estado1();
      random1 = random(-10, 300);
      random2 = random(300, 590);
      random3 = random(-100, 500);
      random4 = random(-200, 200);
    }

    if (frameCount > 130 && frameCount < 200) {
      estado2();
      random1 = random(300, 590);
      random2 = random(-10, 300);
      random3 = random(-100, 500);
      random4 = random(-200, 200);
    }

    if (frameCount > 200 && frameCount < 270) {
      estado3();
      random1 = random(-100, 500);
      random2 = random(300, 590);
      random3 = random(-10, 300);
      random4 = random(-200, 200);
    }
  }
}

function estado1() {
  stroke(255);
  strokeWeight(2);
  noFill();
  ellipse(random1, random2, 100, 100);
}

function estado2() {
  noStroke();
  fill(255);
  rect(random1, random2, 100, 100);
}

function estado3() {
  stroke(violeta);
  strokeWeight(5);
  line(random1, random2, random3, random4);
}

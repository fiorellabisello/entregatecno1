let trazos = [];
let violeta;
let random1, random2, random3, random4;
let mic;
let nivel = 0;

class Trazo {
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

function setup() {
  createCanvas(600, 600);
  violeta = color(128, 82, 209);

  for (let i = 0; i < trazos.length; i++) {
    trazos[i] = new Trazo(trazos[i], random(width), random(height), random(100, 300), random(100, 300));
  }
  mic = new p5.AudioIn();
  mic.start();
  startAudio();
}

function startAudio() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}

function mousePressed() {
  // Reinicia el audio después de una interacción del usuario
  mic.start();
  startAudio();
}


function preload() {
  trazos.push(loadImage("https://res.cloudinary.com/dctwdrrg2/image/upload/v1686713196/trazo1_fgthgz.png"));
  trazos.push(loadImage("https://res.cloudinary.com/dctwdrrg2/image/upload/v1686713193/trazo2_rngnwj.png"));
  trazos.push(loadImage("https://res.cloudinary.com/dctwdrrg2/image/upload/v1686713197/trazo3_peahwl.png"));
  trazos.push(loadImage("https://res.cloudinary.com/dctwdrrg2/image/upload/v1686713192/trazo4_xcc9sk.png"));
  trazos.push(loadImage("https://res.cloudinary.com/dctwdrrg2/image/upload/v1686713193/trazo5_ysumim.png"));
  trazos.push(loadImage("https://res.cloudinary.com/dctwdrrg2/image/upload/v1686713194/trazo6_nbuwl9.png"));
}


function draw() {
  let amp = mic.getLevel();
  background(255);
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
      fill(0);
      textAlign(CENTER, CENTER);
      textSize(50);
      text("Click to start", width / 2, height / 2);
    }

    if (frameCount > 60 && frameCount < 70) {
      fill(violeta);
      square(random(10, 200), random(10, 200), random(10, 200));
    }

    if (frameCount > 90 && frameCount < 100) {
      fill(violeta);
      square(random(300, 590), random(300, 590), random(10, 200));
    }

    if (frameCount > 130) {
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

function click() {
  if (nivel < 1 && mouseX > 0 && mouseY > 0) {
    nivel += 1;
  }
}

function estado1() {
  tint(234, 245 - mouseX, 158 - mouseY);
  image(trazos[3].imagen, random1, random3, 500, 500);

  tint(167, mouseX, 79);
  image(trazos[4].imagen, random4, 0, 500, 300);

  noTint();
}

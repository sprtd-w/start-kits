(function() {
  class ContextSetup {
    hue = 0;
    constructor(type) {
      this.type = type;
    }

    setup(context) {
      return this.type.setup(context);
    }

    setBrushSize(context, size) {
      context.lineWidth = size;
    }

    rainbownizeBrush(context) {
      context.strokeStyle = `hsl(${this.hue}, 100%, 50%)`;
      this.hue++;
    }
  }

  function Smoothy() {
    this.setup = (context) => {
      context.strokeStyle = 'navy';
      context.lineJoin = 'round';
      context.lineCap = 'round';
    }
  }

  function Square() {
    this.setup = (context) => {
      context.strokeStyle = 'red';
      context.lineJoin = 'square';
      context.lineCap = 'square';
    }
  }

  const canvas = document.querySelector('#canvas');
  // you don't draw immediately on canvas in html; it is context of canvas to be drawn on
  const context = canvas.getContext('2d');

  // setup dimentions
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // setup brush
  const setupSmoothy = new Smoothy();
  const settings = new ContextSetup(setupSmoothy);
  settings.setup(context);

  // change brush size if necessary
  settings.setBrushSize(context, 20);

  // use flags to draw
  let isDrawing;
  let prevX = 0;
  let prevY = 0;

  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mousedown', (event) => {
    updateStoredCoordinates(event);
    isDrawing = true;
  });
  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);

  function draw(event) {
    if (!isDrawing) {
      return;
    }

    context.beginPath();
    // context.moveTo(0, 0); :) beautiful
    context.moveTo(prevX, prevY);
    context.lineTo(event.offsetX, event.offsetY);
    context.stroke();
    updateStoredCoordinates(event);
    // settings.rainbownizeBrush(context);
  }

  function updateStoredCoordinates(event) {
    [prevX, prevY] = [ event.offsetX, event.offsetY];
  }
})();



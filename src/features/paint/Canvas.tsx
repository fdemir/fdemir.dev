import { createSignal, onMount } from "solid-js";

const colorPalette = ["#711DB0", "#C21292", "#EF4040", "#FFA732", "#7071E8"];

export default function Canvas() {
  let canvas;
  let ctx;

  const [drawing, setDrawing] = createSignal(false);
  const [drawingPath, setDrawingPath] = createSignal([]);
  const [currentStyle, setCurrentStyle] = createSignal({
    color: "red",
    width: 8,
  });

  const handleKeyDown = (event) => {
    const key = event.key;
    if (key >= 1 && key <= 9) {
      const colorIndex = parseInt(key) - 1;
      setCurrentStyle({ color: colorPalette[colorIndex], width: 8 });
    }
  };

  onMount(() => {
    document.addEventListener("keydown", handleKeyDown);
    initializeCanvas();
  });

  const startDrawing = (event) => {
    setDrawing(true);
    ctx.beginPath();
    ctx.moveTo(
      event.clientX - canvas.offsetLeft,
      event.clientY - canvas.offsetTop
    );
  };

  const draw = (event) => {
    if (drawing()) {
      ctx.lineTo(
        event.clientX - canvas.offsetLeft,
        event.clientY - canvas.offsetTop
      );
      ctx.stroke();
      storePath(
        event.clientX - canvas.offsetLeft,
        event.clientY - canvas.offsetTop
      );
    }
  };

  const storePath = (x, y) => {
    setDrawingPath((prevPath) => [
      ...prevPath,
      { x, y, style: { ...currentStyle() } },
    ]);
  };

  const stopDrawing = () => {
    setDrawing(false);
    ctx.closePath();
  };

  const redraw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawingPath().forEach((path) => {
      ctx.beginPath();
      ctx.moveTo(path.x, path.y);
      ctx.strokeStyle = path.style.color;
      ctx.lineWidth = path.style.width;
      ctx.lineTo(path.x, path.y);
      ctx.stroke();
      ctx.closePath();
    });
  };

  const clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setDrawingPath([]);
  };

  const applyGravity = () => {
    setDrawingPath((prevPath) =>
      prevPath.map((path) => {
        return { ...path, y: path.y + 0.5 };
      })
    );
    redraw();
    requestAnimationFrame(applyGravity);
  };

  const initializeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.zIndex = 0;
    canvas.style.position = "fixed";
    canvas.style.left = 0;
    canvas.style.top = 0;

    ctx = canvas.getContext("2d");
    ctx.lineWidth = 12;
    ctx.lineCap = "round";
    ctx.strokeStyle = currentStyle().color;

    requestAnimationFrame(applyGravity);
  };

  return (
    <div>
      <canvas
        ref={(el) => (canvas = el)}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
        onContextMenu={(e) => {
          e.preventDefault();
          clearCanvas();
        }}
      />
    </div>
  );
}

import { FRAGMENT_SHADER, VERTEX_SHADER } from "./shaders";

function compileShader(gl: WebGLRenderingContext, type: number, src: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export function runNoiseTransition(
  originX: number,
  originY: number,
  color: [number, number, number],
  onMidway: () => void,
  duration = 1500,
) {
  const canvas = document.createElement("canvas");
  canvas.style.cssText =
    "position:fixed;inset:0;width:100%;height:100%;z-index:9999;pointer-events:none;";
  document.body.appendChild(canvas);

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = window.innerWidth;
  const h = window.innerHeight;
  canvas.width = Math.floor(w * dpr);
  canvas.height = Math.floor(h * dpr);

  const gl = canvas.getContext("webgl", { premultipliedAlpha: false, antialias: true });
  if (!gl) {
    onMidway();
    canvas.remove();
    return;
  }

  const vs = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
  const fs = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
  if (!vs || !fs) {
    onMidway();
    canvas.remove();
    return;
  }

  const program = gl.createProgram();
  if (!program) {
    onMidway();
    canvas.remove();
    return;
  }
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(program));
    onMidway();
    canvas.remove();
    return;
  }
  gl.useProgram(program);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
    gl.STATIC_DRAW,
  );
  const posLoc = gl.getAttribLocation(program, "a_pos");
  gl.enableVertexAttribArray(posLoc);
  gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

  const uTime = gl.getUniformLocation(program, "u_time");
  const uOuter = gl.getUniformLocation(program, "u_outer_progress");
  const uInner = gl.getUniformLocation(program, "u_inner_progress");
  const uAspect = gl.getUniformLocation(program, "u_aspect");
  const uOrigin = gl.getUniformLocation(program, "u_origin");
  const uColor = gl.getUniformLocation(program, "u_color");

  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

  gl.uniform1f(uAspect, w / h);
  gl.uniform2f(uOrigin, originX / w, 1.0 - originY / h);
  gl.uniform3f(uColor, color[0], color[1], color[2]);

  const start = performance.now();
  let midwayDone = false;

  const tick = (now: number) => {
    const t = Math.min((now - start) / duration, 1);

    // Outer (morphy ring) leads. Slow start via power-in so the ink-circle phase reads.
    const outerEased = Math.pow(t, 1.35);
    // Inner (clean fill) is held back: stays at 0 for the first 35% so the morph dominates,
    // then powers in to catch the outer at t=1.
    const innerDelay = 0.35;
    const innerT = Math.max(0, (t - innerDelay) / (1 - innerDelay));
    const innerEased = Math.pow(innerT, 1.6);

    gl.uniform1f(uTime, (now - start) * 0.001);
    gl.uniform1f(uOuter, outerEased * 1.15);
    gl.uniform1f(uInner, innerEased * 1.15);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    if (!midwayDone && outerEased > 0.85) {
      midwayDone = true;
      onMidway();
    }

    if (t < 1) {
      requestAnimationFrame(tick);
    } else {
      if (!midwayDone) onMidway();
      requestAnimationFrame(() => {
        canvas.remove();
        gl.deleteProgram(program);
        gl.deleteBuffer(buffer);
      });
    }
  };
  requestAnimationFrame(tick);
}

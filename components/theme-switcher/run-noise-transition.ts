import { FRAGMENT_SHADER, VERTEX_SHADER } from "./shaders";

interface GLContext {
  canvas: HTMLCanvasElement;
  gl: WebGLRenderingContext;
  program: WebGLProgram;
  buffer: WebGLBuffer;
  uTime: WebGLUniformLocation | null;
  uOuter: WebGLUniformLocation | null;
  uInner: WebGLUniformLocation | null;
  uAspect: WebGLUniformLocation | null;
  uOrigin: WebGLUniformLocation | null;
  uColor: WebGLUniformLocation | null;
  uInvertAlpha: WebGLUniformLocation | null;
}

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

function setupGL(canvas: HTMLCanvasElement): GLContext | null {
  const gl = canvas.getContext("webgl", {
    premultipliedAlpha: false,
    antialias: true,
  });
  if (!gl) return null;

  const vs = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
  const fs = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
  if (!vs || !fs) return null;

  const program = gl.createProgram();
  if (!program) return null;
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(program));
    return null;
  }
  gl.useProgram(program);

  const buffer = gl.createBuffer();
  if (!buffer) return null;
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
    gl.STATIC_DRAW,
  );
  const posLoc = gl.getAttribLocation(program, "a_pos");
  gl.enableVertexAttribArray(posLoc);
  gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

  return {
    canvas,
    gl,
    program,
    buffer,
    uTime: gl.getUniformLocation(program, "u_time"),
    uOuter: gl.getUniformLocation(program, "u_outer_progress"),
    uInner: gl.getUniformLocation(program, "u_inner_progress"),
    uAspect: gl.getUniformLocation(program, "u_aspect"),
    uOrigin: gl.getUniformLocation(program, "u_origin"),
    uColor: gl.getUniformLocation(program, "u_color"),
    uInvertAlpha: gl.getUniformLocation(program, "u_invert_alpha"),
  };
}

function disposeGL(ctx: GLContext) {
  ctx.gl.deleteProgram(ctx.program);
  ctx.gl.deleteBuffer(ctx.buffer);
}

function easedProgress(t: number) {
  const outer = Math.pow(t, 1.35) * 1.15;
  const innerDelay = 0.35;
  const innerT = Math.max(0, (t - innerDelay) / (1 - innerDelay));
  const inner = Math.pow(innerT, 1.6) * 1.15;
  return { outer, inner };
}

export function runNoiseTransition(
  originX: number,
  originY: number,
  swapTheme: () => void,
  duration = 1600,
) {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReducedMotion) {
    swapTheme();
    return;
  }

  const isDark = document.documentElement.classList.contains("dark");
  const oldColor: [number, number, number] = isDark ? [0, 0, 0] : [1, 1, 1];

  const canvas = document.createElement("canvas");
  canvas.style.cssText =
    "position:fixed;inset:0;width:100%;height:100%;z-index:9999;pointer-events:none;";
  document.body.appendChild(canvas);

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = window.innerWidth;
  const h = window.innerHeight;
  canvas.width = Math.floor(w * dpr);
  canvas.height = Math.floor(h * dpr);

  const ctx = setupGL(canvas);
  if (!ctx) {
    canvas.remove();
    swapTheme();
    return;
  }

  const { gl, uAspect, uOrigin, uColor, uInvertAlpha } = ctx;
  gl.uniform1f(uAspect, w / h);
  gl.uniform2f(uOrigin, originX / w, 1.0 - originY / h);
  gl.uniform3f(uColor, oldColor[0], oldColor[1], oldColor[2]);
  gl.uniform1f(uInvertAlpha, 1.0);

  // Paint a fully-opaque first frame before any paint happens, so when we swap
  // the theme on the next rAF the overlay is already covering the page.
  gl.uniform1f(ctx.uTime, 0);
  gl.uniform1f(ctx.uOuter, 0);
  gl.uniform1f(ctx.uInner, 0);
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.TRIANGLES, 0, 6);

  let start = 0;
  let swapped = false;

  const tick = (now: number) => {
    if (!swapped) {
      swapped = true;
      start = now;
      swapTheme();
    }
    const t = Math.min((now - start) / duration, 1);
    const { outer, inner } = easedProgress(t);

    gl.uniform1f(ctx.uTime, (now - start) * 0.001);
    gl.uniform1f(ctx.uOuter, outer);
    gl.uniform1f(ctx.uInner, inner);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    if (t < 1) {
      requestAnimationFrame(tick);
    } else {
      canvas.remove();
      disposeGL(ctx);
    }
  };
  requestAnimationFrame(tick);
}

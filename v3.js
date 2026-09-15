(()=>{
const cv=document.querySelector('#cv'); if(!cv) return;
const hud=document.createElement('div'); hud.className='v3-telemetry'; hud.innerHTML='<span>V3 CINEMATIC ENGINE</span><b id="fps">60 FPS</b><b id="warp">WARP 1.00×</b><button id="cinema">CINEMA</button>'; document.querySelector('.stage').appendChild(hud);
let frames=0,stamp=performance.now(),fps=60;
function tick(t){frames++;if(t-stamp>500){fps=Math.round(frames*1000/(t-stamp));frames=0;stamp=t;document.querySelector('#fps').textContent=fps+' FPS'}const va=+(document.querySelector('#va')?.value||0),g=1/Math.sqrt(1-Math.min(.999999,Math.abs(va/100))**2);document.querySelector('#warp').textContent='γ '+g.toFixed(3);requestAnimationFrame(tick)}requestAnimationFrame(tick);
document.querySelector('#cinema').onclick=()=>document.body.classList.toggle('cinema');
// Mouse parallax gives the 2D canvas a lightweight pseudo-3D presentation layer without external libraries.
let px=0,py=0;cv.addEventListener('pointermove',e=>{const r=cv.getBoundingClientRect();px=(e.clientX-r.left)/r.width-.5;py=(e.clientY-r.top)/r.height-.5;cv.style.transform=`perspective(1200px) rotateY(${px*2.2}deg) rotateX(${-py*1.5}deg) scale(1.006)`});cv.addEventListener('pointerleave',()=>cv.style.transform='');
// Keyboard presentation controls.
window.addEventListener('keydown',e=>{if(e.key==='f'||e.key==='F')document.querySelector('#fullscreen')?.click();if(e.key===' ') {e.preventDefault();document.querySelector('#pause')?.click()}if(e.key==='0')document.querySelector('#reset')?.click();});
// Relativistic aberration / headlight-effect overlay. This is intentionally qualitative.
const overlay=document.createElement('div');overlay.className='aberration';document.querySelector('.stage').appendChild(overlay);
const sync=()=>{const b=Math.abs(+(document.querySelector('#va')?.value||0))/100;overlay.style.opacity=(b*b*.72).toFixed(3);overlay.style.setProperty('--focus',(45-30*b)+'%')};document.querySelector('#va')?.addEventListener('input',sync);sync();
})();
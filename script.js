const mob = () => window.innerWidth <= 768 || 'ontouchstart' in window;

/* LOADER */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('gone');
    initReveal();
  }, 1450);
});

/* CANVAS PARTICLES */
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let pts = [], mouse = {x:-9999,y:-9999};

function resize(){ canvas.width = innerWidth; canvas.height = innerHeight; }

class Pt {
  constructor(){
    this.x = Math.random()*canvas.width; this.y = Math.random()*canvas.height;
    this.vx=(Math.random()-.5)*.28; this.vy=(Math.random()-.5)*.28;
    this.sz=Math.random()*1.4+.3;
    this.a=Math.random()*.35+.05; this.ba=this.a;
    this.c=Math.random()>.65?'200,169,110':'123,110,232';
  }
  tick(){
    this.x+=this.vx; this.y+=this.vy;
    if(this.x<0||this.x>canvas.width)this.vx*=-1;
    if(this.y<0||this.y>canvas.height)this.vy*=-1;
    if(!mob()){
      const dx=this.x-mouse.x,dy=this.y-mouse.y,d=Math.hypot(dx,dy);
      if(d<110){this.x+=dx/d*.7;this.y+=dy/d*.7;this.a=Math.min(.75,this.ba*(110/d));}
      else this.a+=(this.ba-this.a)*.05;
    }
  }
  draw(){ ctx.beginPath();ctx.arc(this.x,this.y,this.sz,0,Math.PI*2);ctx.fillStyle=`rgba(${this.c},${this.a})`;ctx.fill(); }
}

function initPts(){ pts=Array.from({length:mob()?55:110},()=>new Pt()); }

function frame(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  const maxD=mob()?70:110;
  for(let i=0;i<pts.length;i++){
    pts[i].tick(); pts[i].draw();
    for(let j=i+1;j<pts.length;j++){
      const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.hypot(dx,dy);
      if(d<maxD){ ctx.beginPath();ctx.strokeStyle=`rgba(200,169,110,${.055*(1-d/maxD)})`;ctx.lineWidth=.5;ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.stroke(); }
    }
  }
  requestAnimationFrame(frame);
}
resize(); initPts(); frame();
window.addEventListener('resize',()=>{resize();initPts();});

/* CUSTOM CURSOR */
if(!mob()){
  const cur=document.getElementById('cursor'),ring=document.getElementById('cursor-ring');
  let cx=0,cy=0,rx=0,ry=0;
  document.addEventListener('mousemove',e=>{mouse.x=e.clientX;mouse.y=e.clientY;cx=e.clientX;cy=e.clientY;});
  (function ac(){ rx+=(cx-rx)*.1;ry+=(cy-ry)*.1;
    cur.style.left=cx+'px';cur.style.top=cy+'px';ring.style.left=rx+'px';ring.style.top=ry+'px';
    requestAnimationFrame(ac); })();
  document.querySelectorAll('a,.s-ind').forEach(el=>{
    el.addEventListener('mouseenter',()=>document.body.classList.add('ch'));
    el.addEventListener('mouseleave',()=>document.body.classList.remove('ch'));
  });
}

/* SCROLL PROGRESS */
const prog=document.getElementById('prog');
window.addEventListener('scroll',()=>{
  const tot=document.documentElement.scrollHeight-innerHeight;
  prog.style.width=(scrollY/tot*100)+'%';
  updInd(); updMobNav();
},{ passive:true });

/* LIVE TIME */
function updTime(){
  const t=new Date().toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit',hour12:false});
  const a=document.getElementById('dt-time'),b=document.getElementById('mob-time');
  if(a)a.textContent=t; if(b)b.textContent=t;
}
updTime(); setInterval(updTime,30000);

/* SCROLL REVEAL */
function initReveal(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const el=e.target, d=parseInt(el.dataset.d||0)*75;
        setTimeout(()=>el.classList.add('vis'),d);
        obs.unobserve(el);
      }
    });
  },{threshold:.08});
  document.querySelectorAll('.card,.sh,.pill-row').forEach(el=>obs.observe(el));
}

/* DESKTOP 3D TILT */
if(!mob()){
  document.querySelectorAll('.card').forEach(c=>{
    c.addEventListener('mousemove',e=>{
      const r=c.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
      c.style.transform=`perspective(700px) rotateY(${x*5}deg) rotateX(${-y*3.5}deg) translateY(-2px) scale(1.008)`;
    });
    c.addEventListener('mouseleave',()=>c.style.transform='');
  });
}

/* MOBILE RIPPLE + HAPTIC */
if(mob()){
  document.querySelectorAll('.card').forEach(c=>{
    c.addEventListener('touchstart',e=>{
      const t=e.touches[0],r=c.getBoundingClientRect();
      const rpl=document.createElement('div'); rpl.className='ripple';
      rpl.style.cssText=`left:${t.clientX-r.left}px;top:${t.clientY-r.top}px;width:${r.width}px;height:${r.width}px;margin-left:-${r.width/2}px;margin-top:-${r.width/2}px;`;
      c.appendChild(rpl); setTimeout(()=>rpl.remove(),620);
      if(navigator.vibrate)navigator.vibrate(9);
    },{passive:true});
  });
}

/* DESKTOP MAGNETIC PILLS */
if(!mob()){
  document.querySelectorAll('.pill').forEach(p=>{
    p.addEventListener('mousemove',e=>{
      const r=p.getBoundingClientRect();
      const x=e.clientX-r.left-r.width/2, y=e.clientY-r.top-r.height/2;
      p.style.transform=`translate(${x*.22}px,${y*.38}px) translateY(-2px)`;
    });
    p.addEventListener('mouseleave',()=>p.style.transform='');
  });
}

/* SECTION INDICATORS */
const SECS=['top','social','projects','writing'];
function updInd(){
  let cur='top';
  SECS.forEach(id=>{ const el=document.getElementById(id); if(el&&scrollY>=el.offsetTop-180)cur=id; });
  document.querySelectorAll('.s-ind').forEach(d=>d.classList.toggle('act',d.dataset.sec===cur));
}
document.querySelectorAll('.s-ind').forEach(d=>{
  d.addEventListener('click',()=>{ const t=document.getElementById(d.dataset.sec); if(t)t.scrollIntoView({behavior:'smooth'}); });
});

/* MOBILE NAV HIGHLIGHT */
function updMobNav(){
  let cur='#top';
  SECS.forEach(id=>{ const el=document.getElementById(id); if(el&&scrollY>=el.offsetTop-180)cur='#'+id; });
  document.querySelectorAll('.nb').forEach(b=>b.classList.toggle('act',b.getAttribute('href')===cur));
}

/* SMOOTH ANCHOR SCROLL */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href').slice(1), t=document.getElementById(id);
    if(t){ e.preventDefault(); window.scrollTo({top:t.offsetTop-(mob()?76:0),behavior:'smooth'}); }
  });
});

// Navegação responsiva
function initNav(){const t=document.querySelector(".nav__toggle");const l=document.querySelector(".nav__list");if(t&&l){t.addEventListener("click",()=>{const open=l.classList.toggle("is-open");t.setAttribute("aria-expanded",open?"true":"false")});document.querySelectorAll('.nav__list a').forEach(a=>a.addEventListener('click',()=>l.classList.remove('is-open')))}}
// Animação de entrada nas seções
function initReveal(){const els=[...document.querySelectorAll('[data-reveal]')];if(els.length===0)return;if(!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('is-visible'));return}const io=new IntersectionObserver((entries)=>{entries.forEach(en=>{if(en.isIntersecting){en.target.classList.add('is-visible');io.unobserve(en.target)}})},{threshold:.15,rootMargin:'0px 0px -40px 0px'});els.forEach(e=>io.observe(e))}
// Rolagem suave para âncoras internas
function initSmoothAnchors(){document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{const id=a.getAttribute('href');if(!id||id==='#')return;const target=document.querySelector(id);if(!target)return;e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'})})})}
// Microanimação premium: brilho nos botões dourados conforme o mouse
function initButtonSheen(){document.querySelectorAll('.btn--sheen').forEach(btn=>{btn.addEventListener('pointermove',e=>{const rect=btn.getBoundingClientRect();const x=((e.clientX-rect.left)-rect.width/2)/8;const y=((e.clientY-rect.top)-rect.height/2)/8;btn.style.setProperty('--sx',`${x}px`);btn.style.setProperty('--sy',`${y}px`)})})}
// Inicialização
function init(){initNav();initReveal();initSmoothAnchors();initButtonSheen()}
document.addEventListener("DOMContentLoaded",init)

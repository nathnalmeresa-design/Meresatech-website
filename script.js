const menu=document.querySelector('.menu');
const nav=document.querySelector('nav');
menu.onclick=()=>{nav.style.display=nav.style.display==='flex'?'none':'flex'};
document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>{if(innerWidth<901)nav.style.display='none'});
const modal=document.querySelector('#modal'),modalImg=document.querySelector('#modalImg'),modalTitle=document.querySelector('#modalTitle');
document.querySelectorAll('.gallery img').forEach(img=>img.onclick=()=>{modalImg.src=img.src;modalImg.alt=img.alt;modalTitle.textContent=img.dataset.title||img.alt;modal.classList.add('open');modal.setAttribute('aria-hidden','false')});
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');modalImg.src=''}
document.querySelector('.modal-close').onclick=closeModal;modal.onclick=e=>{if(e.target===modal)closeModal()};document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
document.querySelector('#contactForm').onsubmit=e=>{e.preventDefault();document.querySelector('#formStatus').textContent='Thank you. Your message form is ready to connect to your email/backend.';e.target.reset()};
document.querySelector('#year').textContent=new Date().getFullYear();

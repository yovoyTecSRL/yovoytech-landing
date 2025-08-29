function topbar(){
  return `
  <div class="navbar">
    <div class="brand">
      <span class="dot"></span><span>YovoyTech</span>
    </div>
    <nav class="menu">
      <a href="/">Inicio</a>
      <a href="/blog/">Blog</a>
      <a href="/portafolio/">Portafolio</a>
      <a href="/contacto/">Contacto</a>
      <a class="btn primary" href="https://odoo.yovoytech.com/web/login" target="_blank">Entrar a Odoo</a>
    </nav>
  </div>`;
}
document.addEventListener('DOMContentLoaded',()=>{
  const hdr = document.querySelector('body');
  if(hdr && !document.querySelector('.navbar')){
    const div = document.createElement('div'); div.innerHTML = topbar();
    hdr.prepend(div.firstElementChild);
  }
});
const pages = ['home','products','detail','cart','checkout','blog','about','b2b','account','track'];
const navMap = { home:'nav-home', products:'nav-products', detail:'nav-products', cart:null, checkout:null, blog:'nav-blog', about:'nav-about', b2b:null, account:null, track:null };

function navigate(page) {
  pages.forEach(p => {
    const el = document.getElementById('page-'+p);
    if (el) el.classList.remove('active');
  });
  const target = document.getElementById('page-'+page);
  if (target) {
    target.classList.add('active');
    window.scrollTo({top:0, behavior:'smooth'});
  }
  Object.values(navMap).forEach(id => {
    if (id) { const el = document.getElementById(id); if(el) el.classList.remove('active'); }
  });
  const activeNav = navMap[page];
  if (activeNav) { const el = document.getElementById(activeNav); if(el) el.classList.add('active'); }
}

document.querySelectorAll('.variant-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const group = this.closest('.variant-opts');
    group.querySelectorAll('.variant-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
  });
});
document.querySelectorAll('.ship-opt').forEach(opt => {
  opt.addEventListener('click', function() {
    const group = this.closest('.shipping-opts');
    group.querySelectorAll('.ship-opt').forEach(o => o.classList.remove('active'));
    this.classList.add('active');
    const radio = this.querySelector('input[type="radio"]');
    if (radio) radio.checked = true;
  });
});
document.querySelectorAll('.qty-ctrl button').forEach(btn => {
  btn.addEventListener('click', function() {
    const ctrl = this.closest('.qty-ctrl');
    const span = ctrl.querySelector('span');
    let val = parseInt(span.textContent);
    if (this.textContent === '+') val = Math.min(val + 1, 99);
    else val = Math.max(val - 1, 1);
    span.textContent = val;
  });
});
document.querySelectorAll('.account-menu-item').forEach(item => {
  item.addEventListener('click', function() {
    document.querySelectorAll('.account-menu-item').forEach(i => i.classList.remove('active'));
    this.classList.add('active');
  });
});
document.querySelectorAll('.thumb').forEach(t => {
  t.addEventListener('click', function() {
    document.querySelectorAll('.thumb').forEach(th => th.classList.remove('active'));
    this.classList.add('active');
  });
});
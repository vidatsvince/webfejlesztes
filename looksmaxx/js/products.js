
const products = {
  ashwa: {title:'Ashwagandha (60 kapszula)', price:'4990 Ft', desc:'Adaptogén, stressz és regeneráció támogatására.'},
  jawgum: {title:'Jawline Chiseler (gum)', price:'2990 Ft', desc:'Speciális gumis eszköz állkapocs-izom edzéshez.'},
  guasha: {title:'Gua Sha kő', price:'2490 Ft', desc:'Arc- és nyakmasszázshoz, feszesítő hatással.'}
};

document.querySelectorAll('.info-btn').forEach(btn=>{
  btn.addEventListener('click', (e)=>{
    const p = e.target.closest('.product');
    const id = p.getAttribute('data-id');
    const info = products[id];
    document.getElementById('pTitle').innerText = info.title;
    document.getElementById('pDesc').innerText = info.desc;
    document.getElementById('pPrice').innerText = info.price;
    document.getElementById('productModal').classList.remove('hidden');
  });
});
document.getElementById('closeModal').addEventListener('click', ()=>{
  document.getElementById('productModal').classList.add('hidden');
});

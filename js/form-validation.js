
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('c_name').value.trim();
  const email = document.getElementById('c_email').value.trim();
  const tel = document.getElementById('c_tel').value.trim();
  const age = document.getElementById('c_age').value;
  const bday = document.getElementById('c_bday').value;
  const interest = document.getElementById('c_interest').value;
  const msg = document.getElementById('c_msg').value.trim();
  const terms = document.getElementById('c_terms').checked;
  const errors = [];
  if(name.length < 2) errors.push('A név megadása kötelező (min. 2 karakter).');
  if(!email.includes('@')) errors.push('Érvényes email szükséges.');
  if(tel && !/^\+?\d{6,15}$/.test(tel)) errors.push('Telefonszám formátuma hibás.');
  if(!terms) errors.push('Kérem fogadja el az adatkezelést.');
  const errDiv = document.getElementById('c_errors');
  if(errors.length){ errDiv.innerText = errors.join('\n'); return; }
  errDiv.innerText='';
  alert('Köszönjük, üzeneted elküldve!');
  console.log('Message sent successfully:', { name, email, tel, age, bday, interest, msg });
  this.reset();
});

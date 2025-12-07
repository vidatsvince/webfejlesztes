const rankRanges = [
  {min:30, max:50, label:'sub 3'},
  {min:50, max:70, label:'sub 5'},
  {min:70, max:90, label:'ltn'},
  {min:90, max:120, label:'mtn'},
  {min:120, max:150, label:'htn'},
  {min:150, max:175, label:'chadlite'},
  {min:175, max:200, label:'chad'},
  {min:200, max:1000, label:'true adam'}
];

function getRank(bench) {
  for(const r of rankRanges) {
    if(bench >= r.min && bench < r.max) return r.label;
  }
  return 'ismeretlen';
}

document.getElementById('calcForm').addEventListener('submit', function(e){
  e.preventDefault();
  const bodyW = parseFloat(document.getElementById('weight').value) || 0;
  const bench = parseFloat(document.getElementById('bench').value) || 0;
  const rank = getRank(bench);
  const out = document.getElementById('calcResult');
  out.classList.remove('hidden');
  out.innerHTML = `<h3>Eredmény</h3>
    <p>Testsúly: <strong>${bodyW} kg</strong></p>
    <p>Fekvenyomás: <strong>${bench} kg</strong></p>
    <p>Rang: <strong>${rank}</strong></p>`;
});

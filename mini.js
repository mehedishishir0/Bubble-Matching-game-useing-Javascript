let panlbtm = document.querySelector("#panel-botom");
let  rendm = 0;
var score = 0;

function increaescore(){
  score += 3;
  document.querySelector('#Score').textContent = score;
}

function newhit() {
  rendm = Math.floor(Math.random()*50)
  let hit = document.querySelector('#newhit');
  hit.textContent = rendm;
}
function mackbuble() {
  var clutter = "";
  for (let i = 1; i < 160; i++) {
    let rndm = Math.floor(Math.random()*100);
    clutter += `<div class="buble">${rndm}</div> `;
    panlbtm.innerHTML = clutter;
  }
} 

panlbtm.addEventListener('click',(dats)=>{
let clicknum = Number(dats.target.textContent)
// console.log(clicknum)
if(clicknum === rendm){
  increaescore();
  mackbuble();
  newhit();  
}else{
  mackbuble();
  newhit();
}
})

let timercount = document.querySelector("#timercount");
var timer = 30;
function runtimer() {
  let settime = setInterval(() => {
    if (timer >= 0) {
      timercount.textContent = timer--;
    } else {
      clearInterval(settime);
      timercount.style.color = 'red'
      panlbtm.innerHTML = `Game Over your score ${score}`;
    }
  }, 1000);
}


runtimer();
mackbuble();
newhit()

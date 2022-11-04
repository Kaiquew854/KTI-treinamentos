let qtdSld;
let curSld=0;
qtdSld=document.querySelectorAll('.slider--item').length;
document.querySelector('.main--slider').style.width=`calc(100vw * ${qtdSld})`;

//voltar
document.querySelector('.btn1').addEventListener('click', ()=>{
    curSld--;
    if( curSld < 0){
        curSld = qtdSld - 2;
    }
    updateMagin();
})
//avancar
document.querySelector('.btn2').addEventListener('click', ()=>{
    curSld++;
    if (curSld > qtdSld-1){
        curSld = 0;
    }
    updateMagin();
})

function autoClick(){
    curSld++;
    if (curSld > qtdSld-1){
        curSld = 0;
    }
    updateMagin();
}

function updateMagin(){
    let slideWidth = document.querySelector('.slider--item').clientWidth; //pega o width para tirar da visao
    let newMargin = (curSld * slideWidth);
    document.querySelector('.main--slider').style.marginLeft= `-${newMargin}px`;
}

setInterval(autoClick,6000);
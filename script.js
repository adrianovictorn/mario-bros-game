const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const pontuacao = document.getElementById('pontos')
let pontos = 0;

const jump = () =>{
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    },500)
}


const loop = setInterval( () => {
    const piperPosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    

  
    if(piperPosition <= 120 && piperPosition > 0 && marioPosition < 80){
        
        pipe.style.animation = 'none';
        pipe.style.left = `${piperPosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${piperPosition}px`

        mario.src = 'mario-jump-images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)
    } else{
        console.log(pontos);
        pontuacao.innerText = `Distância: ${pontos}`
        pontos += 1;
    }
}, 10)
document.addEventListener('keydown', jump);


function reiniciarJogo(){
    
}
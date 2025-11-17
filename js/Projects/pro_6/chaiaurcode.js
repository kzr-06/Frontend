// generate a random color
const randomColor = function(){
    const hex = '0123456789abcdef'
    let color = '#'
    for(let i=0;i<6;i++){
        color +=hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
let intervLId
let lastColor

const startChangingColor = function(){
  function changebg(){
        document.body.style.backgroundColor = randomColor()
        console.log('hiii');   
    }
    intervLId=setInterval(changebg,1000)
}
const stopChangingColor = function(){
    clearInterval(intervLId);
    intervLId = null;

}



document.querySelector('#start').addEventListener('click',startChangingColor)


document.querySelector('#stop').addEventListener('click',stopChangingColor)
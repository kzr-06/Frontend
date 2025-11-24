const textarea = document.querySelector("textarea")
const letter = document.querySelector(".show_letter")
const words = document.querySelector(".show_word")
const btn = document.querySelector("button")

textarea.addEventListener('input',function(e){
     let countLetter = letter.textContent = this.value.replaceAll(" ","").length;

    let countWord = this.value.split(" ").length;
    words.textContent = countWord; 
    
    if (countWord < 5) {
    textarea.className = "textarea orange";
    } else if (countWord <=9) {
    textarea.className = "textarea red";
    } else if(countWord === 10){
        alert("your limit exceeds")
        textarea.value=""
    letter.textContent=0
    words.textContent=0

    }
})
btn.addEventListener('click',function(){
    textarea.value=""
    letter.textContent=0
    words.textContent=0
})
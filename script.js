console.log("Veikia");
console.log("Veikia");
console.log("Veikia");

const numberSpan = document.querySelector(".span");
const buttons = document.querySelector(".buttons-conteiner")



buttons.addEventListener("click", (ev) => {
 console.log("ev:", ev)
    
    if(ev.target.classList.contains("subtract")){
    numberSpan.innerHTML--    
}
    if(ev.target.classList.contains("add")){
    numberSpan.innerHTML++
    }
    if(ev.target.classList.contains("reset")){
    numberSpan.innerHTML = 0
    }
   setColor()
})



const setColor = ()=>{
    if(numberSpan.innerHTML>0){
        numberSpan.style.color="yellow"
}
else if(numberSpan.innerHTML<0){
    numberSpan.style.color="red"
}
else{
    numberSpan.style.color="white"

}
}




// const subtract = document.querySelector(".subtract");
// const reset = document.querySelector(".reset");
// const add = document.querySelector(".add");


// subtract.addEventListener("click", () => {
//   numberSpan.innerHTML--;
// });

// add.addEventListener("click", () => {
//   numberSpan.innerHTML++;
// });

// reset.addEventListener("click", () => {
//   numberSpan.innerHTML = 0;
// });

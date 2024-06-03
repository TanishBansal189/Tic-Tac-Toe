let boxes=document.querySelectorAll(".boxes");
let winposition=[
    ["0","1","2"],
    ["3","4","5"],
    ["6","7","8"],
    ["0","3","6"],
    ["1","4","7"],
    ["2","5","8"],
    ["0","4","8"],
    ["2","4","6"]
]
let turn=true;
let win=document.querySelector("#win");
let windiv=document.querySelector(".winner");
let container=document.querySelector(".container");
let resetbtn=document.querySelector("#Reset");
let newbtn=document.querySelector("#New");
let count=0;
let ting=new Audio("ting.mp3")
let img=document.getElementsByTagName("img")
const newgame=()=>{
    count=0
    turn=true;
    enable();
    windiv.classList.add("hide");
    container.classList.remove("hide");
}
const resetgame=()=>{
    count=0
    turn=true;
    enable();
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turn){
            box.innerText='0'
            turn=false
            ting.play(); 
        }
        else{
            box.innerText='X'
            turn=true
            ting.play();
        }
        box.disabled=true
        iswinner()
        count++
        if(count==9){
            nowinner()
        }
    })
})
const disable=()=>{
    for(let box of boxes){
        box.disabled=true
    }
}
const enable=()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerText="";
    }
}
const  ShowWinner=(winner)=>{
    console.log(winner)
    win.innerText=`Congratulations The winner is ${winner}`;
    windiv.classList.remove("hide")
    disable();
    container.classList.add("hide")
}
const nowinner=()=>{
    win.innerText=`The game is draw`
    windiv.classList.remove("hide")
    disable();
    container.classList.add("hide")
}
const iswinner=()=>{
   for(position of winposition){
    let position1=boxes[position[0]].innerText
    let position2=boxes[position[1]].innerText
    let position3=boxes[position[2]].innerText
   if (position1!="" && position2!="" && position3!=""){
    if(position1==position2 && position3==position2){
     ShowWinner(position1)
    }
}
}
}
newbtn.addEventListener("click",newgame);
resetbtn.addEventListener("click",resetgame);

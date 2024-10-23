let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newGameBtn =document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO =true; //player X player O

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame = () => {
    turnO  = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
})

const disableBoxes = () =>{
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
}

const showWinner = (pos1val) => {
        msg.innerText = (`Congrulations, Winner Winner! ${pos1val}`);
        msgContainer.classList.remove("hide");
        disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winpatterns){
        
            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;

            if(pos1val !="" && pos2val!= "" && pos3val != "" ) {
                if (pos1val === pos2val && pos2val === pos3val && pos3val=== pos1val){ 
                 showWinner(pos1val);
                }
            }
    }
};



newGameBtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

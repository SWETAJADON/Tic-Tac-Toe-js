let body = document.querySelector("body")
let boxes = document.querySelectorAll(".box");
let newBtn = document.querySelector(".newbtn");
let resetBtn = document.querySelector(".resetbtn");
let msg = document.querySelector(".msg");
let msgContainer = document.querySelector(".message-container");
let gameContainer = document.querySelector(".container")



msgContainer.style.display = "none";
document.querySelector(".container").style.display = "flex";
let turnO = true; // O starts
let count = 0;
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true;
        count++;
        checkWinner();
    });
});




const checkWinner = () => {

    let winnerFound = false;    

    for (let pattern of winPatterns) {

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {

            if (pos1 === pos2 && pos2 === pos3) {

                winnerFound = true;

                msg.innerText = `🎉 Winner is ${pos1}`;
                msgContainer.style.display = "flex";
                container.style.display = "none";         

                boxes.forEach((box) => {
                    box.disabled = true;
                });

                return;
            }
        }
    }

    if (count === 9 && !winnerFound) {
        msg.innerText = `🤝Match is draw!`;
        msgContainer.style.display = "flex";
        container.style.display = "none";
        
    }
};


const resetGame = () => {

    turnO = true;
    count = 0;

    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });

    msgContainer.style.display = "none";
    document.querySelector(".container").style.display = "flex";
};

newBtn.addEventListener("click", resetGame);

resetBtn.addEventListener("click", resetGame);




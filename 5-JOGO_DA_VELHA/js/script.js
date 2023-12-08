const cellElements = document.querySelectorAll("[data-cell");
const board = document.querySelector("[data-board]")
const winningMessageText = document.querySelector("[data-winning-message-text")
const winningMessage = document.querySelector("[data-winning-message")
const RestartButton = document.querySelector("[data-restart-button]")

let isCircleTurn;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7], 
    [2, 5, 8],
    [0,4, 8],
    [2, 4, 6]
]

const startGame = () =>{
    isCircleTurn = false;

    for (const cell of cellElements){
        cell.classList.remove("circle");
        cell.classList.remove("x");
        cell.removeEventListener("click", handleClick);
        cell.addEventListener("click", handleClick, {once: true});
    }
    setBoardHoverClass()
    winningMessage.classList.remove("show-winning-message")
}

const endGame = (isDraw) =>{
    if(isDraw){
        winningMessageText.innerText = "Empate!"
    } else{
        winningMessageText.innerText = isCircleTurn 
        ? "O Venceu!"
        : "X Venceu!"
        }
        winningMessage.classList.add("show-winning-message")
    }



const checkForWin = (currentPlayer) => {
    return winningCombinations.some(combination => {
        return combination.every((index) => {
            return cellElements[index].classList.contains(currentPlayer)
        })
    })
}

const checkForDraw = () => {
    return [...cellElements].every(cell => {
        return cell.classList.contains("x") || cell.classList.contains("circle")
    })
}

const placeMark = (cell, classToAdd) =>{
    cell.classList.add(classToAdd)
}


const setBoardHoverClass = () => {
    board.classList.remove("circle");
    board.classList.remove("x");

    if(isCircleTurn){
        board.classList.add("circle");
    } else {
            board.classList.add("x")
    }
}

const swapTurns = () =>{
    isCircleTurn = !isCircleTurn;  
    setBoardHoverClass()  
    }

const handleClick = (e) =>{
    //Colocar a marca (x ou cículo)
    const cell = e.target;
    const classToAdd = isCircleTurn ? "circle" : "x";
    placeMark(cell, classToAdd)

    //Verificar a vitória
    const isWin = checkForWin(classToAdd);
    if(isWin){
        endGame(false)
    }   


    //Verificar por empate

    const isDraw = checkForDraw()

    if(isDraw){
        endGame(true)
    } else if(isDraw){
        endGame(true)
    }else{
         //Mudar símbolo
        swapTurns();
        }
    }
    

   
    




startGame();

RestartButton.addEventListener("click", startGame)



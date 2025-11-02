function getRandomColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';


}
const container = document.querySelector('#container')

for (let i = 1; i <=256; i++) { 
    const square = document.createElement('div')
    square.dataset.hoverCount = 0;
    square.classList.add('square')
    container.appendChild(square)
    square.addEventListener('mouseover',function() {
        let count = square.dataset.hoverCount;
        if (count == 0) {
        square.style.backgroundColor = getRandomColor();
    }
    if (count < 10) {
        count++;
        square.dataset.hoverCount = count;
        square.style.opacity = count * 0.1;
    }
})
}

const button = document.querySelector('button')

button.addEventListener('click',function() {
    let userAnswer = prompt("How many squares per side for grid?")
    while(userAnswer <= 0 || userAnswer >100){
        alert("Enter values between 1 and 100");
        userAnswer = prompt("How many squares per side for grid?")
    }


    container.innerHTML = '';
    const totalSquares = userAnswer ** 2;
    const squareSize = 500 / userAnswer;
    

    for(let i = 1; i <= totalSquares; i++){
        const square = document.createElement('div')
        square.dataset.hoverCount = 0;
        square.style.width = squareSize + 'px';  
        square.style.height = squareSize + 'px';
        square.classList.add('square')
        container.appendChild(square)
        square.addEventListener('mouseover',function() {
        let count = square.dataset.hoverCount;
        if (count == 0) {
        square.style.backgroundColor = getRandomColor();
        }
        if (count < 10) {
            count++;
            square.dataset.hoverCount = count;
            square.style.opacity = count * 0.1;
        }
    }
    )
}
}
)
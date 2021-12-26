document.addEventListener('DomContentLoaded', ()=>{

    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector("#result");
    const diaplayCurrentPlayer = document.querySelector('#current-player')

    let currentPlayer = 1


    for (let i = 0; i < squares.length; i++)
        (function(index){
        
        
        //we ad an event listener on each token of the grid 
        squares[i].onclick = function(){

        //if the last token of a column is taken you can go below

        if(squares[index + 7].classList.contains('taken')){
                if(currentPlayer === 1){
                    squares[index].classList.add('taken')
                    squares[index].classList.add('player-one')
                }
            }

        }
    })

})
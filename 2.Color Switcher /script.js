
const buttons = document.querySelectorAll('.box');
const body = document.querySelector('body');

let h1 = document.querySelector('h1');
let p = document.querySelector('p');

// console.log(buttons);

buttons.forEach(function(btn){
    btn.addEventListener("click",function(e){
        // console.log(e.target);

        if(e.target.id === 'color-red'){
            body.style.backgroundColor = "red";
        }else if (e.target.id === 'color-blue'){
            body.style.backgroundColor = "blue";
        }else if (e.target.id === 'color-green'){
            body.style.backgroundColor = "lightgreen";
        }else if (e.target.id === 'color-white'){
            body.style.backgroundColor = "white";
            h1.style.color = "black";
            p.style.color = "black";
        }
    });
});


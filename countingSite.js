let x = 0;
const num = document.getElementById("number"); 
const decrement = document.getElementById('decrement'); 
const res = document.getElementById("reset");
const increment = document.getElementById('increment');


decrement.addEventListener('click', () => {
    num.textContent = --x;
});

res.addEventListener("click",() => {
    x = 0;
    num.textContent = x;
});

increment.addEventListener('click', () => {
    num.textContent = x++;
});
    

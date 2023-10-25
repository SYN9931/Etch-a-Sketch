const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.fillRect (20,20,80,80);
ctx.rect (102,20,80,80);
ctx.rect (184,20,80,80);
ctx.rect (266,20,80,80);
// tx.fill();


var squareDiv = document.createElement('div');
squareDiv.className = 'squareDiv';
squareDiv.style.color ='red';
document.body.appendChild(squareDiv);
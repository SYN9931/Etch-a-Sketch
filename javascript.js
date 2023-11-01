const container = document.getElementById("container");

function makeRows (rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols',cols);
    for(c=0;c<(rows*cols); c++){
        let cell = document.createElement("div");
        //cell.innerText = (c+1);
        container.appendChild(cell).className = "grid-item";

    };
};

makeRows(10,10);
function background(){
    const clr1  ='rgb(65,224,208)';
    return clr1;

}

let divs = document.querySelectorAll('div');
for(let i=0; i<divs.length;i++){
    divs[i].onmouseover=function(e){
        e.target.style.backgroundColor=background();
    }

}

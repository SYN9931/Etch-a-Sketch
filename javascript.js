//create main container through DOM method
function createDiv(){
    const mainDiv = document.createElement("div");
    document.body.appendChild(mainDiv);
    mainDiv.setAttribute("id","mainDiv");
}
createDiv();

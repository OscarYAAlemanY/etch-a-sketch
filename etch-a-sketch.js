const containerdiv = document.createElement("div");
containerdiv.style.backgroundColor = "gray";
document.body.appendChild(containerdiv);
containerdiv.style.color = "white";
containerdiv.style.height = "100%";
containerdiv.style.width = "100%";
containerdiv.style.display = "flex";
containerdiv.style.alignContent = "flex-start"
containerdiv.style.boxSizing = "borderbox";
containerdiv.style.gap = "1px";


let cantidad = prompt("cuantos cuadros quieres crear?");

for(let i = 0;i<cantidad ;i++)
    {let innerdiv = document.createElement("div");
innerdiv.style.backgroundColor = "white";
containerdiv.appendChild(innerdiv);
innerdiv.style.color = "white";
innerdiv.style.height = "100%";
innerdiv.style.width = "100%";
innerdiv.style.margin = "2px";
innerdiv.style.margin = "solid black";}




;


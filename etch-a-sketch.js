
const containerdiv = document.querySelector(".container");
containerdiv.style.backgroundColor = "gray";
document.body.appendChild(containerdiv);
containerdiv.style.color = "white";
containerdiv.style.Height = "auto";
containerdiv.style.Width = "auto";
containerdiv.style.display = "flex";
containerdiv.style.flexDirection = "row"
containerdiv.style.gap = "1px";
containerdiv.style.justifycontent= "center";
containerdiv.style.flexWrap = "wrap";
containerdiv.style.padding ="10.5px";

containerdiv.style.boxSizing = "contentbox";

let cantidad = prompt("cuantos cuadros quieres crear?");

for(let i = 0;i<cantidad ;i++)
    {let innerdiv = document.createElement("div");
innerdiv.style.backgroundColor = "white";
containerdiv.appendChild(innerdiv);
innerdiv.style.color = "white";
innerdiv.style.height = "10px";
innerdiv.style.width = "10px";
innerdiv.style.border = "1px";
innerdiv.style.border = "solid black";}



;


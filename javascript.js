const cont = document.querySelector("#container");
for (i=0; i<=15; i++){
    let div = document.createElement("div");
    div.classList.add("insiders");
    cont.appendChild(div);
}

let items = document.querySelectorAll(".insiders");
items.forEach(x =>{
    x.addEventListener("mouseover", ()=>{
        x.style.backgroundColor = "grey";
    });
});

items.forEach (x =>{
    x.addEventListener("mouseout", ()=>{
        x.style.backgroundColor = "black";
    });
});

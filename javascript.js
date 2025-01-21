const cont = document.querySelector("#container");
const whatValue = document.querySelector("#slider");
const currentValue = document.querySelector("span");
currentValue.textContent = 10;

for (i=0; i<=255; i++){
    let div = document.createElement("div");
    div.classList.add("insiders");
    div.style.width = 720/16 + "px";
    div.style.height = 720/16 + "px";
    cont.appendChild(div);
}

let items = document.querySelectorAll(".insiders");
let itemsArray = Array.from(items);


items.forEach(x =>{
        x.addEventListener("mouseover", (e)=>{
            isHover = true;
            if(e.buttons === 1){
                x.style.backgroundColor = "black";
            }
        });
});


items.forEach(x =>{
    x.addEventListener("mousedown", (e)=>{
        isHover = true;
        if(e.buttons === 1){
            x.style.backgroundColor = "black";
        }
    });
});

whatValue.addEventListener ("change", (e)=>{
    currentValue.textContent = e.target.value;
    
    // for (i=0; i<=99; i++){
    //     let div = document.createElement("div");
    //     div.classList.add("insiders");
    //     div.style.width = 720/10 + "px";
    //     div.style.height = 720/10 + "px";
    //     cont.appendChild(div);
    // }
});



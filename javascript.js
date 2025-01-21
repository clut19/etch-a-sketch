const cont = document.querySelector("#container");
const whatValue = document.querySelector("#slider");
const currentValue = document.querySelector("span");
currentValue.textContent = 10;

function deleteChild (){
    cont.innerHTML="";
}

for (i=0; i<=16*16-1; i++){
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
        e.preventDefault();
        isHover = true;
        if(e.buttons === 1){
            x.style.backgroundColor = "black";
        }
    });
});

whatValue.addEventListener ("change", (e)=>{
    currentValue.textContent = e.target.value;
    deleteChild();
    for (i=0; i<=(e.target.value*e.target.value)-1; i++){
        let div = document.createElement("div");
        div.classList.add("insiders");
        div.style.width = 720/e.target.value + "px";
        div.style.height = 720/e.target.value + "px";
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
            e.preventDefault();
            isHover = true;
            if(e.buttons === 1){
                x.style.backgroundColor = "black";
            }
        });
    });
        
});



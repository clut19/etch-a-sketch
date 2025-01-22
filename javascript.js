const cont = document.querySelector("#container");
const whatValue = document.querySelector("#slider");
const currentValue = document.querySelector("span");
currentValue.textContent = 10;

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

function deleteChild (){
    cont.innerHTML="";
}


for (i=0; i<=99; i++){
    let div = document.createElement("div");
    div.classList.add("insiders");
    div.style.width = 640/10 + "px";
    div.style.height = 640/10 + "px";
    cont.appendChild(div);
}
function startPainting(){
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
}
startPainting();

whatValue.addEventListener ("change", (e)=>{
    currentValue.textContent = e.target.value;
    deleteChild();
    for (i=0; i<=(e.target.value*e.target.value)-1; i++){
        let div = document.createElement("div");
        div.classList.add("insiders");
        div.style.width = 640/e.target.value + "px";
        div.style.height = 640/e.target.value + "px";
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

const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", ()=>{
    deleteChild();
    for (i=0; i<=(parseInt(currentValue.textContent)*(parseInt(currentValue.textContent)))-1; i++){
        let div = document.createElement("div");
        div.classList.add("insiders");
        div.style.width = 640/parseInt(currentValue.textContent) + "px";
        div.style.height = 640/parseInt(currentValue.textContent) + "px";
        cont.appendChild(div);
    }
    startPainting();
});

const rainbowBtn = document.querySelector("#rainbowBtn");
rainbowBtn.addEventListener("click",()=>{
    let items = document.querySelectorAll(".insiders");
    let itemsArray = Array.from(items);

    items.forEach(x =>{
            x.addEventListener("mouseover", (e)=>{
                isHover = true;
                if(e.buttons === 1){
                    const one = getRandomArbitrary(0,255);
                    const two = getRandomArbitrary(0,255);
                    const three = getRandomArbitrary(0,255);
                    x.style.backgroundColor = "rgb(" + one + "," + two + "," + three +")";
                }
            });
    });

    items.forEach(x =>{
        x.addEventListener("mousedown", (e)=>{
            e.preventDefault();
            isHover = true;
            if(e.buttons === 1){
                const one = getRandomArbitrary(0,255);
                const two = getRandomArbitrary(0,255);
                const three = getRandomArbitrary(0,255);
                x.style.backgroundColor = "rgb(" + one + "," + two + "," + three +")";
            }
        });
    });

});

const blackBtn = document.querySelector("#blackBtn");
blackBtn.addEventListener("click", ()=>{
    startPainting();

});


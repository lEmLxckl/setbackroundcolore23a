console.log("Jeg er i set backround color")

function setBackroundColor(){
    let col = inp.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor;
    pbCol.style.color = col;
}

function useColorPicker(){
    let col = inpColorPicker.value
    console.log(col);
    bdy.style.backgroundColor = col;
    pbCol.style.color = col;t
    inpColorValue = bdy.style.backgroundColor;
}

let inpColorValue = document.querySelector(".inpColorValue");
let inpColorPicker = document.getElementById("inpColorPicker");

let inp = document.querySelector(".inpColor");
console.log(inp)

let pbCol = document.querySelector(".pbSetColor")
console.log(pbCol)
pbCol.textContent = "Tryk mig for at sætte color"

const pTags = document.getElementsByTagName('p')
console.log(pTags)

let pTagarr = Array.from(pTags);
console.log("pTagarr");
console.log(pTagarr)
pTagarr.forEach(p => p.textContent = "Din kurder det er foreach")

let bdy = document.querySelector("body")
console.log(bdy)

pbCol.addEventListener('click', setBackroundColor);

document.addEventListener('keyup', setBackroundColor);

inpColorPicker.addEventListener("input", useColorPicker)



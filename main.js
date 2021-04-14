let canvas, ctx;
let shiftRight;
let shiftDown;
let slider;
let button;
let button2;

document.addEventListener('DOMContentLoaded', (ev)=>{
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = 480;
    canvas.height = 360;
    
    let img = new Image();
    
    img.onload = function(){
        ctx.drawImage(img, 0, 0, 480, 360);
    };
    img.src = 'img.jpg';

    button = document.getElementById('buttonRight');
    button.addEventListener('click', ShiftRed)

    //button2 = document.getElementById('button2');
    //button2.addEventListener('click', Shift)




    sliderRight = document.getElementById('sliderRight');
    var outputRight = document.getElementById('outputRight');
    shiftRight = sliderRight.value;
    outputRight.innerHTML = sliderRight.value;

    sliderDown = document.getElementById('sliderDown');
    var outputDown = document.getElementById('outputDown');
    shiftDown = sliderDown.value * 480;
    outputDown.innerHTML = sliderDown.value;




    sliderRight.oninput = function() {
        shiftRight = this.value;
        outputRight.innerHTML = this.value;
    }
    sliderDown.oninput = function() {
        shiftDown = this.value * 480;
        outputDown.innerHTML = this.value;
    }
});

function ShiftRed(ev){
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let array = imgData.data;
    let newarray = array;
    let total = 480 * 360 * 4;
    

    for (let i = total - 4; i > 0; i-=4) {
        newarray[i] = array[i - shiftRight * 4 - shiftDown * 4];
    }

    
    imgData.data = newarray;
    ctx.putImageData(imgData, 0, 0)
}

function ShiftGreen(ev){
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let array = imgData.data;
    let newarray = array;
    let total = 480 * 360 * 4;
    let totalwidth = 480 * 4;

    for (let i = total - 3; i > 0; i-=4) {
        newarray[i] = array[i - shiftRight * 4 - shiftDown * 4];
    }

    
    imgData.data = newarray;
    ctx.putImageData(imgData, 0, 0)
}

function ShiftBlue(ev){
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let array = imgData.data;
    let newarray = array;
    let total = 480 * 360 * 4;
    let totalwidth = 480 * 4;

    for (let i = total - 2; i > 0; i-=4) {
        newarray[i] = array[i - shiftRight * 4 - shiftDown * 4];
    }

    
    imgData.data = newarray;
    ctx.putImageData(imgData, 0, 0)
}

function Shift(ev){
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let array = imgData.data;
    let newarray = array;
    let total = 480 * 360 * 4;
    let totalwidth = 480 * 4;
    let skip = 50 * totalwidth;

    for (let i = total - (170 * totalwidth); i > total - (190 * totalwidth); i-=4) {
        newarray[i] = array[i - shiftRight * 4];
    }
    for (let i = total - (170 * totalwidth) - 1; i > total - (190 * totalwidth); i-=4) {
        newarray[i] = array[i - shiftRight * 4];
    }
    for (let i = total - (170 * totalwidth) - 2; i > total - (190 * totalwidth); i-=4) {
        newarray[i] = array[i - shiftRight * 4];
    }
    for (let i = total - (170 * totalwidth) - 3; i > total - (190 * totalwidth); i-=4) {
        newarray[i] = array[i - shiftRight * 4];
    }

    
    imgData.data = newarray;
    ctx.putImageData(imgData, 0, 0)
}


function ShiftRedMCYK(ev){
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let array = imgData.data;
    let newarray = array;
    let total = 480 * 360 * 4;
    

    for (let i = total - 2; i > 0; i-=4) {
        newarray[i] = array[i - shiftRight * 4 - shiftDown * 4];
    }
    for (let i = total - 3; i > 0; i-=4) {
        newarray[i] = array[i - shiftRight * 4 - shiftDown * 4];
    }

    
    imgData.data = newarray;
    ctx.putImageData(imgData, 0, 0)
}
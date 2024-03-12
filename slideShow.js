var obrazek = 1;
setInterval(function (){
    document.getElementById("Image" + obrazek).checked = true;
    obrazek++;
    if (obrazek >4){
        obrazek = 1;
    }
},5000);
const y = new Date();
var year = y.getFullYear();

console.log(year);

function getYear() {
    document.getElementById("Copyright").innerHTML = "© " + year + " Adam Blahout";
}


const abeceda = {
    "A" : "ᚨ" , "B" : "ᛒ", "C" : "ᚲ",
    "D" : "ᛞ", "E" : "ᛖ", "F" : "ᚠ",
    "G" : "ᚷ", "G" : "ᚺ", "I" : "ᛁ",
    "J" : "ᛃ", "K" : "ᚲ", "L" : "ᛚ",
    "M" : "ᛗ", "N" : "ᚾ", "O" : "ᛟ",
    "P" : "ᛈ", "Q" : "ᚲ", "R" : "ᚱ",
    "S" : "ᛊ", "T" : "ᛏ", "U" : "ᚢ",
    "V" : "ᚹ", "W" : "ᚹ", "X" : "X",
    "Y" : "ᛁ", "Z" : "ᛉ"

}

function prekladac(){
    let input = document.getElementById("input").value;

    input = input.toUpperCase();
    let pole = input.split("");
    let pole2 = pole.map(x => {
        if (abeceda[x]){
            return abeceda[x];
        }else{
            return x;
        }
    });

    let kod = pole2.join("");
    document.getElementById("output").value = kod;

}
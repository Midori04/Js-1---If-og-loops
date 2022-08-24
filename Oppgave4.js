var a = parseInt(prompt ("Skriv et tall"));
var b = parseInt(prompt ("Skriv et tall"));

if ( a == 50 && b == 50) {
    console.log("begge to er 50")
} else if ( a == 50 || b == 50) {
    console.log("en av dem to er 50")
} else if ( a == 40 || b == 40) {
    console.log("summen eller en av dem er ikke 50")
} else if ( a == 30 || b == 20) {
    console.log("summen er 50")
}